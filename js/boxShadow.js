$(document).ready(function() {

// Set defualt CSS values //
setStart = function(){
		$("#boxShadow").css('box-shadow', '#ffffff 0px 0px 0px 0px');
		// $("#txtshd").css('font-size', '22pt');
		};
// set Pixel to 
sapp = function(){
	var	 shadowX = $('#boxShd1').val()+"px";
	var	 shadowY = $('#boxShd2').val()+"px";
	var	 shadowBlur = $('#boxShd3').val()+"px";
	var  shadowSpread = $('#boxShd5').val()+"px";
	var	 shadowColor = "#"+ $('#boxShd4').val();
	var outCode = $("#txtshd");
	$("#boxShadow").css({'box-shadow': shadowColor+" "+shadowX+" "+shadowY+" "+ shadowBlur+
		' '+ shadowSpread});
	// $("#txtshd").css('font-size', textSize);
	
	liveCodeOut = function(){
	$('#codeOut2').html(
		'<p>{' + 
		'<br> -moz-box-shadow: '+ shadowX +' '+ shadowY +' '+ shadowBlur +' '+ shadowSpread +' '+ shadowColor + ';<br>' + 
		'-webkit-box-shadow: '+ shadowX +' '+ shadowY +' '+ shadowBlur +' '+ shadowSpread +' '+ shadowColor + ';<br>' + 
		'box-shadow: '+ shadowX +' '+ shadowY +' '+ shadowBlur +' '+ shadowSpread +' '+ shadowColor + ';<br>' + 

		'}</p>');
	};
};

// -moz-box-shadow: 3px 3px 4px #444;
// 	-webkit-box-shadow: 3px 3px 4px #444;
// 	box-shadow:


$('body').change(shadowApply = function(){
	$( "#boxShd1" ).change(function() {
		shadowX = $('#boxShd1').val()+"px";
		console.log( "Handler for .change() called. " + shadowX );
		
	});
	$( "#boxShd2" ).change(function() {
		shadowY = $('#boxShd2').val()+"px";
		console.log( "Handler for .change() called. " + shadowY );
		
	});
	$( "#boxShd3" ).change(function() {
		shadowBlur = $('#boxShd3').val()+"px";	
		console.log( "Handler for .change() called. " + shadowBlur );
		
	});
	$( "#boxShd4" ).change(function() {
		shadowColor = "#"+ $('#boxShd4').val();	
		console.log( "Handler for .change() called. " + shadowColor );
		
	});
	$( "#boxShd5" ).change(function() {
		shadowSpread = $('#boxShd5').val()+"pt";	
		console.log( "Handler for .change() called. " + shadowSpread );
		
	});
	sapp();
	liveCodeOut();
});

setStart();
shadowApply();

});
