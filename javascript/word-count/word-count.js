var Words = function() {};

Words.prototype.count = function(input) {
  var count = {};
  var splitWords = input.toLowerCase().replace(/[&\/\\:!@^$%.]/g, '').split(/[ ,]+/);

  splitWords.forEach(function(element) {
    count[element] = count[element] || 0;
    count[element] += 1;
  });
  return count;
};

module.exports = Words;
