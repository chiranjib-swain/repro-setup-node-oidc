const { version } = require('./package.json');

function greet(name) {
  return `Hello, ${name}! Running version ${version} new version space 0.0.38`;
}

module.exports = { version, greet };