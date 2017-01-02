module BookKeeping
  VERSION = 3
end

class Hamming
  def self.compute(first, second)
    raise ArgumentError unless first.length == second.length
    self.loop_over_letters(first, second)
  end

  private
    def self.loop_over_letters(first, second)
      i = 0
      counter = 0
      while i != first.length do
        counter += 1 if first[i] != second[i]
        i += 1
      end
      return counter
    end
end
