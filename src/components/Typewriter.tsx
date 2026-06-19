import React, { useEffect, useRef, useState } from 'react';
import styles from './Typewriter.module.css';

type TypewriterProps = {
  lines: string[];
  start?: boolean;          // gate typing (used to chain one typewriter after another)
  onStart?: () => void;     // fired when the first character is typed
  onDone?: () => void;      // fired once all lines finish
  typingSpeedMs?: number;   // per character
  linePauseMs?: number;     // pause after a line finishes, before the next
  startDelayMs?: number;    // delay before typing begins
  showCursor?: boolean;
  keepCursorWhenDone?: boolean;  // keep the caret blinking after finishing
  className?: string;
};

// Types out lines one at a time, char by char, pausing between lines.
// The caret only appears once something has been typed and parks at the end
// of the last typed line during pauses. A hidden sizer reserves the full final
// box so the layout never shifts. SSR-safe, respects prefers-reduced-motion,
// keeps full text for screen readers.
export default function Typewriter({
  lines,
  start = true,
  onStart,
  onDone,
  typingSpeedMs = 28,
  linePauseMs = 400,
  startDelayMs = 300,
  showCursor = true,
  keepCursorWhenDone = true,
  className,
}: TypewriterProps) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  const onStartRef = useRef(onStart);
  const onDoneRef = useRef(onDone);
  useEffect(() => {
    onStartRef.current = onStart;
    onDoneRef.current = onDone;
  });

  useEffect(() => {
    if (!start) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true);
      onStartRef.current?.();
      onDoneRef.current?.();
      return;
    }

    let li = 0;
    let ci = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const line = lines[li] ?? '';
      if (ci < line.length) {
        ci += 1;
        if (li === 0 && ci === 1) onStartRef.current?.();
        setLineIdx(li);
        setCharIdx(ci);
        timer = setTimeout(tick, typingSpeedMs);
      } else if (li < lines.length - 1) {
        // park the caret at the end of the finished line during the pause
        setLineIdx(li);
        setCharIdx(line.length);
        timer = setTimeout(() => {
          li += 1;
          ci = 0;
          tick();
        }, linePauseMs);
      } else {
        setDone(true);
        onDoneRef.current?.();
      }
    };

    timer = setTimeout(tick, startDelayMs);
    return () => clearTimeout(timer);
  }, [start, lines.join(''), typingSpeedMs, linePauseMs, startDelayMs]);

  const hasTyped = lineIdx > 0 || charIdx > 0;

  const renderLines = (typed: boolean) =>
    lines.map((line, i) => {
      let content: React.ReactNode = line;
      let cursorHere = false;
      if (typed) {
        content = !start
          ? ''
          : done || i < lineIdx
          ? line
          : i === lineIdx
          ? line.slice(0, charIdx)
          : '';
        cursorHere =
          showCursor &&
          start &&
          (done
            ? keepCursorWhenDone && i === lines.length - 1
            : hasTyped && i === lineIdx);
      }
      return (
        <React.Fragment key={i}>
          {content}
          {cursorHere && <span className={styles.cursor}>|</span>}
          {i < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });

  return (
    <span className={className ? `${styles.wrap} ${className}` : styles.wrap}>
      {/* invisible sizer reserves the full final box → no layout shift while typing */}
      <span className={styles.sizer} aria-hidden="true">
        {renderLines(false)}
      </span>
      {/* visible animated text, overlaid on the sizer */}
      <span className={styles.typed} aria-hidden="true">
        {renderLines(true)}
      </span>
      {/* full text for screen readers / SEO */}
      <span className={styles.srOnly}>{lines.join(' ')}</span>
    </span>
  );
}
