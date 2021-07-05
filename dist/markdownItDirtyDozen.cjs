/*! markdown-it-dirty-dozen 1.0.1-9 https://github.com//GerHobbelt/markdown-it-dirty-dozen @license MIT */

'use strict';

var abbr = require('@gerhobbelt/markdown-it-abbr');
var alerts = require('@gerhobbelt/markdown-it-alerts');
var anchor = require('@gerhobbelt/markdown-it-anchor');
var attribution = require('@gerhobbelt/markdown-it-attribution');
var attrs = require('@gerhobbelt/markdown-it-attrs');
var checkbox = require('@gerhobbelt/markdown-it-checkbox');
var container = require('@gerhobbelt/markdown-it-container');
var criticMarkup = require('@gerhobbelt/markdown-it-criticmarkup');
var deflist = require('@gerhobbelt/markdown-it-deflist');
var emoji = require('@gerhobbelt/markdown-it-emoji');
var fontawesome = require('@gerhobbelt/markdown-it-fontawesome');
var footnote = require('@gerhobbelt/markdown-it-footnote');
var forInline = require('@gerhobbelt/markdown-it-for-inline');
var frontMatter = require('@gerhobbelt/markdown-it-front-matter');
var furigana = require('@gerhobbelt/markdown-it-furigana');
var githubHeadings = require('@gerhobbelt/markdown-it-github-headings');
var hashtag = require('@gerhobbelt/markdown-it-hashtag');
var headerSections = require('@gerhobbelt/markdown-it-header-sections');
var implicitFigures = require('@gerhobbelt/markdown-it-implicit-figures');
var include = require('@gerhobbelt/markdown-it-include');
var ins = require('@gerhobbelt/markdown-it-ins');
var kbd = require('@gerhobbelt/markdown-it-kbd');
var mark = require('@gerhobbelt/markdown-it-mark');
var mathjax = require('@gerhobbelt/markdown-it-mathjax');
var modifyToken = require('@gerhobbelt/markdown-it-modify-token');
var namedHeadings = require('@gerhobbelt/markdown-it-named-headings');
var prism = require('@gerhobbelt/markdown-it-prism');
var regexp = require('@gerhobbelt/markdown-it-regexp');
var responsive = require('@gerhobbelt/markdown-it-responsive');
var samp = require('@gerhobbelt/markdown-it-samp');
var sanitizer = require('@gerhobbelt/markdown-it-sanitizer');
var shortcodeTag = require('@gerhobbelt/markdown-it-shortcode-tag');
var smartarrows = require('@gerhobbelt/markdown-it-smartarrows');
var strikethroughAlt = require('@gerhobbelt/markdown-it-strikethrough-alt');
var sub = require('@gerhobbelt/markdown-it-sub');
var sup = require('@gerhobbelt/markdown-it-sup');
var tableOfContents = require('@gerhobbelt/markdown-it-table-of-contents');
var title = require('@gerhobbelt/markdown-it-title');
var toc = require('@gerhobbelt/markdown-it-toc');
var tocAndAnchor = require('@gerhobbelt/markdown-it-toc-and-anchor');
var tocDoneRight = require('@gerhobbelt/markdown-it-toc-done-right');
var wikilinks = require('@gerhobbelt/markdown-it-wikilinks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var abbr__default = /*#__PURE__*/_interopDefaultLegacy(abbr);
var alerts__default = /*#__PURE__*/_interopDefaultLegacy(alerts);
var anchor__default = /*#__PURE__*/_interopDefaultLegacy(anchor);
var attribution__default = /*#__PURE__*/_interopDefaultLegacy(attribution);
var attrs__default = /*#__PURE__*/_interopDefaultLegacy(attrs);
var checkbox__default = /*#__PURE__*/_interopDefaultLegacy(checkbox);
var container__default = /*#__PURE__*/_interopDefaultLegacy(container);
var criticMarkup__default = /*#__PURE__*/_interopDefaultLegacy(criticMarkup);
var deflist__default = /*#__PURE__*/_interopDefaultLegacy(deflist);
var emoji__default = /*#__PURE__*/_interopDefaultLegacy(emoji);
var fontawesome__default = /*#__PURE__*/_interopDefaultLegacy(fontawesome);
var footnote__default = /*#__PURE__*/_interopDefaultLegacy(footnote);
var forInline__default = /*#__PURE__*/_interopDefaultLegacy(forInline);
var frontMatter__default = /*#__PURE__*/_interopDefaultLegacy(frontMatter);
var furigana__default = /*#__PURE__*/_interopDefaultLegacy(furigana);
var githubHeadings__default = /*#__PURE__*/_interopDefaultLegacy(githubHeadings);
var hashtag__default = /*#__PURE__*/_interopDefaultLegacy(hashtag);
var headerSections__default = /*#__PURE__*/_interopDefaultLegacy(headerSections);
var implicitFigures__default = /*#__PURE__*/_interopDefaultLegacy(implicitFigures);
var include__default = /*#__PURE__*/_interopDefaultLegacy(include);
var ins__default = /*#__PURE__*/_interopDefaultLegacy(ins);
var kbd__default = /*#__PURE__*/_interopDefaultLegacy(kbd);
var mark__default = /*#__PURE__*/_interopDefaultLegacy(mark);
var mathjax__default = /*#__PURE__*/_interopDefaultLegacy(mathjax);
var modifyToken__default = /*#__PURE__*/_interopDefaultLegacy(modifyToken);
var namedHeadings__default = /*#__PURE__*/_interopDefaultLegacy(namedHeadings);
var prism__default = /*#__PURE__*/_interopDefaultLegacy(prism);
var regexp__default = /*#__PURE__*/_interopDefaultLegacy(regexp);
var responsive__default = /*#__PURE__*/_interopDefaultLegacy(responsive);
var samp__default = /*#__PURE__*/_interopDefaultLegacy(samp);
var sanitizer__default = /*#__PURE__*/_interopDefaultLegacy(sanitizer);
var shortcodeTag__default = /*#__PURE__*/_interopDefaultLegacy(shortcodeTag);
var smartarrows__default = /*#__PURE__*/_interopDefaultLegacy(smartarrows);
var strikethroughAlt__default = /*#__PURE__*/_interopDefaultLegacy(strikethroughAlt);
var sub__default = /*#__PURE__*/_interopDefaultLegacy(sub);
var sup__default = /*#__PURE__*/_interopDefaultLegacy(sup);
var tableOfContents__default = /*#__PURE__*/_interopDefaultLegacy(tableOfContents);
var title__default = /*#__PURE__*/_interopDefaultLegacy(title);
var toc__default = /*#__PURE__*/_interopDefaultLegacy(toc);
var tocAndAnchor__default = /*#__PURE__*/_interopDefaultLegacy(tocAndAnchor);
var tocDoneRight__default = /*#__PURE__*/_interopDefaultLegacy(tocDoneRight);
var wikilinks__default = /*#__PURE__*/_interopDefaultLegacy(wikilinks);

const defaultOptions = {
  include: {
    //root: '.',
    includeRe: /#include(.+)/,
    throwError: true,
    bracesAreOptional: true
  },
  frontMatter: true,
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
  abbr: false,
  // damages tickboxes, etc.
  headerSections: true,
  namedHeadings: true,
  furigana: true,
  attrs: true,
  deflist: true,
  alerts: {
    links: true,
    icons: true
  },
  attribution: true,
  checkbox: true,
  emoji: true,
  criticMarkup: true,
  modifyToken: true,
  shortcodeTag: true,
  prism: true,
  wikilinks: true,
  title: {
    level: 0,
    // grab the FIRST header we encounter and serve that as the page title! (even when that's not a H1!)
    excerpt: 0 // no excerpt...

  }
};

function use_dirty_dozen(md, options) {
  console.log('dirty dozen init A:', options, typeof options);

  if (typeof options === 'object') {
    options = Object.assign({}, defaultOptions, options);
  } else if (options === true) {
    // use all plugins in the set, their configuration augmented with the settings specified above.
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
    usePlugin(include__default['default'], options.include, defaultOptions.include);
    usePlugin(frontMatter__default['default'], options.frontMatter, defaultOptions.frontMatter);
    usePlugin(sanitizer__default['default'], options.sanitizer, defaultOptions.sanitizer);
    usePlugin(checkbox__default['default'], options.checkbox, defaultOptions.checkbox);
    usePlugin(furigana__default['default'], options.furigana, defaultOptions.furigana);
    usePlugin(abbr__default['default'], options.abbr, defaultOptions.abbr);
    usePlugin(attribution__default['default'], options.attribution, defaultOptions.attribution);
    usePlugin(attrs__default['default'], options.attrs, defaultOptions.attrs);
    usePlugin(emoji__default['default'], options.emoji, defaultOptions.emoji);
    usePlugin(fontawesome__default['default'], options.fontawesome, defaultOptions.fontawesome);
    usePlugin(forInline__default['default'], options.forInline, defaultOptions.forInline);
    usePlugin(hashtag__default['default'], options.hashtag, defaultOptions.hashtag);
    usePlugin(criticMarkup__default['default'], options.criticMarkup, defaultOptions.criticMarkup);
    usePlugin(ins__default['default'], options.ins, defaultOptions.ins);
    usePlugin(kbd__default['default'], options.kbd, defaultOptions.kbd);
    usePlugin(mark__default['default'], options.mark, defaultOptions.mark);
    usePlugin(samp__default['default'], options.samp, defaultOptions.samp);
    usePlugin(shortcodeTag__default['default'], options.shortcodeTag, defaultOptions.shortcodeTag);
    usePlugin(smartarrows__default['default'], options.smartarrows, defaultOptions.smartarrows);
    usePlugin(strikethroughAlt__default['default'], options.strikethroughAlt, defaultOptions.strikethroughAlt);
    usePlugin(sub__default['default'], options.sub, defaultOptions.sub);
    usePlugin(sup__default['default'], options.sup, defaultOptions.sup);
    usePlugin(deflist__default['default'], options.deflist, defaultOptions.deflist);
    usePlugin(implicitFigures__default['default'], options.implicitFigures, defaultOptions.implicitFigures);
    usePlugin(responsive__default['default'], options.responsive, defaultOptions.responsive);
    usePlugin(mathjax__default['default'], options.mathjax, defaultOptions.mathjax);
    usePlugin(prism__default['default'], options.prism, defaultOptions.prism); //usePlugin(highlightjs, options.highlightjs, defaultOptions.highlightjs);

    usePlugin(container__default['default'], options.container, defaultOptions.container);
    usePlugin(title__default['default'], options.title, defaultOptions.title);
    usePlugin(footnote__default['default'], options.footnote, defaultOptions.footnote);
    usePlugin(alerts__default['default'], options.alerts, defaultOptions.alerts);
    usePlugin(headerSections__default['default'], options.headerSections, defaultOptions.headerSections);
    usePlugin(namedHeadings__default['default'], options.namedHeadings, defaultOptions.namedHeadings);
    usePlugin(tableOfContents__default['default'], options.tableOfContents, defaultOptions.tableOfContents);
    usePlugin(toc__default['default'], options.toc, defaultOptions.toc);
    usePlugin(tocAndAnchor__default['default'], options.tocAndAnchor, defaultOptions.tocAndAnchor);
    usePlugin(tocDoneRight__default['default'], options.tocDoneRight, defaultOptions.tocDoneRight);
    usePlugin(githubHeadings__default['default'], options.githubHeadings, defaultOptions.githubHeadings);
    usePlugin(anchor__default['default'], options.anchor, defaultOptions.anchor); //usePlugin(highlighted, options.highlighted, defaultOptions.highlighted);

    usePlugin(wikilinks__default['default'], options.wikilinks, defaultOptions.wikilinks);
    usePlugin(regexp__default['default'], options.regexp, defaultOptions.regexp);
    usePlugin(modifyToken__default['default'], options.modifyToken, defaultOptions.modifyToken);
  }

  return md;
}

const pluginDef = {
  use_dirty_dozen,
  abbr: abbr__default['default'],
  alerts: alerts__default['default'],
  anchor: anchor__default['default'],
  attribution: attribution__default['default'],
  attrs: attrs__default['default'],
  checkbox: checkbox__default['default'],
  container: container__default['default'],
  criticMarkup: criticMarkup__default['default'],
  deflist: deflist__default['default'],
  emoji: emoji__default['default'],
  fontawesome: fontawesome__default['default'],
  footnote: footnote__default['default'],
  forInline: forInline__default['default'],
  frontMatter: frontMatter__default['default'],
  furigana: furigana__default['default'],
  githubHeadings: githubHeadings__default['default'],
  hashtag: hashtag__default['default'],
  headerSections: headerSections__default['default'],
  //highlighted,
  //highlightjs,
  implicitFigures: implicitFigures__default['default'],
  include: include__default['default'],
  ins: ins__default['default'],
  kbd: kbd__default['default'],
  mark: mark__default['default'],
  mathjax: mathjax__default['default'],
  modifyToken: modifyToken__default['default'],
  namedHeadings: namedHeadings__default['default'],
  prism: prism__default['default'],
  regexp: regexp__default['default'],
  responsive: responsive__default['default'],
  samp: samp__default['default'],
  sanitizer: sanitizer__default['default'],
  shortcodeTag: shortcodeTag__default['default'],
  smartarrows: smartarrows__default['default'],
  strikethroughAlt: strikethroughAlt__default['default'],
  sub: sub__default['default'],
  sup: sup__default['default'],
  tableOfContents: tableOfContents__default['default'],
  title: title__default['default'],
  toc: toc__default['default'],
  tocAndAnchor: tocAndAnchor__default['default'],
  tocDoneRight: tocDoneRight__default['default'],
  wikilinks: wikilinks__default['default']
};

module.exports = pluginDef;
//# sourceMappingURL=markdownItDirtyDozen.cjs.map
