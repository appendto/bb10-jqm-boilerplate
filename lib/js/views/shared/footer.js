// A default header view.
App.Views.Header = Backbone.View.extend({
    initialize: function() {
        // Setup jQuery Mobile defaults.
        this.$el.attr({
            "data-role": "header",
            "data-position": "fixed"
        });

        this.$el.html( "The header" );
    }
});
// Setup a footer view.
App.Views.Footer = Backbone.View.extend({
    initialize: function() {
        // Set this up as a jQuery Mobile footer.
        this.$el.attr({
            "data-role": "footer"
        });

        // Pre-compile the underscore.js template.
        this.template = _.template( $("#footer").html() );

        this.render();
    },
    render: function() {
        // Render the template.
        this.$el.html( this.template({}) );
    }

});