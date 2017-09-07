var Cipher = function(key) {
  this.key = validateOrGenerateKey(key); 
}; 

Cipher.prototype.encode = function(input) {
  var direction = 'forward';
  return this.loopAndRotate(input, direction); 
}

Cipher.prototype.decode = function(input) {
  var direction = 'backward'; 
  return this.loopAndRotate(input, direction);
}

Cipher.prototype.indexes = function() {
  var idnexes = []; 
  
  this.key.split('').forEach(function(char){
    idnexes.push(alphabet().indexOf(char)); 
  })
  
  return idnexes; 
}

Cipher.prototype.loopAndRotate = function(input, direction) {
  var output = [];
  
  for (var i = 0; i < input.split('').length; i++) {
    i >= this.indexes().length ? index = i % this.indexes().length : index = i
    
    if (direction === 'forward') {
      output.push(alphabet()[this.rotateForward(input, i)]); 
    } else if (direction === 'backward') {
      output.push(alphabet()[this.rotateBackward(input, i)]); 
    }
  }

  return output.join('');
}

Cipher.prototype.rotateForward = function(input, i) {
  var rotation = alphabet().indexOf(input[i]) + this.indexes()[index]; 
  
  if (rotation >= 26) {
    rotation = rotation - 26; 
  }
  
  return rotation; 
}

Cipher.prototype.rotateBackward = function(input, i) {
  var rotation = alphabet().indexOf(input[i]) - this.indexes()[i]
  
  if (rotation < 0) {
    rotation = rotation + 26
  }
  
  return  rotation; 
}

module.exports = Cipher; 

function validateOrGenerateKey(key){
  if ((key && (key === key.toUpperCase() || key.match(/\d+/g) != null) || key === '') ){
    throw 'Bad key'; 
  } else {
    return key || createRandomString(100); 
  }
}

function createRandomString(length) {
  var text = "";
  
  for (var i = 0; i < length; i++){
    text += alphabet().charAt(Math.floor(Math.random() * alphabet().length));
  }
  
  return text;
}

function alphabet() {
  return "abcdefghijklmnopqrstuvwxyz"; 
}










