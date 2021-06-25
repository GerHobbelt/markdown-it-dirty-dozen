/* eslint-env mocha, es6 */

import path from 'path';
import fs from 'fs';
import glob from 'glob';
import assert from 'assert';
import generate from '@gerhobbelt/markdown-it-testgen';
import Md from '@gerhobbelt/markdown-it';
import pluginCollective from '../index.js';


import { fileURLToPath } from 'url';
// see https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_no_require_exports_module_exports_filename_dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


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

pluginCollective.use_dirty_dozen(md, {
  frontMatter: {
	  callback: function (fm, token, state) {
	    //console.error('FRONTMATTER: ', { fm, token, state });
	    state.env.frontMatter = fm;
	  }
  },

  tableOfContents: true,
  title: true,
  toc: true,
  tocAndAnchor: true,
  tocDoneRight: true,

  githubHeadings: true,
  anchor: true,
  headinganchor: true

});





xdescribe('markdown-it-dirty-dozen', function () {
  let scanDir = path.join(__dirname, 'fixtures/').replace(/\\/g, '/');

  let files = glob.sync(scanDir + '**/*.txt');

  for (let file of files) {
  	let title = file.replace(/^.*fixtures\//, '').replace(/\.txt$/, '').replace(/\//g, '_');
    console.log('desc:', title);
    generate(file, {
      desc: title
	  }, md);
  }
});




function cleanOutput(src) {
  return src.replace(/\r?\n/g, '\n').trim();
}


describe('checking cooperation between plugins', function () {
  let scanDir = path.join(__dirname, 'fixture-mixes/sources').replace(/\\/g, '/');

  let sollWertDir = fs.realpathSync(path.join(scanDir, '..', 'sollwerte'));
  let istWertDir = fs.realpathSync(path.join(sollWertDir, '..', 'istwerte'));
  if (!fs.existsSync(istWertDir)) {
  	fs.mkdirSync(istWertDir);
  }
  if (!fs.existsSync(sollWertDir)) {
  	fs.mkdirSync(sollWertDir);
  }

  let files = glob.sync(scanDir + '**/*.md');

  const mkTest = (file, md) => {
  	let title = file.replace(/^.*\/([^\/]+?)\.md$/, '$1');
  	let relSourcePath = file.slice(scanDir.length);
  	if (relSourcePath.startsWith('/')) { relSourcePath = relSourcePath.slice(1); }
    console.log('desc:', { title, relSourcePath, sollWertDir, istWertDir });

    it(title, () => {
    	let src = fs.readFileSync(file, 'utf8');
    	let env = {};
    	const out = md.render(src, env);
    	console.log({ outlen: out.length, out_path: path.join(istWertDir, relSourcePath), env });
    	let title = env.title || '???';



      const content = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${ title }
    <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Poppins:400,400i,500,700,700i&amp;subset=latin-ext" rel="stylesheet">
    <link rel="stylesheet" href="../assets/mini-default.css">
    <link rel="stylesheet" href="../assets/site-specific.css">
    <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
.container {
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 65rem;
}    
    </style>
    ${ '' }
  </head>
  <body>
  	<pre>
    Title: ${ title }
  	</pre>
  	<pre>
    ${ env.frontMatter || '' }
    </pre>

    <article class="container">
    ${ out }
    </article>

    <footer>
      © 2021 Ger Hobbelt ::
      <a href="https://github.com/GerHobbelt/markdown-it-dirty-dozen/blob/master/fixture-mixes/sources/${ relSourcePath }">Edit this page on GitHub</a>
    </footer>
  </body>
</html>
`.trimLeft();



    	fs.writeFileSync(path.join(istWertDir, relSourcePath + '.html'), content, 'utf8');

    	let refFilePath = path.join(sollWertDir, relSourcePath + '.html');
    	let refOut;
    	if (fs.existsSync(refFilePath)) {
    		refOut = fs.readFileSync(refFilePath, 'utf8');
      } else {
      	// auto-fill sollwerte:
    		fs.writeFileSync(refFilePath, content, 'utf8');
    		refOut = content;
      }


      // also check the context, e.g. frontMatter and footnotes...
      delete env.state_block.env;
      delete env.state_block.src;
      delete env.state_block.md;
      const out2 = JSON.stringify(env, null, 2);
    	fs.writeFileSync(path.join(istWertDir, relSourcePath + '.json'), out2, 'utf8');

    	refFilePath = path.join(sollWertDir, relSourcePath + '.json');
    	let refOut2;
    	if (fs.existsSync(refFilePath)) {
    		refOut2 = fs.readFileSync(refFilePath, 'utf8');
      } else {
      	// auto-fill sollwerte:
    		fs.writeFileSync(refFilePath, out2, 'utf8');
    		refOut2 = out2;
      }

     	assert.strictEqual(cleanOutput(content), cleanOutput(refOut));
     	assert.strictEqual(cleanOutput(out2), cleanOutput(refOut2));
    });
  };

  console.error('################ setting up cooperation tests', files);
  for (let file of files) {
  	mkTest(file, md);
  }
});
