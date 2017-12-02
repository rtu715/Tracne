var Presenter = {

    /**
     * A not-implemented function to handle button
     * press events. Params are button press args.
     */
    HandleButtonOnPress : function() {
        console.log( "Not implemented on press yet" );
    }

    HandleOnTap : function() {
        console.log( "Not implemented on tap yet" );
    }
}

function test( ) {
    this.sd = 5;
}

var testPresenter = Object.create(new test(), Presenter);
testPresenter();
