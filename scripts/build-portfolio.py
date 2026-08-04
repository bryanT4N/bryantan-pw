# -*- coding: utf-8 -*-
"""Regenerate static/portfolio/ from the Typora export.

    python scripts/build-portfolio.py [path/to/谭磊轩_作品集]

The published page is NOT a copy of the export. Six transforms are applied
every time, so re-exporting from Typora and running this script is the only
supported way to update /portfolio/ -- hand-editing index.html loses work on
the next run.

  1. Resources the site already ships  ->  ../img/projects/...
     Three of these point at a DIFFERENT file than the export names:
     the gameplay video is re-encoded, the 4-player shot is a JPG, and
     chess_light_debug.png lives under the name chess_normals.png.
  2. Resources only the portfolio uses ->  copied to ./assets/
  3. Two heavy files change form: the AI clip becomes an existing mp4,
     the ArachNOT trailer becomes a YouTube embed.
  4. Excel subpages are transcoded from GB2312 to UTF-8.
  5. Collapsible section headings are injected (CSS + JS).
  6. Everything else is left byte-for-byte as exported.

Running it twice in a row must produce an identical file.
"""
import io
import os
import re
import shutil
import sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEFAULT_EXPORT_DIR = os.path.join(os.path.dirname(REPO), '作品集', '谭磊轩_作品集')
OUT_HTML = os.path.join(REPO, 'static', 'portfolio', 'index.html')
OUT_ASSETS = os.path.join(REPO, 'static', 'portfolio', 'assets')

# ---------------------------------------------------------------- transforms

REUSED_FROM_SITE = [
    ('aaa_courtroom.png',            '../img/projects/dfs1/courtroom.png'),
    ('aaa_gameplay.gif',             '../img/projects/dfs1/gameplay.gif'),
    ('aaa_objection.png',            '../img/projects/dfs1/objection.png'),
    ('aaa_cross_examination.png',    '../img/projects/dfs1/cross_examination.png'),
    ('chess_lit.png',                '../img/projects/engine/chess_lit.png'),
    ('chess_light_debug.png',        '../img/projects/engine/chess_normals.png'),
    ('doomenstein.mp4',              '../img/projects/engine/Doomenstein.mp4'),
    ('hamsterballin_gameplay.mp4',   '../img/projects/tgp2/gameplay.mp4'),
    ('hamsterballin_4p.png',         '../img/projects/tgp2/splitscreen_4p.jpg'),
    ('hamsterballin_ai_debug.png',   '../img/projects/tgp2/ai_lanes.png'),
]

COPIED_TO_ASSETS = [
    'info_g_a.png',
    'libra_enemy.mp4',
    'BTan_TGP1_ArachNOT_Screenshot_01.gif',
    'BTan_TGP1_ArachNOT_Screenshot_02.gif',
    'BTan_TGP1_ArachNOT_Screenshot_03.gif',
    'BTan_TGP1_ArachNOT_Screenshot_04.gif',
]

OBSTACLES_GIF = '<img src="./.assets/hamsterballin_ai_obstacles.gif" style="width: 100%">'
OBSTACLES_MP4 = ('<video src="../img/projects/tgp2/ai_obstacles.mp4" style="width: 100%"'
                 ' autoplay muted loop playsinline></video>')

TRAILER_VIDEO = ('<video src="./.assets/arachnot_trailer.mp4"\n'
                 '       controls\n'
                 '       autoplay\n'
                 '       muted\n'
                 '       loop\n'
                 '       playsinline>\n'
                 '</video>')
TRAILER_EMBED = """<iframe
       src="https://www.youtube.com/embed/SwW2MTjFZvY"
       title="ArachNOT trailer"
       style="aspect-ratio:16/9;"
       loading="lazy"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowFullScreen>
</iframe>"""

# Headings that stay static, by id. Everything else in h2/h3 becomes clickable.
STATIC_HEADINGS = ['展示作品一览']

COLLAPSE_CSS = """<style id="section-collapse">
#write h2.collapsible, #write h3.collapsible { cursor: pointer; }
#write h2.collapsible::before, #write h3.collapsible::before {
  content: '\\25bc\\fe0e';
  display: inline-block;
  width: 1.15em;
  margin-left: -1.15em;
  font-size: 0.7em;
  vertical-align: 0.12em;
  color: var(--accent-blue);
  opacity: 0.55;
}
#write h2.collapsible[data-collapsed='true']::before,
#write h3.collapsible[data-collapsed='true']::before { content: '\\25b6\\fe0e'; }
#write h2.collapsible:hover::before, #write h3.collapsible:hover::before { opacity: 1; }
</style>"""

