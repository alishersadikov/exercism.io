function DnaTranscriber() {
  var conversionObj = {'G':'C', 'C':'G', 'T':'A', 'A':'U'};

  this.toRna = function (strand) {
    var characters = strand.split('');
    var complements = [];
    for (var i=0; i<characters.length; i++) {
      complements.push(conversionObj[characters[i]]);
    };
    return complements.join(''); 
  };
};

module.exports = DnaTranscriber;
