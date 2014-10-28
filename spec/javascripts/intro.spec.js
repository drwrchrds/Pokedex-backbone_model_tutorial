describe("listPokemon", function() {
  it("fetches the passed-in collection", function() {
    this.pokedex = new Pokedex();
    this.pokes = new Pokedex.Collections.Pokemon();
    var heardRequestTrigger = false;
    this.pokes.on('request', function() {
      heardRequestTrigger = true;
    });

    this.pokedex.listPokemon(this.pokes, function() {});
    expect(heardRequestTrigger).toEqual(true);
  });

  describe("calling the callback function", function() {
    var called = false;

    beforeEach(function (done) {
      this.pokedex = new Pokedex();
      this.pokes = new Pokedex.Collections.Pokemon();

      this.pokedex.listPokemon(this.pokes, function() {
        called = true;
        done();
      });
    });

    it("calls the callback function", function() {
      expect(called).toEqual(true);
    });

    it("waits to call the callback until the collection has been filled", function() {
      var pokeList = [];
      var that = this;
      that.pokes.each(function(poke) {
        pokeList.push(poke.get('name'));
      });

      expect(pokeList.length).toEqual(5);
      expect(pokeList[0]).not.toEqual(undefined);
    });
  });
});

describe("createPokemon", function() {
  
  console.log('Im running a testttt');
});
