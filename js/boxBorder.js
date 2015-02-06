$(document).ready(function() {
	var	 borderThickness = $('#boxBorder1').val()+"px";
	var	 borderType = $('#boxBorder2').val();
	var	 borderColor = "#"+$('#boxBorder3').val();
	// var  bottomRight = $('#boxBorder4').val()+"px";
	var  outCode = $("#txtshd");

// Set defualt CSS values //
setStart = function(){
	$("#boxBorder").css({'border': '1px solid #000000'});
	};
// set Pixel to 
radiusApply = function(){	
	$("#boxBorder").css({'border': borderThickness+" "+borderType+" "+borderColor});

	liveCodeOut = function(){
		$('#codeOut7').html('<p>{' + 
			'<br> -moz-border: '+ borderType +' '+ borderThickness + " "+borderColor+';<br>' + 
			'-webkit-border: '+ borderType +' '+ borderThickness + " "+borderColor+';<br>' + 
			'border: '+ borderType +' '+ borderThickness + " "+borderColor+';<br>' + 
			'}</p>');
	};
};

// watch for changes in input boxes, reapply current value to var //
$('body').change(rApply = function(){
	$( "#boxBorder1" ).change(function() {
		borderThickness = $('#boxBorder1').val()+"px";
		
	});
	$( "#boxBorder2" ).change(function() {
		borderType = $('#boxBorder2').val();
		
	});
	$( "#boxBorder3" ).change(function() {
		borderColor =  "#"+$('#boxBorder3').val();	
		
	});
	// $( "#boxBorder4" ).change(function() {
	// 	bottomRight = $('#boxBorder4').val()+"pt";	
	// });
	radiusApply();
	liveCodeOut();
});

setStart();
radiusApply();
liveCodeOut();	

});
