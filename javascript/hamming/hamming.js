function Hamming() {

  this.compute = function ( sequence1, sequence2 ) {
    var counter = 0;

    if(sequence1.length !== sequence2.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    for(var i = 0; i < sequence1.length; i++) {
        if(sequence1.charAt(i) !== sequence2.charAt(i)) {
            counter++;
        }
    }

    return counter;
  };
}

module.exports = Hamming;
