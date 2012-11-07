// The application's main router.
App.Routers.Home = Backbone.Router.extend({
    routes: {
        "":"home"
    },
    home: function () {
        App.Vent.trigger( "render.view", {
            data: {
                name: "Home"
            }
        });
    }
});