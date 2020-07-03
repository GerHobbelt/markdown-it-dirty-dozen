/*! markdown-it-dirty-dozen 1.0.1-5 https://github.com//GerHobbelt/markdown-it-dirty-dozen @license MIT */

const abbr = require('@gerhobbelt/markdown-it-abbr');

const alerts = require('@gerhobbelt/markdown-it-alerts');

const anchor = require('@gerhobbelt/markdown-it-anchor');

const attribution = require('@gerhobbelt/markdown-it-attribution');

const attrs = require('@gerhobbelt/markdown-it-attrs');

const checkbox = require('@gerhobbelt/markdown-it-checkbox');

const container = require('@gerhobbelt/markdown-it-container');

const deflist = require('@gerhobbelt/markdown-it-deflist');

const emoji = require('@gerhobbelt/markdown-it-emoji');

const fontawesome = require('@gerhobbelt/markdown-it-fontawesome');

const footnote = require('@gerhobbelt/markdown-it-footnote');

const forInline = require('@gerhobbelt/markdown-it-for-inline');

const frontMatter = require('@gerhobbelt/markdown-it-front-matter');

const githubHeadings = require('@gerhobbelt/markdown-it-github-headings');

const hashtag = require('@gerhobbelt/markdown-it-hashtag');

const headerSections = require('@gerhobbelt/markdown-it-header-sections');

const headinganchor = require('@gerhobbelt/markdown-it-headinganchor');

const highlighted = require('@gerhobbelt/markdown-it-highlighted');

const highlightjs = require('@gerhobbelt/markdown-it-highlightjs');

const implicitFigures = require('@gerhobbelt/markdown-it-implicit-figures');

const include = require('@gerhobbelt/markdown-it-include');

const ins = require('@gerhobbelt/markdown-it-ins');

const kbd = require('@gerhobbelt/markdown-it-kbd');

const mark = require('@gerhobbelt/markdown-it-mark');

const mathjax = require('@gerhobbelt/markdown-it-mathjax');

const modifyToken = require('@gerhobbelt/markdown-it-modify-token');

const namedHeadings = require('@gerhobbelt/markdown-it-named-headings');

const prism = require('@gerhobbelt/markdown-it-prism');

const regexp = require('@gerhobbelt/markdown-it-regexp');

const responsive = require('@gerhobbelt/markdown-it-responsive');

const samp = require('@gerhobbelt/markdown-it-samp');

const sanitizer = require('@gerhobbelt/markdown-it-sanitizer');

const smartarrows = require('@gerhobbelt/markdown-it-smartarrows');

const strikethroughAlt = require('@gerhobbelt/markdown-it-strikethrough-alt');

const sub = require('@gerhobbelt/markdown-it-sub');

const sup = require('@gerhobbelt/markdown-it-sup');

const tableOfContents = require('@gerhobbelt/markdown-it-table-of-contents');

const title = require('@gerhobbelt/markdown-it-title');

const toc = require('@gerhobbelt/markdown-it-toc');

const tocDoneRight = require('@gerhobbelt/markdown-it-toc-done-right');

const wikilinks = require('@gerhobbelt/markdown-it-wikilinks');

const defaultOptions = {
  include: {
    //root: '.',
    includeRe: /#include(.+)/,
    throwError: true,
    bracesAreOptional: true
  },
  ins: true,
  mark: true,
  kbd: {
    MARKER_OPEN: '[=',
    MARKER_CLOSE: '=]'
  },
  samp: true,
  sub: true,
  sup: true,
  footnote: true,
  deflist: true,
  alerts: true,
  attribution: true,
  checkbox: true,
  emoji: true,
  prism: true,
  wikilinks: true
};

