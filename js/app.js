var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function() {
	this.route('writing'),
	this.route('product'),
	this.route('code'),
	this.route('contact')
});

App.ApplicationController = Ember.Controller.extend({
	currentPathChanged: function() {
		window.scrollTo(0,0);
	}.observes('currentPath')
});

$(document).ready(function() {
	$('body').has( '.contact' ).css( 'background', '#93D3E1' );
});