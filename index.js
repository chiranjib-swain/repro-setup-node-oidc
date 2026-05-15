const { version } = require('./package.json');

function greet(name) {
  return `Hello, ${name}! Running version ${version} new version space 0.0.2-beta.1.`;
}

module.exports = { version, greet };