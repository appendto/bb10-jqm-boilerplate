//### App
(function( global ) {
    var App = global.App || {},
        _views = {};
    // Setup some namespaces for storing constructors.
    $.extend( App, {
        Collections: {},
        Models: {},
        Routers: {},
        Templates: {},
        // Setup an app event mediator.
        Vent: $.extend( {}, Backbone.Events ),
        Views: {}
    });

    // Initialize the app.
    App.init = function() {
        App.Rendor.init();
        this.homeRouter = new App.Routers.Home();
        Backbone.history.start();
    };

    // Export the app to the window.
    global.App = App;
}( window ));


$(function() {
    App.init();

    // Handle back button throughout the application
    $( document ).on( "click", ".back", function(event) {
        window.history.back();
        return false;
    });
});
