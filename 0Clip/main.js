var clientTarget = new ZeroClipboard( $("#clipboard-text"), {
    moviePath: "0Clip/ZeroClipboard.swf",
    debug: false
} );

clientTarget.on( "load", function(clientTarget)
{
    $('#flash-loaded').fadeIn();

    clientTarget.on( "complete", function(clientTarget, args) {
        clientTarget.setText( args.text );
        $('#target-to-copy-text').fadeIn();
    } );
} );