function use_dirty_dozen(md, options) {
  console.log('dirty dozen init A:', options, typeof options);

  if (typeof options === 'object') {
    options = Object.assign({}, defaultOptions, options);
  } else if (options === true) {
    options = Object.assign({}, defaultOptions);
  } else if (options === false) {
    // all plugins are disabled
    options = null;
  } else {
    throw new Error('options must be an object or boolean!');
  }

  console.log('dirty dozen init:', options);

  function usePlugin(plugin, options, defaultOptions) {
    if (options) {
      // make sure a enable/diable boolean switch does not clutter the plugin *options* object:
      if (defaultOptions === true || defaultOptions === false) {
        defaultOptions = null;
      } // now see how we can mix the user-defined options and the defaults:


      if (typeof options === 'object') {
        options = Object.assign({}, defaultOptions, options);
      } else if (options === true) {
        options = Object.assign({}, defaultOptions);
      }

      md.use(plugin, options);
    }
  }

  console.log('dirty-dozen options:', options);

  if (options) {
    usePlugin(abbr, options.abbr, defaultOptions.abbr);
    usePlugin(alerts, options.alerts, defaultOptions.alerts);
    usePlugin(anchor, options.anchor, defaultOptions.anchor);
    usePlugin(attribution, options.attribution, defaultOptions.attribution);
    usePlugin(attrs, options.attrs, defaultOptions.attrs);
    usePlugin(checkbox, options.checkbox, defaultOptions.checkbox);
    usePlugin(container, options.container, defaultOptions.container);
    usePlugin(deflist, options.deflist, defaultOptions.deflist);
    usePlugin(emoji, options.emoji, defaultOptions.emoji);
    usePlugin(fontawesome, options.fontawesome, defaultOptions.fontawesome);
    usePlugin(footnote, options.footnote, defaultOptions.footnote);
    usePlugin(forInline, options.forInline, defaultOptions.forInline);
    usePlugin(frontMatter, options.frontMatter, defaultOptions.frontMatter);
    usePlugin(githubHeadings, options.githubHeadings, defaultOptions.githubHeadings);
    usePlugin(hashtag, options.hashtag, defaultOptions.hashtag);
    usePlugin(headerSections, options.headerSections, defaultOptions.headerSections);
    usePlugin(headinganchor, options.headinganchor, defaultOptions.headinganchor);
    usePlugin(highlighted, options.highlighted, defaultOptions.highlighted);
    usePlugin(highlightjs, options.highlightjs, defaultOptions.highlightjs);
    usePlugin(implicitFigures, options.implicitFigures, defaultOptions.implicitFigures);
    usePlugin(include, options.include, defaultOptions.include);
    usePlugin(ins, options.ins, defaultOptions.ins);
    usePlugin(kbd, options.kbd, defaultOptions.kbd);
    usePlugin(mark, options.mark, defaultOptions.mark);
    usePlugin(mathjax, options.mathjax, defaultOptions.mathjax);
    usePlugin(modifyToken, options.modifyToken, defaultOptions.modifyToken);
    usePlugin(namedHeadings, options.namedHeadings, defaultOptions.namedHeadings);
    usePlugin(prism, options.prism, defaultOptions.prism);
    usePlugin(regexp, options.regexp, defaultOptions.regexp);
    usePlugin(responsive, options.responsive, defaultOptions.responsive);
    usePlugin(samp, options.samp, defaultOptions.samp);
    usePlugin(sanitizer, options.sanitizer, defaultOptions.sanitizer);
    usePlugin(smartarrows, options.smartarrows, defaultOptions.smartarrows);
    usePlugin(strikethroughAlt, options.strikethroughAlt, defaultOptions.strikethroughAlt);
    usePlugin(sub, options.sub, defaultOptions.sub);
    usePlugin(sup, options.sup, defaultOptions.sup);
    usePlugin(tableOfContents, options.tableOfContents, defaultOptions.tableOfContents);
    usePlugin(title, options.title, defaultOptions.title);
    usePlugin(toc, options.toc, defaultOptions.toc);
    usePlugin(tocDoneRight, options.tocDoneRight, defaultOptions.tocDoneRight);
    usePlugin(wikilinks, options.wikilinks, defaultOptions.wikilinks);
  }

  return md;
}

const pluginDef = {
  use_dirty_dozen,
  abbr,
  alerts,
  anchor,
  attribution,
  attrs,
  checkbox,
  container,
  deflist,
  emoji,
  fontawesome,
  footnote,
  forInline,
  frontMatter,
  githubHeadings,
  hashtag,
  headerSections,
  headinganchor,
  highlighted,
  highlightjs,
  implicitFigures,
  include,
  ins,
  kbd,
  mark,
  mathjax,
  modifyToken,
  namedHeadings,
  prism,
  regexp,
  responsive,
  samp,
  sanitizer,
  smartarrows,
  strikethroughAlt,
  sub,
  sup,
  tableOfContents,
  title,
  toc,
  tocDoneRight,
  wikilinks
};
module.exports = pluginDef;
//# sourceMappingURL=markdownItDirtyDozen.modern.js.map
