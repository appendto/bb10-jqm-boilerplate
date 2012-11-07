App.Views.Home = App.Views.BaseView.extend({
    initialize: function( options ) {
        // Build the page and set the content div's class to `home`.
        this.buildPage( "home" );
        this.render();
    },
    render: function() {
    	this.$( ".home" ).html( "Hello World" );
    }
});