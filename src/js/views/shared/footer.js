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