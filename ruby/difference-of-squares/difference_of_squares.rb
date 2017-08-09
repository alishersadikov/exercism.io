class Squares
  attr_reader :value
  
  def initialize(value)
    @value = value
  end
  
  def square_of_sum
    return 1 if value == 1 
    
    numbers, number = [], value
    
    while number != 0
      numbers.unshift(number)
      number -= 1 
    end 
    
    sum(numbers) ** 2
  end
  
  def sum_of_squares
    return 1 if value == 1 
      
    numbers, number = [], value
    
    while number != 0
      numbers.unshift(number ** 2)
      number -= 1 
    end 
    
    sum(numbers)
  end
  
  
  def difference
    square_of_sum - sum_of_squares
  end
  
  private 
  
    def sum(numbers)
      numbers.inject(0){|sum,x| sum + x }
    end 
end 

module BookKeeping
  VERSION = 4
end