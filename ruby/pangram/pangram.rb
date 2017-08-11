class Pangram
  def self.pangram?(input)
    counter = 0
    input.downcase.chars.uniq.each { |char|  counter += 1 if ('a'..'z').include?(char) } 
    counter == 26
  end
end 

module BookKeeping
  VERSION = 4
end 