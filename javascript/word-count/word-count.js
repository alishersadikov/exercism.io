var Words = function() {};

Words.prototype.count = function(phrase) {
  var legalChars = this.cleanPhrase(phrase); 
  
  // joining the cleaned chars, downcasing and splitting at break points
  return this.countWords(legalChars.join('').toLowerCase().split(this.splitChars())); 
};

// having a list of illegal chars allows for easy updating 
Words.prototype.illegalChars = function() {
  return [".", ":", "!", "&", "@", "$", "%", "^", "¡", "¿", "?"];   
}

// having a list of split points is also useful
// splitting words at space, newline character and tab
Words.prototype.splitChars = function() {
  return /[ ,\n\t]+/
}

Words.prototype.cleanPhrase = function(phrase) {
  // trimming leading and trailing whitespace and splitting into single chars
  var chars = phrase.trim().split('')
  
  illegalChars = this.illegalChars(); 
  
  // checking against the illegal characters list and wiping if matched
  chars.forEach(function(char, index) {
    if (illegalChars.indexOf(char) >= 0) {
      chars[index] = ''; 
    }
  });
  
  return chars; 
}

Words.prototype.countWords = function(words) {
  var result = {};
  
  words.forEach(function(element) {
    // there should be a cleaner way to do this but opening and closing quotes 
    // are being deleted here, not deleting in the middle as in can't
    if (element[0] === "'" && element[element.length - 1] === "'") {
      word = element.substring(1, element.length-1);
    } else {
      word = element; 
    }
    
    //accounting for reseved words such as constructor 
    result[word] = result.hasOwnProperty(word) ? result[word] + 1 : 1;
  });
  
  return result;
}

module.exports = Words;
