
/* eslint-env mocha, es6 */

const path = require('path');
const generate = require('@gerhobbelt/markdown-it-testgen');
const Md = require('@gerhobbelt/markdown-it');
const pluginCollective = require('../');

describe('markdown-it-dirty-dozen', function () {
  const md = Md({
   	    html:         true,        // Enable HTML tags in source
	    //breaks:       false,        // Convert '\n' in paragraphs into <br>
	    linkify:      true,        // autoconvert URL-like texts to links

	    // highSecurity:
	    // - false:           lower protection against XSS/Unicode-Homologue/etc. attacks via the input MarkDown.
	    //                    This setting assumes you own or at least trust the Markdown
	    //                    being fed to MarkDonw-It. The result is a nicer render.
	    // - true (default):  maximum protection against XSS/Unicode-Homologue/etc. attacks via the input MarkDown.
	    //                    This is the default setting and assumes you have no control or absolute trust in the Markdown
	    //                    being fed to MarkDonw-It. Use this setting when using markdown-it as part of a forum or other
	    //                    website where more-or-less arbitrary users can enter and feed any MarkDown to markdown-it.
	    //
	    // See https://en.wikipedia.org/wiki/Internationalized_domain_name for details on homograph attacks, for example.
	    highSecurity: false,

	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  true,

	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Could be either a String or an Array.
	    //
	    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
	    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
	    quotes: '\u201c\u201d\u2018\u2019' /* “”‘’ */
	  });

  pluginCollective.use_dirty_dozen(md, true);

  generate(path.join(__dirname, 'fixtures/examples.txt'), md);
});
