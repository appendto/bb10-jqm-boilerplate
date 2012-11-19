// The main home view.
// Will render out to...
// 
//     <div data-role="page">
//         <div data-role="content" class="home">
//             Hello World
//         </div>
//     </div>
//
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