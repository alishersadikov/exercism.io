class Complement
  def self.of_dna(strand)
    characters = strand.chars
    require 'pry'; binding.pry
      characters.map do |nucleotide|
        if nucleotide == 'G'
          'C'
        elsif nucleotide == 'C'
          'G'
        elsif nucleotide == 'T'
          'A'
        elsif nucleotide == 'A'
          'U'
        end
      end.join
  end
end
