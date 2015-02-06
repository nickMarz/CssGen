$(document).ready(function() {



$('a#copy-description').zclip({
path:'js/ZeroClipboard.swf',
copy:$('p#codeOut').text()
});
// The link with ID "copy-description" will copy
// the text of the paragraph with ID "codeOut"


$('button#copy-dynamic').zclip({
path:'js/ZeroClipboard.swf',
copy:function(){return $('input#dynamic').val();}
});


  
});