window.Pokedex = function() {
}

Pokedex.Models = {};
Pokedex.Collections = {};

// create Pokemon Backbone model
Pokedex.Models.Pokemon = Backbone.Model.extend({
});

// create Pokemon Backbone collection
Pokedex.Collections.Pokemon = Backbone.Collection.extend({
});

Pokedex.prototype.listPokemon = function (pokes, callback) {
	// fetch collection
	// call callback after a successful response asynch
  // return pokes
}

Pokedex.prototype.renderListItem = function (pokemon) {
	// build LI
	// apped it to $pokeList
}

Pokedex.prototype.createPokemon = function (attrs, callback) {
	// instantiate object
	// set attributes
	// save and call callback
  // return created model
}

Pokedex.prototype.renderDetail = function (pokemon) {
}

Pokedex.prototype.showDetail = function (event) {
}

$(function() {
//	pokedex = new Pokedex;
//  pokedex.listPokemon();
});
