$(document).ready(function() {
	$("input").change(function textShadwow(){
	var	 ShadowX = $('#pixel1').val();
	var	 ShadowY = $('#pixel2').val();
	var	 ShadowBlur = $('#pixel3').val();
	var	 ShadowColor = $('#pixel4').val();
		$( "#pixel1" ).change(function() {
			var ShadowX = $('#pixel1').val();
			console.log( "Handler for .change() called." + ShadowX+"px" );
		});
		$( "#pixel2" ).change(function() {
			var ShadowY = $('#pixel2').val();
			console.log( "Handler for .change() called." + ShadowY+"px" );
		});
		$( "#pixel3" ).change(function() {
			var ShadowBlur = $('#pixel3').val();	
			console.log( "Handler for .change() called." + ShadowBlur+"px" );
		});

		$( "#pixel4" ).change(function() {
			var ShadowColor = $('#pixel4').val();	
			console.log( "Handler for .change() called." + "#"+ShadowColor );


		});
$("#txtshd").css('textShadow', "#"+ShadowColor.value,ShadowX.value+"px ", ShadowY.value+"px ", ShadowBlur.value+"px");
	});





});
