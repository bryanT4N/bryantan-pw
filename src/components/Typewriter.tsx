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
  lineGap?: string;              // CSS gap between lines (e.g. '1rem'), default none
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
  lineGap,
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

  const renderContent = () =>
    lines.map((line, i) => {
      const isActive = start && !done && i === lineIdx;
      const isFinished = start && (done || i < lineIdx);
      const allHidden = !start || (!done && i > lineIdx);
      const showCursorHere = showCursor && start && (
        isActive ? hasTyped :
        done && keepCursorWhenDone && i === lines.length - 1
      );

      const lastVisibleIdx = isFinished ? line.length - 1 : (isActive ? charIdx - 1 : -1);

      const chars: React.ReactNode[] = [];
      for (let j = 0; j < line.length; j++) {
        const visible = isFinished || (isActive && j < charIdx);
        const isCursorAnchor = showCursorHere && j === lastVisibleIdx;
        chars.push(
          <span key={j} className={`${visible ? '' : styles.hidden}${isCursorAnchor ? ` ${styles.cursorAnchor}` : ''}`}>{line[j]}</span>
        );
      }

      return (
        <React.Fragment key={i}>
          {allHidden ? (
            <span className={styles.hidden}>{line}</span>
          ) : chars}
          {i < lines.length - 1 && <span className={styles.lineBreak} style={lineGap ? { height: lineGap } : undefined} />}
        </React.Fragment>
      );
    });

  return (
    <span className={className ? `${styles.wrap} ${className}` : styles.wrap} aria-hidden="true">
      {renderContent()}
      <span className={styles.srOnly}>{lines.join(' ')}</span>
    </span>
  );
}
