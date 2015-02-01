$(document).ready(function() {

// Set defualt CSS values //
setStart = function(){
		$("#txtshd").css('text-shadow', '#ffffff 0px 0px 0px');
		$("#txtshd").css('font-size', '12pt');
		};

sapp = function(){
	var	 shadowX = $('#pixel1').val()+"px";
	var	 shadowY = $('#pixel2').val()+"px";
	var	 shadowBlur = $('#pixel3').val()+"px";
	var	 shadowColor = "#"+ $('#pixel4').val();
	var  textSize = $('#pixel5').val()+"pt";
	$("#txtshd").css({'text-shadow': shadowColor+" "+shadowX+" "+shadowY+" "+ shadowBlur});
};

$('body').change(shadowApply = function(){
	$( "#pixel1" ).change(function() {
		shadowX = $('#pixel1').val()+"px";
		console.log( "Handler for .change() called. " + shadowX );
		sapp();
	});
	$( "#pixel2" ).change(function() {
		shadowY = $('#pixel2').val()+"px";
		console.log( "Handler for .change() called. " + shadowY );
		sapp();
	});
	$( "#pixel3" ).change(function() {
		shadowBlur = $('#pixel3').val()+"px";	
		console.log( "Handler for .change() called. " + shadowBlur );
		sapp();
	});
	$( "#pixel4" ).change(function() {
		shadowColor = "#"+ $('#pixel4').val();	
		console.log( "Handler for .change() called. " + shadowColor );
		sapp();
	});
	$( "#pixel5" ).change(function() {
		shadowColor = $('#pixel5').val()+"pt";	
		console.log( "Handler for .change() called. " + textSize );
		sapp();
	});




});


setStart();
shadowApply();

});
