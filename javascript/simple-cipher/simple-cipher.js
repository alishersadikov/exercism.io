var Cipher = function(key) {
  if ((key && (key === key.toUpperCase() || key.match(/\d+/g) != null) || key === '') ){
    throw 'Bad key'; 
  } else {
    this.key = key || 'aaaaaaaaaaaaaaaaaa'; 
  }
}; 

Cipher.prototype.encode = function(input) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz"; 
  var indices = []; 
  var output = [];
  
  this.key.split('').forEach(function(char){
    indices.push(alphabet.indexOf(char)); 
  })
  
  for (var i = 0; i < input.split('').length; i++) {
    var index = i; 
    if (i >= indices.length) {
      index = i % indices.length
    }
    
    var rotation = alphabet.indexOf(input[i]) + indices[index]
    if (rotation >= 26) {
      rotation = rotation - 26 
    }
      
    output.push(alphabet[rotation])
  }
  
  return output.join('');
}

Cipher.prototype.decode = function(input) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz"; 
  var indices = []; 
  var output = [];
  
  this.key.split('').forEach(function(char){
    indices.push(alphabet.indexOf(char)); 
  })
  
  for (var i = 0; i < input.split('').length; i++) {
    var rotation = alphabet.indexOf(input[i]) - indices[i]
    if (rotation < 0) {
      rotation = rotation + 26
    }
    output.push(alphabet[rotation])
  }
  
  return output.join('');
}

module.exports = Cipher; 


function createRandomString(length) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";
  
  for (var i = 0; i < length; i++)
  text += possible.charAt(Math.floor(Math.random() * possible.length));
  
  return text;
}










