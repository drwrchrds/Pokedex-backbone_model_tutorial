describe("listPokemon", function() {
  beforeEach(function () {
    this.pokedex = new Pokedex();
    this.pokes = new Pokedex.Collections.Pokemon();
  });

  it("fetches the passed-in collection", function() {
    var heardRequestTrigger = false;
    this.pokes.one('request', function() {
      heardRequestTrigger = true;
    });

    this.pokedex.listPokemon(this.pokes, function() {});
    expect(heardRequestTrigger).toEqual(true);
  });

  it("waits to call the callback until the collection has been filled", function() {
    var pokeList = [];
    this.pokedex.listPokemon(this.pokes, function() {
      this.pokes.each(function(poke) {
        pokeList.push(poke.get('name'));
      });
    });
    expect(pokeList.length).toEqual(5);
    expect(pokeList[0]).not.toEqual(undefined);
  });
});

describe("createPokemon", function() {
  
  console.log('Im running a testttt');
});
