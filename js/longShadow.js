$(document).ready(function() {

leftRight = $('#longShd1').val();
topDown = $('#longShd2').val();
shadowLength = $('#longShd3').val();
shadowColor = $('#longShd4').val();
var shadowstring = [];
lfRt = parseInt($('#longShd1').val());
upDwn = parseInt($('#longShd2').val());

// hex to RGB converter //

hexToRgb = function(hex, op) {
	    // Expand shorthand form (e.g. '03F') to full form (e.g. '0033FF')
	    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
	    	return r + r + g + g + b + b;
	    });
	    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		var r = parseInt(result[1], 16);
		var g = parseInt(result[2], 16);
		var b = parseInt(result[3], 16);
		var a = op;

	    return  ('rgba('+r+','+g+','+b+','+a+ ')');
		};

newColor = hexToRgb('#'+shadowColor);

// hex to RGB converter //

// Set defualt CSS values //
setStart = function(){
	$('#longShad').css('text-shadow: #000000 0px 0px');
};

liveCodeOut = function(){
	$('#codeOut4').html( '<p>{<br>text-shadow: '+ joinedString+ ';<br> }</p>');
	console.log(newColor);

		// console.log(shadowstring);
};

longShadowGenerator = function(){

	var loopTimes = $('#longShd3').val();
	var x = parseInt(loopTimes);
	newColor = hexToRgb('#'+shadowColor, 0.1); // Convert hex to RGBA Color //
	shadowstring = []; //clear shadowstring on prior to new loop
	for (var i = 0; i < (x*20); i++) {
			lfRt = parseFloat($('#longShd1').val());
			upDwn = parseFloat($('#longShd2').val());
			console.log(x);
		if (i!==(x*20)-1) {
			shadowstring.push( ' '+newColor +' '+(lfRt*(i/20)) +'px '+(upDwn*(i/20))+'px, ');
		}
		else{
			shadowstring.push( newColor +' '+(lfRt*(i/20)) +'px '+(upDwn*(i/20))+'px');
		}
	}//end for loop
	joinedString = shadowstring.join('');
	console.log('Begin String'+joinedString);
	$('#longShad').attr('style','text-shadow:'+joinedString);
};


$('body').change(shadowApply = function(){
	$( '#longShd1' ).change(function() {
		leftRight = $('#longShd1').val();
		console.log( 'Handler for .change() called. ' + leftRight+'px' );
		
	});
	$( '#longShd2' ).change(function() {
		topDown = $('#longShd2').val();
		console.log( 'Handler for .change() called. ' + topDown+'px' );
		
	});
	$( '#longShd3' ).change(function() {
		shadowLength = $('#longShd3').val();	
		console.log( 'Handler for .change() called. ' + shadowLength+'px' );
		
	});
	$( '#longShd4' ).change(function() {
		shadowColor = $('#longShd4').val();	
		console.log( 'Handler for .change() called. ' + '#'+shadowColor );
		
	});
	$( '#insetBox' ).change(function() {
		var	 gradYesNo = $('#insetBox').prop('checked');	
		console.log( 'Handler for .change() called. ' + gradYesNo );
		console.log('hex to rgb '+	shadowColor);
		
	});
	// longShadow();
	newColor = hexToRgb('#'+shadowColor);
	longShadowGenerator();
	liveCodeOut();

});

setStart();
shadowApply();


});