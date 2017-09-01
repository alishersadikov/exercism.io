class Fixnum
  def dictionary
    {
     1000 => "M",
     900 => "CM",
     500 => "D",
     400 => "CD",
     100 => "C",
     90 => "XC",
     50 => "L",
     40 => "XL",
     10 => "X",
     9 => "IX",
     5 => "V",
     4 => "IV",
     1 => "I",
    }
  end 
  
  def to_roman
    number, roman = self, ""
    
    dictionary.each do |value, letter|
      roman << letter * (number / value)
      number = number % value
    end
    
    return roman
  end
end 

module BookKeeping
  VERSION = 2
end