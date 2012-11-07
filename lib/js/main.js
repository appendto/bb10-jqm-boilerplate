(function( global ) {
    var App = global.App || {},
        _views = {};

    $.extend( App, {
        Collections: {},
        Models: {},
        Routers: {},
        Templates: {},
        Vent: $.extend( {}, Backbone.Events ),
        Views: {}
    });

    App.init = function() {
        App.Rendor.init();
        this.homeRouter = new App.Routers.Home();
        Backbone.history.start();
    };

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
