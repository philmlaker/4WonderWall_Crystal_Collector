
$(document).ready(function() {

	var totalWin = 0;
	var totalLoss = 0;
	var randomNumber;
	var redcrystal;
	var totalScore;


	function initialize () {
		totalScore = 0;
	randomNumber = Math.floor((Math.random() * 100) + 20);
	document.getElementById("number").innerHTML = randomNumber;	 
		$( "#redcrystal").val(Math.floor((Math.random() * 10) + 2));
		$( "#tealcrystal").val(Math.floor((Math.random() * 10) + 2));
		$( "#yellowcrystal").val(Math.floor((Math.random() * 10) + 2));	
		$( "#orangecrystal").val(Math.floor((Math.random() * 10) + 2));
			};
	
	initialize();

	$(".buttonJPG").click(function(){
		$("#arrow").fadeOut( "slow", function() {
    // Animation complete.
  });
		console.log($(this).attr("value"));
		console.log($(this).attr("id"));
		var a = parseInt($(this).val());
		totalScore = a + totalScore;
		console.log(totalScore);
		document.getElementById("totalScore").innerHTML = totalScore;
		compare();
    	}); 
	

	function compare (){
		if ( totalScore == randomNumber) {alert("You Win!"); 
			totalWin++;
			document.getElementById("totalWin").innerHTML = totalWin;
			initialize();
			document.getElementById("totalScore").innerHTML = 0;
			}
		
		else if (totalScore > randomNumber){alert('You Lose!');
			totalLoss++;
			document.getElementById("totalLoss").innerHTML = totalLoss;
			initialize();
			document.getElementById("totalScore").innerHTML = 0;
			}

	 };






	});
			

			




