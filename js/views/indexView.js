var IndexView = Backbone.View.extend({
	className: 'container',

	render: function() {
		// grabs the template from index.html
		var template = $('.IndexTemplate').html();
		var html = Mustache.render(template, {});
		// We make Mustache our middleman to render our templates
		this.$el.html(html);
		// Says: this element is html

		// loop through API (JSON) to find the name. We'll define what "collection" is in router.js later.
		this.collection.each(function(user){
			// Creates "view" from TruckItemView. Don't worry, we'll define TruckItemView later.
			var view = new UserView ({model: user});
			// It appends "view" to <div class="list"> inside <script class "index-template">
			this.$el.find('.list').append(view.render().el)
		// parse through this (i.e. data):
		}, this);
	}
})


var IndexView = Backbone.View.extend({
	// creates a div with class 'container'
	className: 'container',

	render: function() {
		// grabs the template from index.html
		var template = $('#index-template').html();
		var html = Mustache.render(template, {});


		return this;
	}

})