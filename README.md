# markdown-it-dirty-dozen

[![Build Status](https://img.shields.io/travis/GerHobbelt/markdown-it-dirty-dozen/master.svg?style=flat)](https://travis-ci.org/GerHobbelt/markdown-it-dirty-dozen)
[![NPM version](https://img.shields.io/npm/v/@gerhobbelt/markdown-it-dirty-dozen.svg?style=flat)](https://www.npmjs.org/package/@gerhobbelt/markdown-it-dirty-dozen)
[![Coverage Status](https://img.shields.io/coveralls/GerHobbelt/markdown-it-dirty-dozen/master.svg?style=flat)](https://coveralls.io/r/GerHobbelt/markdown-it-dirty-dozen?branch=master)

A bunch of markdown-it plugins which are verified to cooperate.


## Install

node.js, browser:

```bash
npm install @gerhobbelt/markdown-it-dirty-dozen --save
bower install @gerhobbelt/markdown-it-dirty-dozen --save
```

## Use

```js
var md = require('@gerhobbelt/markdown-it')()
            .use(require('@gerhobbelt/markdown-it-dirty-dozen'));

md.render(/*...*/); // See examples above
```



## License

The dirty-dozen aggregation code is:

[MIT](https://github.com/GerHobbelt/markdown-it-dirty-dozen/LICENSE)

The used markdown-it plugins each have their own license:

[TBD]

