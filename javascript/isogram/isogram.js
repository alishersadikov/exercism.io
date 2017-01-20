var Isogram = function(word) {
  this.word = word;
};

Isogram.prototype.isIsogram = function() {
  var characters = this.word
                  .replace(/é/g, 'e').replace(/-/g, '')
                  .toLowerCase().split('');

  var notIsogram = true;

  characters.forEach(function(element) {
    var char = characters.pop();

    characters.forEach(function(letter) {
      if (letter === char) {
        notIsogram = false;
      }
    });

  });
  return notIsogram;
};


module.exports = Isogram;
