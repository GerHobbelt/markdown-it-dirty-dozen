/* eslint-env mocha, es6 */

import path from 'path';
import fs from 'fs';
import glob from 'glob';
import assert from 'assert';
import testgen from '@gerhobbelt/markdown-it-testgen';
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
  headinganchor: true,

  codeSnippet: {
    root: __dirname,
    throwOnError: true
  }
});



console.error('desc!!!!');



function N(n) {
  const rv = '00000' + n;
  return rv.slice(rv.length - 4);
}

// Most of the rest of this is inlined from generate(), but modified
// so we can pass in an `env` object
function generate(fixturePath, md, env, dump_json) {
  testgen.load(fixturePath, {}, function (data) {
    data.meta = data.meta || {};

    const desc = '' + (data.meta.desc || path.relative(fixturePath, data.file));
    console.error('desc:', { desc, fixturePath });

    (data.meta.skip ? describe.skip : describe)(desc, function () {
      data.fixtures.forEach(function (fixture, idx) {
        //if ((fixture.first.range[0] - 1) !== 3) return;

        it(fixture.header + ' [line #' + (fixture.first.range[0] - 1) + ']', function () {
          const test_env = Object.assign({}, env || {});
          const rv = md.render(fixture.first.text, test_env);

          // make this a decent html file, if possible.
          const html_rv = `<html>
          <head>
          ${ data.meta.css || '' }
          </head>
          <body>
          ${rv}
          `;

          const diagnostic_filename_base = fixturePath.replace('fixtures', 'results').replace('.txt', '-LINE' + N(fixture.first.range[0] - 1));

          if (!fs.existsSync(path.dirname(diagnostic_filename_base))) {
            fs.mkdirSync(path.dirname(diagnostic_filename_base));
          }

          fs.writeFileSync(diagnostic_filename_base + '.istwert.html', html_rv, 'utf8');
          delete test_env.state_block.env;
          if (dump_json) {
            fs.writeFileSync(diagnostic_filename_base + '.dump.json', JSON.stringify(test_env, null, 2), 'utf8');
          }
          const sollwert_filepath = diagnostic_filename_base + '.sollwert.html';
          if (!fs.existsSync(sollwert_filepath)) {
            fs.writeFileSync(sollwert_filepath, html_rv, 'utf8');
          }

          let istwert = html_rv.trim();
          let sollwert = fs.readFileSync(sollwert_filepath, 'utf8').trim();

          // add variant character after "↩", so we don't have to worry about
          // invisible characters in tests
          sollwert = sollwert.replace(/\u21a9(?!\ufe0e)?/g, '\u21a9\ufe0e');
          istwert = istwert.replace(/\u21a9(?!\ufe0e)?/g, '\u21a9\ufe0e');

          assert.strictEqual(
            istwert,
            sollwert
          );
        });
      });
    });
  });
}






describe('markdown-it-dirty-dozen', function () {
  const scanDir = path.join(__dirname, 'fixtures/').replace(/\\/g, '/');

  const files = glob.sync(scanDir + '**/*.txt');

  for (const file of files) {
    generate(file, md);
  }
});




function cleanOutput(src) {
  return src.replace(/\r?\n/g, '\n').trim();
}


function mkdirp(p) {
  const rv = p;
  const plist = [];
  while (!fs.existsSync(p)) {
    plist.unshift(p);
    p = path.dirname(p);
  }
  for (const d of plist) {
    fs.mkdirSync(d);
  }
  return rv;
}

describe('checking cooperation between plugins', function () {
  const scanDir = path.join(__dirname, 'fixture-mixes/sources').replace(/\\/g, '/');

  const sollWertDir = fs.realpathSync(mkdirp(path.normalize(path.join(scanDir, '..', '..', 'output', 'sollwerte'))));
  const istWertDir = fs.realpathSync(mkdirp(path.normalize(path.join(sollWertDir, '..', '..', 'output', 'istwerte'))));

  const files = glob.sync(scanDir + '**/*.md');

  const mkTest = (file, md) => {
    const title = file.replace(/^.*\/([^\/]+?)\.md$/, '$1');
    let relSourcePath = file.slice(scanDir.length);
    if (relSourcePath.startsWith('/')) { relSourcePath = relSourcePath.slice(1); }
    console.log('desc:', { title, relSourcePath, sollWertDir, istWertDir });

    it(title, () => {
      const src = fs.readFileSync(file, 'utf8');
      const env = {};
      const out = md.render(src, env);
      console.log({ outlen: out.length, out_path: path.join(istWertDir, relSourcePath), env });
      const title = env.title || '???';



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
.red {
    color: red;
}

/* can't have two ::before on the same node (which happens in our tests): the last one wins then. So we use before and after... */
.c1::before {
  content: " ♥ C1! ";
}
.c2::after {
  content: " ♥ C2! ";
}

p[with="attrs"] {
    border: blue solid 1px;
    padding: 0.1em;
}


ruby > rt {
    font-size: 75%;
}

/* override mini-default.css */
nav * {
    padding: calc(0.1 * var(--universal-padding)) calc(1.5 * var(--universal-padding));
}



/* critic markup test aide */

aside {
    display: inline-block;
    background-color: #defbea;
    padding: 0.1em;
    border: 1px solid #00823d;
    margin-left: -3.5em;
}



/* alert CSS ripped from the BBootstrap demo & documentation pages */

.alert+.alert, .navbar+.navbar, .progress+.progress {
    margin-top: 1rem;
}

.alert {
    position: relative;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
}

.alert::after, .alert::before {
    box-sizing: border-box;
}

.alert-primary {
    color: #084298;
    background-color: #cfe2ff;
    border-color: #b6d4fe;
}
.alert-dark {
    color: #141619;
    background-color: #d3d3d4;
    border-color: #bcbebf;
}
.alert-info {
    color: #055160;
    background-color: #cff4fc;
    border-color: #b6effb;
}
.alert-danger {
    color: #842029;
    background-color: #f8d7da;
    border-color: #f5c2c7;
}
.alert-success {
    color: #0f5132;
    background-color: #d1e7dd;
    border-color: #badbcc;
}
.alert-warning {
    color: #664d03;
    background-color: #fff3cd;
    border-color: #ffecb5;
}

.alert-primary .alert-link {
    color: #06357a;
}
.alert-link {
    font-weight: 700;
}
.alert-success .alert-link {
    color: #0c4128;
}
.alert-warning .alert-link {
    color: #523e02;
}
.alert-danger .alert-link {
    color: #6a1a21;
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
  for (const file of files) {
    mkTest(file, md);
  }
});
