var Words = function() {};

Words.prototype.count = function(input) {
  var count = {};
  var splitWords = input.toLowerCase().replace(/[&\/\\:!@^$%.]/g, '').split(/[ ,]+/);

  splitWords.forEach(function(element) {
    debugger;
    count[element] = count[element] + 1 || 1;
  });
  return count;
};

module.exports = Words;
