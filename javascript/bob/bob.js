//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};


Bob.prototype.hey = function(input) {
  var silent = input.trim() === '',
      shouting = input.toUpperCase() === input && !silent,
      allNumbers = input.search(/(\d+,?\s?)+[\.!\?]*/) != -1;

  if (shouting && !allNumbers) {
      return 'Whoa, chill out!';
  } else if (input.endsWith("?")) {
      return 'Sure.';
  } else if (allNumbers) {
      if (input.endsWith("!")) {
          return 'Whoa, chill out!';
      } else {
          return "Whatever.";
      }
  } else if (silent) {
      return "Fine. Be that way!";
  }
  else {
    return "Whatever."
  }
};

module.exports = Bob;

// var response = "Whatever.",     // default response
//     lastChar = input.charAt(input.length - 1),
//     isSilence = input.trim() === '',
//     isShouting = input.toUpperCase() === input && !isSilence,
//     isAllNumbers = input.search(/(\d+,?\s?)+[\.!\?]*/) != -1,
//     isQuestion = lastChar === '?',
//     isExcl = lastChar === '!';
//
// if (isShouting && !isAllNumbers) {
//     response = 'Whoa, chill out!';
// } else if (isQuestion) {
//     response = 'Sure.';
// } else if (isAllNumbers) {
//     if (isExcl) {
//         response = 'Whoa, chill out!';
//     } else {
//         response = "Whatever.";
//     }
// } else if (isSilence) {
//     response = "Fine. Be that way!";
// }
//
// return response;
// };
