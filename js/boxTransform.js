$(document).ready(function() {

// Set defualt CSS values //
setStart = function(){
	$("#boxTrans").css('transform','scale(1) rotate(0deg) translateX(0px) translateY(0px);');
		
	};
// set Pixel to 
transform = function(){
	var	 scale = $('#scale').val();
	var	 rotate = $('#rotate').val();
	var	 transX = $('#transX').val();
	var  transY = $('#transY').val();
	var  outCode = $("#txtshd");
	$("#boxTrans").css({'transform':'scale('+ scale +') '+ 'rotate('+rotate +"deg) translateX("+ transX +"px) translateY("+ transY+'px)'});

	liveCodeOut = function(){
		$('#codeOut6').html('<p>{' + 
			'<br> -moz-transform: '+'scale('+ scale +') '+ 'rotate('+rotate +"deg) translateX("+ transX +"px) translateY("+ transY+'px);<br>' + 
			'-webkit-transform: '+'scale('+ scale +') '+ 'rotate('+rotate +"deg) translateX("+ transX +"px) translateY("+ transY+'px);<br>' + 
			'transform: '+'scale('+ scale +') '+ 'rotate('+rotate +"deg) translateX("+ transX +"px) translateY("+ transY+'px);<br>' + 
			'}</p>');
	};
};													

$('body').change(tarnsformApply = function(){
	$( "#scale" ).change(function() {
		scale = $('#scale').val();
		console.log( "Handler for .change() called. " + scale );
		
	});
	$( "#rotate" ).change(function() {
		rotate = $('#rotate').val();
		console.log( "Handler for .change() called. " + rotate );
		
	});
	$( "#transX" ).change(function() {
		transX = $('#transX').val();	
		console.log( "Handler for .change() called. " + transX );
		
	});
	$( "#transY" ).change(function() {
		transY = $('#transY').val();	
		console.log( "Handler for .change() called. " + transY );
	});
	transform();
	liveCodeOut();
});

setStart();
tarnsformApply();

});
