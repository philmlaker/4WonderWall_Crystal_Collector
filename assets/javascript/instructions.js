$(document).ready(function() {

	$("#instructionButton").click(function(){
        $('#instructions').slideToggle(1500);
    }); 


(function blink() { 
  $('.blink_me').fadeOut(500).fadeIn(500, blink); 
})();



});