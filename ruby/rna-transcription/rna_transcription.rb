class Complement
  CONVERSION_HASH = {'G'=>'C', 'C'=>'G', 'T'=>'A', 'A'=>'U'}

  def self.of_dna(strand)
    complements = strand.chars.map do |nucleotide|
      convert(nucleotide)
    end
    check_for_invalid_input(complements.join)
  end

  def self.convert(nucleotide)
    complement = CONVERSION_HASH[nucleotide]
    return complement if complement
    return '?'
  end

  def self.check_for_invalid_input(complements)
    return '' if complements.include? '?'
    complements
  end
end

module BookKeeping
  VERSION = 4
end
