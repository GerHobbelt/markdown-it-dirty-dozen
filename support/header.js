const camelCase = require('camelcase');

const year = new Date().getFullYear();
const pkg = require('../package.json');
const version = pkg.version;
const name = pkg.name.replace(/^.*?\//, '');
const globalName = ((name) => {
  name = name.replace(/^.*?\//, '');
  name = name
    .replace('markdown-it', 'markdownit')
    .replace(/-([a-z])/g, function (m, p1) {
      return p1.toUpperCase();
    });
  return name;
})(pkg.name);

const removeScope = (name) => name.replace(/^@.*\//, '');
// safeVariableName: taken from microbundle: this is the dist/<name>.*.js used in that utility
const safeVariableName = ((name) =>
  camelCase(
    removeScope(name)
      .toLowerCase()
      .replace(/((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g, '')
  ))(name);

const license = pkg.license;

const text = `/*! ${name} ${version} https://github.com//GerHobbelt/${name} @license ${license} */\n\n`;
const match = `/*! ${name} `; // skip the file where this match is true
module.exports = {
  text,
  match,
  version,
  globalName,
  packageName: name,
  safeVariableName,
  license,
  year
};
