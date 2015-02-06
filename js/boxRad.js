$(document).ready(function() {

// Set defualt CSS values //
setStart = function(){
	$("#boxRound").css('border-radius', '0px 0px 0px 0px');
		
	};
// set Pixel to 
radiusApply = function(){
	var	 topLeft = $('#corRound1').val()+"px";
	var	 topRight = $('#corRound2').val()+"px";
	var	 bottomLeft = $('#corRound3').val()+"px";
	var  bottomRight = $('#corRound4').val()+"px";
	var  outCode = $("#txtshd");
	$("#boxRound").css({'border-radius': topLeft+" "+topRight+" "+bottomLeft+" "+bottomRight});

	liveCodeOut = function(){
		$('#codeOut3').html('<p>{' + 
			'<br> -moz-border-radius: '+ topLeft +' '+ topRight +' '+ bottomLeft +' '+ bottomRight + ';<br>' + 
			'-webkit-border-radius: '+ topLeft +' '+ topRight +' '+ bottomLeft +' '+ bottomRight + ';<br>' + 
			'border-radius: '+ topLeft +' '+ topRight +' '+ bottomLeft +' '+ bottomRight + ';<br>' + 
			'}</p>');
	};
};




$('body').change(shadowApply = function(){
	$( "#corRound1" ).change(function() {
		topLeft = $('#corRound1').val()+"px";
		console.log( "Handler for .change() called. " + topLeft );
		
	});
	$( "#corRound2" ).change(function() {
		topRight = $('#corRound2').val()+"px";
		console.log( "Handler for .change() called. " + topRight );
		
	});
	$( "#corRound3" ).change(function() {
		bottomLeft = $('#corRound3').val()+"px";	
		console.log( "Handler for .change() called. " + bottomLeft );
		
	});
	$( "#corRound4" ).change(function() {
		bottomRight = $('#corRound4').val()+"pt";	
		console.log( "Handler for .change() called. " + bottomRight );
	});
	radiusApply();
	liveCodeOut();
});

setStart();
shadowApply();

});
