// A base view to extend other views from.
App.Views.BaseView = Backbone.View.extend({
    dispose: function() {
        this.undelegateEvents();
        this.remove();
    },
    // Build's the markup for a jQMobile page.
    buildPage: function( className, content, header, footer ) {
        // Header and footer can either be false, null, or pass a constructor name.
        if ( header === false ) {
            this.header = null;
        }
        else if ( typeof header === "undefined" ) {
            this.header = new App.Views.Header();
        }
        else {
            this.header = header;
        }

        if ( footer === false ) {
            this.footer = null;
        }
        else if ( typeof footer === "undefined" ) {
            this.footer = new App.Views.Footer();
        }
        else {
            this.footer = footer;
        }
        

        this.$el.empty();

        // Add the header.
        this.header && this.$el.append( this.header.$el );
        
        // Set's up a content div inside of the main div.
        //
        //    <div data-role="page">
        //        <div class="className" data-role="content">
        //            Hello World
        //        </div>
        //    </div>
        this.$el.append( $( "<div />", {
            html: content || "",
            "class": className || "",
            "data-role": "content"
        }));
        
        // Add the footer.
        this.footer && this.$el.append( this.footer.$el );
    },
    ready: function() {
        // This is neccessary when dynamically adding jQM Widgets.
        this.$el.closest( ".ui-page" ).trigger( "pagecreate" );
    }
});