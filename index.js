const { version } = require('./package.json');

function greet(name) {
  return `Hello, ${name}! Running version ${version} new version space34.`;
}

module.exports = { version, greet };