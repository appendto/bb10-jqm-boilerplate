App.Rendor = (function() {
    var views = App.Views,
        currentView;

    // Initialize `Rendor`.
    var init = function() {
        App.Vent.on( "render.view", render );
    };

    // Create a new instance of the view being rendered.
    var render = function( env ) {
        if ( !views[ env.data.name ] ) {
            return;
        }

        changePage( currentView = new views[ env.data.name ]( env.data ) );
    };

    // Change the page to a different Backbone view.
    var changePage = function ( view ) {
        var transition = $.mobile.defaultPageTransition;

        // The views will be the `page`.
        view.$el.attr( "data-role", "page" );

        $( "body" ).append( view.$el );
        
        // We don't want to slide the first page
        if ( view instanceof App.Views.Home ) {
            transition = "none";
            this.firstPage = false;
        }

        // Call jQuery Mobile's manual change page function.
        $.mobile.changePage( view.$el, {
            changeHash:false,
            transition: transition
        });
    };

    // Only expose the init method.
    return {
        init: init,
        getCurrentView: function() {
            return currentView;
        }
    };

}());