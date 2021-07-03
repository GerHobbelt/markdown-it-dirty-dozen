/*! markdown-it-dirty-dozen 1.0.1-7 https://github.com//GerHobbelt/markdown-it-dirty-dozen @license MIT */

import abbr from '@gerhobbelt/markdown-it-abbr';
import alerts from '@gerhobbelt/markdown-it-alerts';
import anchor from '@gerhobbelt/markdown-it-anchor';
import attribution from '@gerhobbelt/markdown-it-attribution';
import attrs from '@gerhobbelt/markdown-it-attrs';
import checkbox from '@gerhobbelt/markdown-it-checkbox';
import container from '@gerhobbelt/markdown-it-container';
import criticMarkup from '@gerhobbelt/markdown-it-criticmarkup';
import deflist from '@gerhobbelt/markdown-it-deflist';
import emoji from '@gerhobbelt/markdown-it-emoji';
import fontawesome from '@gerhobbelt/markdown-it-fontawesome';
import footnote from '@gerhobbelt/markdown-it-footnote';
import forInline from '@gerhobbelt/markdown-it-for-inline';
import frontMatter from '@gerhobbelt/markdown-it-front-matter';
import furigana from '@gerhobbelt/markdown-it-furigana';
import githubHeadings from '@gerhobbelt/markdown-it-github-headings';
import hashtag from '@gerhobbelt/markdown-it-hashtag';
import headerSections from '@gerhobbelt/markdown-it-header-sections';
import headinganchor from '@gerhobbelt/markdown-it-headinganchor';
import implicitFigures from '@gerhobbelt/markdown-it-implicit-figures';
import include from '@gerhobbelt/markdown-it-include';
import ins from '@gerhobbelt/markdown-it-ins';
import kbd from '@gerhobbelt/markdown-it-kbd';
import mark from '@gerhobbelt/markdown-it-mark';
import mathjax from '@gerhobbelt/markdown-it-mathjax';
import modifyToken from '@gerhobbelt/markdown-it-modify-token';
import namedHeadings from '@gerhobbelt/markdown-it-named-headings';
import prism from '@gerhobbelt/markdown-it-prism';
import regexp from '@gerhobbelt/markdown-it-regexp';
import responsive from '@gerhobbelt/markdown-it-responsive';
import samp from '@gerhobbelt/markdown-it-samp';
import sanitizer from '@gerhobbelt/markdown-it-sanitizer';
import shortcodeTag from '@gerhobbelt/markdown-it-shortcode-tag';
import smartarrows from '@gerhobbelt/markdown-it-smartarrows';
import strikethroughAlt from '@gerhobbelt/markdown-it-strikethrough-alt';
import sub from '@gerhobbelt/markdown-it-sub';
import sup from '@gerhobbelt/markdown-it-sup';
import tableOfContents from '@gerhobbelt/markdown-it-table-of-contents';
import title from '@gerhobbelt/markdown-it-title';
import toc from '@gerhobbelt/markdown-it-toc';
import tocAndAnchor from '@gerhobbelt/markdown-it-toc-and-anchor';
import tocDoneRight from '@gerhobbelt/markdown-it-toc-done-right';
import wikilinks from '@gerhobbelt/markdown-it-wikilinks';

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
    usePlugin(include, options.include, defaultOptions.include);
    usePlugin(frontMatter, options.frontMatter, defaultOptions.frontMatter);
    usePlugin(sanitizer, options.sanitizer, defaultOptions.sanitizer);
    usePlugin(checkbox, options.checkbox, defaultOptions.checkbox);
    usePlugin(furigana, options.furigana, defaultOptions.furigana);
    usePlugin(abbr, options.abbr, defaultOptions.abbr);
    usePlugin(attribution, options.attribution, defaultOptions.attribution);
    usePlugin(attrs, options.attrs, defaultOptions.attrs);
    usePlugin(emoji, options.emoji, defaultOptions.emoji);
    usePlugin(fontawesome, options.fontawesome, defaultOptions.fontawesome);
    usePlugin(forInline, options.forInline, defaultOptions.forInline);
    usePlugin(hashtag, options.hashtag, defaultOptions.hashtag);
    usePlugin(criticMarkup, options.criticMarkup, defaultOptions.criticMarkup);
    usePlugin(ins, options.ins, defaultOptions.ins);
    usePlugin(kbd, options.kbd, defaultOptions.kbd);
    usePlugin(mark, options.mark, defaultOptions.mark);
    usePlugin(samp, options.samp, defaultOptions.samp);
    usePlugin(shortcodeTag, options.shortcodeTag, defaultOptions.shortcodeTag);
    usePlugin(smartarrows, options.smartarrows, defaultOptions.smartarrows);
    usePlugin(strikethroughAlt, options.strikethroughAlt, defaultOptions.strikethroughAlt);
    usePlugin(sub, options.sub, defaultOptions.sub);
    usePlugin(sup, options.sup, defaultOptions.sup);
    usePlugin(deflist, options.deflist, defaultOptions.deflist);
    usePlugin(implicitFigures, options.implicitFigures, defaultOptions.implicitFigures);
    usePlugin(responsive, options.responsive, defaultOptions.responsive);
    usePlugin(mathjax, options.mathjax, defaultOptions.mathjax);
    usePlugin(prism, options.prism, defaultOptions.prism); //usePlugin(highlightjs, options.highlightjs, defaultOptions.highlightjs);

    usePlugin(container, options.container, defaultOptions.container);
    usePlugin(title, options.title, defaultOptions.title);
    usePlugin(footnote, options.footnote, defaultOptions.footnote);
    usePlugin(alerts, options.alerts, defaultOptions.alerts);
    usePlugin(headerSections, options.headerSections, defaultOptions.headerSections);
    usePlugin(namedHeadings, options.namedHeadings, defaultOptions.namedHeadings);
    usePlugin(tableOfContents, options.tableOfContents, defaultOptions.tableOfContents);
    usePlugin(toc, options.toc, defaultOptions.toc);
    usePlugin(tocAndAnchor, options.tocAndAnchor, defaultOptions.tocAndAnchor);
    usePlugin(tocDoneRight, options.tocDoneRight, defaultOptions.tocDoneRight);
    usePlugin(githubHeadings, options.githubHeadings, defaultOptions.githubHeadings);
    usePlugin(anchor, options.anchor, defaultOptions.anchor);
    usePlugin(headinganchor, options.headinganchor, defaultOptions.headinganchor); //usePlugin(highlighted, options.highlighted, defaultOptions.highlighted);

    usePlugin(wikilinks, options.wikilinks, defaultOptions.wikilinks);
    usePlugin(regexp, options.regexp, defaultOptions.regexp);
    usePlugin(modifyToken, options.modifyToken, defaultOptions.modifyToken);
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
  criticMarkup,
  deflist,
  emoji,
  fontawesome,
  footnote,
  forInline,
  frontMatter,
  furigana,
  githubHeadings,
  hashtag,
  headerSections,
  headinganchor,
  //highlighted,
  //highlightjs,
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
  shortcodeTag,
  smartarrows,
  strikethroughAlt,
  sub,
  sup,
  tableOfContents,
  title,
  toc,
  tocAndAnchor,
  tocDoneRight,
  wikilinks
};

export default pluginDef;
//# sourceMappingURL=markdownItDirtyDozen.modern.js.map
