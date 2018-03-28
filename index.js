"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('leju-conventional-commit-types');

module.exports = engine({
  types: conventionalCommitTypes.types
});
