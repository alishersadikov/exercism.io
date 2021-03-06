class Prime 
  def self.nth(nth_prime)
    raise ArgumentError if nth_prime == 0
    
    # this creates the desired array to loop over
    primes = (2..nth_prime * (Math.log(nth_prime) + 2)).to_a
    
    primes.each do |num| 
      primes.delete_if do |i| 
        i > num && i % num == 0
      end  
    end 
    
    # the last element needs to be returned
    primes[nth_prime - 1]
  end

end 

module BookKeeping
  VERSION = 1
end