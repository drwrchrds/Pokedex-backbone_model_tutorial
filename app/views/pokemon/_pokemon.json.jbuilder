json.extract!(pokemon, :id, :name, :number, :poke_type, :attack, 
			:defense, :evolve_level, :evolve_to, :curve, :probability) 

json.moves pokemon.moves ? JSON.parse(pokemon.moves) : nil
json.levels pokemon.levels ? JSON.parse(pokemon.levels) : nil
