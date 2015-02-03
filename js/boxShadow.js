$(document).ready(function() {

// Set defualt CSS values //
setStart = function(){
		$("#boxShadow").css('box-shadow', '#FFFFFF 0px 0px 0px 0px');
		// $("#txtshd").css('font-size', '22pt');
		};
// set Pixel to 
sapp = function(){
	var	 shadowX = $('#boxShd1').val()+"px";
	var	 shadowY = $('#boxShd2').val()+"px";
	var	 shadowBlur = $('#boxShd3').val()+"px";
	var  shadowSpread = $('#boxShd5').val()+"px";
	var	 shadowColor = "#"+ $('#boxShd4').val();
	var	 shadowInset = $('#insetBox').prop('checked');
	var  outCode = $("#txtshd");
		if (shadowInset === false) {
				$("#boxShadow").css({'box-shadow': shadowColor+" "+shadowX+" "+shadowY+" "+ shadowBlur+
		' '+ shadowSpread});}
		if ( shadowInset === true) {
			$("#boxShadow").css({'box-shadow': 'inset' +shadowColor+" "+shadowX+" "+shadowY+" "+ shadowBlur+
		' '+ shadowSpread});
			}

	liveCodeOut = function(){

		if (shadowInset === false) {
				$('#codeOut2').html(
					'<p>{' + 
					'<br> -moz-box-shadow: '+ shadowX +' '+ shadowY +' '+ shadowBlur +' '+ shadowSpread +' '+ shadowColor + ';<br>' + 
					'-webkit-box-shadow: '+ shadowX +' '+ shadowY +' '+ shadowBlur +' '+ shadowSpread +' '+ shadowColor + ';<br>' + 
					'box-shadow: '+ shadowX +' '+ shadowY +' '+ shadowBlur +' '+ shadowSpread +' '+ shadowColor + ';<br>' + 

					'}</p>');
						}
		if ( shadowInset === true) {
				$('#codeOut2').html(
					'<p>{' + 
					'<br> -moz-box-shadow: inset '+ shadowX +' '+ shadowY +' '+ shadowBlur +' '+ shadowSpread +' '+ shadowColor + ';<br>' + 
					'-webkit-box-shadow: inset '+ shadowX +' '+ shadowY +' '+ shadowBlur +' '+ shadowSpread +' '+ shadowColor + ';<br>' + 
					'box-shadow: inset '+ shadowX +' '+ shadowY +' '+ shadowBlur +' '+ shadowSpread +' '+ shadowColor + ';<br>' + 

					'}</p>');
			}
	};
};

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
	$( "#insetBox" ).change(function() {
		shadowInset = $('#insetBox').prop('checked');	
		console.log( "Handler for .change() called. " + shadowInset );	
	});
	sapp();
	liveCodeOut();
});

setStart();
shadowApply();

});
