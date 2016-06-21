var IndexView = Backbone.View.extend({
	className: 'container',

	render: function() {
		// grabs the template from index.html
		var template = $('.IndexTemplate').html();
		var html = Mustache.render(template, {});
	}
})