COLLAPSE_JS = """<script id="section-collapse-js">
(function () {
  var write = document.getElementById('write');
  if (!write) return;

  var STATIC_HEADINGS = __STATIC_HEADINGS__;
  var kids = Array.prototype.slice.call(write.children);

  function levelOf(el) {
    if (el.tagName === 'H2') return 2;
    if (el.tagName === 'H3') return 3;
    return 0;
  }

  var sections = [];
  kids.forEach(function (el, i) {
    var level = levelOf(el);
    if (!level || !el.id || STATIC_HEADINGS.indexOf(el.id) >= 0) return;
    var owned = [];
    for (var j = i + 1; j < kids.length; j++) {
      var next = levelOf(kids[j]);
      if (next && next <= level) break;
      owned.push(kids[j]);
    }
    var hideable = owned.slice();
    if (hideable.length && hideable[0].tagName === 'HR') hideable.shift();
    sections.push({ heading: el, level: level, owned: owned, hideable: hideable });
  });
  if (!sections.length) return;

  var collapsed = {};
  sections.forEach(function (s) { collapsed[s.heading.id] = s.level === 3; });

  function render() {
    kids.forEach(function (el) { el.style.display = ''; });
    sections.forEach(function (s) {
      if (!collapsed[s.heading.id]) return;
      s.hideable.forEach(function (el) { el.style.display = 'none'; });
    });
    sections.forEach(function (s) {
      s.heading.setAttribute('data-collapsed', collapsed[s.heading.id] ? 'true' : 'false');
      s.heading.setAttribute('aria-expanded', collapsed[s.heading.id] ? 'false' : 'true');
    });
  }

  function toggle(s) {
    collapsed[s.heading.id] = !collapsed[s.heading.id];
    render();
  }

  sections.forEach(function (s) {
    var h = s.heading;
    h.classList.add('collapsible');
    h.setAttribute('role', 'button');
    h.setAttribute('tabindex', '0');
    h.addEventListener('click', function () {
      var sel = window.getSelection();
      if (sel && !sel.isCollapsed) return;
      toggle(s);
    });
    h.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        toggle(s);
      }
    });
  });

  function expandForHash() {
    var id = (location.hash || '').slice(1);
    if (!id) return false;
    try { id = decodeURIComponent(id); } catch (err) {}
    var target = document.getElementById(id);
    if (!target) return false;
    var changed = false;
    sections.forEach(function (s) {
      var owns = s.heading === target || s.owned.indexOf(target) >= 0;
      if (owns && collapsed[s.heading.id]) { collapsed[s.heading.id] = false; changed = true; }
    });
    if (changed) render();
    target.scrollIntoView();
    return changed;
  }

  render();
  expandForHash();
  window.addEventListener('hashchange', expandForHash);
  write.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (a) setTimeout(expandForHash, 0);
  });
})();
</script>"""


def write_atomic(path, data, binary=False):
    mode = 'wb' if binary else 'w'
    kwargs = {} if binary else {'encoding': 'utf-8', 'newline': ''}
    with io.open(path + '.tmp', mode, **kwargs) as fh:
        fh.write(data)
    os.replace(path + '.tmp', path)


def find_export(export_dir):
    matches = [n for n in os.listdir(export_dir)
               if n.endswith('.html') and not n.startswith('.')]
    if len(matches) != 1:
        raise SystemExit('expected exactly one .html export in %s, found %d'
                         % (export_dir, len(matches)))
    return os.path.join(export_dir, matches[0])


