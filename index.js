const { version } = require('./package.json');

function greet(name) {
  return `Hello, ${name}! Running version ${version}`;
}

module.exports = { version, greet };