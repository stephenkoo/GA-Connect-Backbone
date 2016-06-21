var Router = Backbone.Router.extend({
	routes: {
		"": "showIndex",
		"users/:id" : "showUser"
	},

	showIndex: function(){
		var users = new Users();

		users.fetch().done(function(){
			var indexView = new IndexView( { collection: users } );
			$('main').html(indexView.render().el);
		});
	},
})
