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