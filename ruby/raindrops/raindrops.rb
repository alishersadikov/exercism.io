class Raindrops 
  def self.convert(input)
    raindrops = ''
    sounds = ['Pling', 'Plang', 'Plong']
    [3, 5, 7].each_with_index {|num, index|  raindrops << sounds[index] if input % num == 0}
    return raindrops unless raindrops == ''
    input.to_s 
  end 
end 