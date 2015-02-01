$(document).ready(function() {

// Set defualt CSS values //
setStart = function(){
		$("#txtshd").css('text-shadow', '#ffffff 0px 0px 0px');
		$("#txtshd").css('font-size', '22pt');
		};
// set Pixel to 
sapp = function(){
	var	 shadowX = $('#pixel1').val()+"px";
	var	 shadowY = $('#pixel2').val()+"px";
	var	 shadowBlur = $('#pixel3').val()+"px";
	var	 shadowColor = "#"+ $('#pixel4').val();
	var  textSize = $('#pixel5').val()+"pt";
	var outCode = $("#txtshd");
	$("#txtshd").css({'text-shadow': shadowColor+" "+shadowX+" "+shadowY+" "+ shadowBlur});
	$("#txtshd").css('font-size', textSize);
	
	liveCodeOut = function(){
	$('#codeOut').html( '<p>{<br>font-size: '+ textSize +'<br> text-shadow: '+ shadowX +' '+ shadowY +' '+ shadowBlur +' '+ shadowColor + '<br> }</p>');
	};

};

$('body').change(shadowApply = function(){
	$( "#pixel1" ).change(function() {
		shadowX = $('#pixel1').val()+"px";
		console.log( "Handler for .change() called. " + shadowX );
		
	});
	$( "#pixel2" ).change(function() {
		shadowY = $('#pixel2').val()+"px";
		console.log( "Handler for .change() called. " + shadowY );
		
	});
	$( "#pixel3" ).change(function() {
		shadowBlur = $('#pixel3').val()+"px";	
		console.log( "Handler for .change() called. " + shadowBlur );
		
	});
	$( "#pixel4" ).change(function() {
		shadowColor = "#"+ $('#pixel4').val();	
		console.log( "Handler for .change() called. " + shadowColor );
		
	});
	$( "#pixel5" ).change(function() {
		textSize = $('#pixel5').val()+"pt";	
		console.log( "Handler for .change() called. " + textSize );
		
	});
	sapp();
	liveCodeOut();
});

setStart();
shadowApply();

});
