// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require pokedex
//= require_tree ../templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .

function listPokemon() {
	// create collection
	// fetch collection
	// print names asynch
	pokes = new Pokemons();
	pokes.fetch({
		success: function() {
			pokes.each(function(poke) {
				console.log(poke.get('name'));
				console.log(poke.get('attack'));
			});
		}
	});
}

function createPokemon(attrs, callback) {
	// instantiate object
	// set attributes
	// save and call callback
	poke = new Pokemon(attrs);
	poke.save();
}

// create Pokemon Backbone model
Pokemon = Backbone.Model.extend({
	urlRoot: '/pokemon'
});

// create Pokemon Backbone collection
Pokemons = Backbone.Collection.extend({
  model: Pokemon,
	url: '/pokemon',
	comparator: 'number'
});

$(function() {
  listPokemon();
});
