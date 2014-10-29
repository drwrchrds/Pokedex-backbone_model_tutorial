//= require pokedex.js

describe("Pokedex.Models.Pokemon", function() {
  it("has a urlRoot property", function() {
    var poke = new Pokedex.Models.Pokemon();
    expect(poke.urlRoot).toEqual('/pokemon');

    poke.set('id', 1);
    expect(poke.url()).toEqual('/pokemon/1');
  });
});

describe("Pokedex.Collections.Pokemon", function() {
  beforeEach(function() {
    this.pokeCollection = new Pokedex.Collections.Pokemon();
  });

  it("knows its model", function() {
    expect(this.pokeCollection.model).toEqual(Pokedex.Models.Pokemon);
  });

  it("knows its url", function() {
    expect(this.pokeCollection.url).toEqual('/pokemon');
  });
});

describe("listPokemon", function() {
  var pokes = [
    { 
      name: "Charmander",
      number: 4,
      poke_type: "fire",
      attack: 52,
      defense: 43,
      evolve_level: 16,
      evolve_to: 5,
      moves: ['scratch', 'ember', 'metal claw'],
      levels: [5, 10],
      curve: 1.3,
      probability: 3
    }, {
      name: "Snorlax",
      number: 143,
      poke_type: 'normal'
    }, {
      name: 'Butterfree',
      number: 12,
      poke_type: 'bug'
    }, {
      name: 'Electabuzz',
      number: 125,
      poke_type: 'electric'
    }, {
      name: "Articuno",
      number: 144,
      poke_type: 'ice'
    }
  ];

  beforeEach(function(done) {
    var createdCount = 0;

    pokes.forEach(function(poke) {
      var model = new Pokedex.Models.Pokemon(poke)
      model.save({}, {
        success: function() {
          createdCount += 1;
          if(createdCount == 5) {
            done();
          }          
        }
      });
    });
  });

  it("fetches the passed-in collection", function() {
    var pokedex = new Pokedex();
    var pokes = new Pokedex.Collections.Pokemon();

    var heardRequestTrigger = false;
    pokes.on('request', function() {
      heardRequestTrigger = true;
    });

    pokedex.listPokemon(pokes, function() {});
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

    it("waits to call the callback until the collection has been filled", 
          function() {
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
