'use strict';

var path     = require('path');
var generate = require('@gerhobbelt/markdown-it-testgen');

/*eslint-env mocha*/

describe('markdown-it-dirty-dozen', function () {
  var md = require('@gerhobbelt/markdown-it')()
              .use(require('../'));

  generate(path.join(__dirname, 'fixtures/ins.txt'), md);
});