def build_index(src_html, log):
    out = io.open(src_html, encoding='utf-8', newline='').read()

    subpages = sorted(set(re.findall(r'\./\.assets/(\d+-[^"]+\.html)', out)))
    if not subpages:
        raise SystemExit('no Excel subpages referenced by the export')

    for name in subpages + COPIED_TO_ASSETS:
        ref = './.assets/' + name
        n = out.count(ref)
        if not n:
            raise SystemExit('export never references %s' % ref)
        out = out.replace(ref, './assets/' + name)
        log.append('  ->assets   x%-2d %s' % (n, name))

    for name, target in REUSED_FROM_SITE:
        ref = './.assets/' + name
        n = out.count(ref)
        if not n:
            raise SystemExit('export never references %s' % ref)
        out = out.replace(ref, target)
        log.append('  ->site     x%-2d %s  ->  %s' % (n, name, target.rsplit('/', 1)[-1]))

    if out.count(OBSTACLES_GIF) != 1:
        raise SystemExit('the AI clip <img> tag changed shape; update OBSTACLES_GIF')
    out = out.replace(OBSTACLES_GIF, OBSTACLES_MP4)

    if out.count(TRAILER_VIDEO) != 1:
        raise SystemExit('the trailer <video> tag changed shape; update TRAILER_VIDEO')
    out = out.replace(TRAILER_VIDEO, TRAILER_EMBED)
    log.append('  ->form     ai_obstacles gif -> mp4, ArachNOT trailer -> YouTube')

    if out.count('</style><title>') != 1:
        raise SystemExit('cannot locate the end of the custom style block')
    out = out.replace('</style><title>', '</style>' + COLLAPSE_CSS + '<title>', 1)

    script = COLLAPSE_JS.replace(
        '__STATIC_HEADINGS__',
        '[' + ', '.join("'%s'" % h for h in STATIC_HEADINGS) + ']')
    if out.count('</body>') != 1:
        raise SystemExit('cannot locate </body>')
    out = out.replace('</body>', script + '\n</body>', 1)
    log.append('  ->inject   collapsible headings (static: %s)' % ', '.join(STATIC_HEADINGS))

    if './.assets/' in out:
        leftover = re.findall(r'\./\.assets/[^"\')]+', out)
        raise SystemExit('unmapped export resources: %s' % sorted(set(leftover)))
    for needle, why in [('youtube.com/embed/SwW2MTjFZvY', 'YouTube embed'),
                        ('tgp2/ai_obstacles.mp4', 'AI clip mp4'),
                        ('section-collapse-js', 'collapse script')]:
        if needle not in out:
            raise SystemExit('%s went missing' % why)

    return out, subpages


def copy_assets(export_dir, subpages, log):
    src_dir = os.path.join(export_dir, '.assets')
    if not os.path.isdir(src_dir):
        raise SystemExit('missing %s' % src_dir)
    os.makedirs(OUT_ASSETS, exist_ok=True)

    for name in COPIED_TO_ASSETS:
        shutil.copy2(os.path.join(src_dir, name), os.path.join(OUT_ASSETS, name))
    log.append('  copied     %d media files' % len(COPIED_TO_ASSETS))

    for name in subpages:
        raw = io.open(os.path.join(src_dir, name), 'rb').read()
        text = raw.decode('gb18030')
        text, n = re.subn(r'charset=gb2312', 'charset=UTF-8', text, flags=re.I)
        if not n:
            raise SystemExit('%s has no charset declaration to rewrite' % name)
        write_atomic(os.path.join(OUT_ASSETS, name), text)
        log.append('  transcode  %-42s %7d -> %7d B' % (name, len(raw), len(text.encode('utf-8'))))

        companion = name[:-len('.html')] + '.files'
        src_companion = os.path.join(src_dir, companion)
        if os.path.isdir(src_companion):
            dst_companion = os.path.join(OUT_ASSETS, companion)
            if os.path.isdir(dst_companion):
                shutil.rmtree(dst_companion)
            shutil.copytree(src_companion, dst_companion)
            log.append('  companion  %s (%d files)' % (companion, len(os.listdir(dst_companion))))


def main():
    export_dir = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_EXPORT_DIR
    if not os.path.isdir(export_dir):
        raise SystemExit('export folder not found: %s' % export_dir)

    src_html = find_export(export_dir)
    log = []
    out, subpages = build_index(src_html, log)
    copy_assets(export_dir, subpages, log)
    write_atomic(OUT_HTML, out)

    sys.stdout.reconfigure(encoding='utf-8')
    print('source: %s' % src_html)
    print('\n'.join(log))
    print('wrote:  %s  (%d chars, %d lines)' % (OUT_HTML, len(out), out.count('\n') + 1))
    print('\nNow run `pnpm build` and check /portfolio/ before committing.')


if __name__ == '__main__':
    main()
