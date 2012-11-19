// The application's main router.
App.Routers.Home = Backbone.Router.extend({
    routes: {
        "":"home"
    },
    home: function () {
        // Trigger events with an envelope pattern to have consistent signatures.
        App.Vent.trigger( "render.view", {
            data: {
                name: "Home"
            }
        });
    }
});