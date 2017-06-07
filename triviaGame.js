var correctGuesses = 0;
var incorrectGuesses = 0;
var totalGuessesRight = 0;

// var countDown = 30000;
//     var countDown = setInterval(function(){
//     // countDown =-30;
//     document.getElementById("countDown").value=30 - --countDown
//     if(countDown <= 0)
//         document.body.innerHTML = "Times up. Today, this was a test."<br>"Take care of everybody you love, today, and everyone who is loved by somebody else.";
//     },30000);

  var seconds;
  var temp;
  var countDown = 30000;
 
  function countdown() {
    seconds = document.getElementById('countDown');
    seconds = parseInt(seconds, 10);
 
    if (seconds == 1) {
      temp = document.getElementById('countDown');
      temp.innerHTML = "all done, bye bye";
      return;
    }
 
    seconds--;
    temp = document.getElementById('countDown');
    temp = seconds;
    timeoutMyOswego = setTimeout(countDown, 1000);
  } 
 
  countdown();


// function checkGuess() {
// 	var guessSelection;
// 	var answerFeedback = document.getElementById(this).text
// 		if (guessSelection === true) {
// 			alert ("good job")
// 		} else {
// 			alert ("Try again!")
// 		}
// }


function Q1true() {
	var Q1answerFeedback = document.getElementById('Q1answerFeedback');
    $(Q1answerFeedback).show();
	// document.getElementById("Q1answerFeedback").innerHTML = "Great job! A sign of stroke is a sudden severe headache with no obvious cause.";
	document.getElementById('Q1').src='https://images-na.ssl-images-amazon.com/images/I/51bXSfIn3yL._AC_UL300_SR300,300_.jpg';
	console.log('Correct Guesses', correctGuesses);
    correctGuesses++;
    $("#correctGuesses").text(correctGuesses);
    totalGuessesRight++;
    $("#totalGuessesRight").text(totalGuessesRight);
    console.log('CORRECT GUESS AFTER INCREMENT ', correctGuesses);
}

function Q1false() {
	// document.getElementById('Q1answerFeedback').innerHTML = "Try again!";
	document.getElementById('Q1').src='http://bulanetwork.com/wp-content/uploads/2017/05/What-if-youre-wrong--300x300.jpg';
    console.log('incorrect guess', incorrectGuesses);
    incorrectGuesses++;
    $("#incorrectGuesses").text(incorrectGuesses);
    console.log('incorrect guess after INCREMENT', incorrectGuesses);
}   

function Q2true() {
	var Q2answerFeedback = document.getElementById('Q2answerFeedback');
    $(Q2answerFeedback).show();
	// document.getElementById("Q2answerFeedback").innerHTML = "Sudden onset disturbances in vision could indicate a stroke! Nice work!";
	document.getElementById('Q2').src='https://images-na.ssl-images-amazon.com/images/I/51bXSfIn3yL._AC_UL300_SR300,300_.jpg';
	console.log('Correct Guesses', correctGuesses);
    correctGuesses++;
    $("#correctGuesses").text(correctGuesses);
    totalGuessesRight++;
    $("#totalGuessesRight").text(totalGuessesRight);
    console.log('CORRECT GUESS AFTER INCREMENT ', correctGuesses);
}

function Q2false() {
	// document.getElementById('Q2answerFeedback').innerHTML = "Try again!";
	document.getElementById('Q2').src='http://bulanetwork.com/wp-content/uploads/2017/05/What-if-youre-wrong--300x300.jpg';
    console.log('incorrect guess', incorrectGuesses);
    incorrectGuesses++;
    $("#incorrectGuesses").text(incorrectGuesses);
    console.log('incorrect guess after INCREMENT', incorrectGuesses);
}   

function Q3true() {
	var Q3answerFeedback = document.getElementById('Q3answerFeedback');
    $(Q3answerFeedback).show();
	// document.getElementById("Q3answerFeedback").innerHTML = "If someone becomes weak or numb in one of their arms or legs, check for strength in the affected limb. This is a sign of stroke!";
	document.getElementById('Q3').src='https://images-na.ssl-images-amazon.com/images/I/51bXSfIn3yL._AC_UL300_SR300,300_.jpg';
	console.log('Correct Guesses', correctGuesses);
    correctGuesses++;
    $("#correctGuesses").text(correctGuesses);
    totalGuessesRight++;
    $("#totalGuessesRight").text(totalGuessesRight);
    console.log('CORRECT GUESS AFTER INCREMENT ', correctGuesses);
}

function Q3false() {
	// document.getElementById('Q3answerFeedback').innerHTML = "Try again!";
	document.getElementById('Q3').src='http://bulanetwork.com/wp-content/uploads/2017/05/What-if-youre-wrong--300x300.jpg';
    console.log('incorrect guess', incorrectGuesses);
    incorrectGuesses++;
    $("#incorrectGuesses").text(incorrectGuesses);
    console.log('incorrect guess after INCREMENT', incorrectGuesses);
}   

function Q4true() {
	var Q4answerFeedback = document.getElementById('Q4answerFeedback');
    $(Q4answerFeedback).show();
	// document.getElementById("Q4answerFeedback").innerHTML = "Great job! Sudden facial droop can indicate a stroke! Ask the person to smile, if they can't, call for help!";
	document.getElementById('Q4').src='https://images-na.ssl-images-amazon.com/images/I/51bXSfIn3yL._AC_UL300_SR300,300_.jpg';
	console.log('Correct Guesses', correctGuesses);
    correctGuesses++;
    $("#correctGuesses").text(correctGuesses);
    totalGuessesRight++;
    $("#totalGuessesRight").text(totalGuessesRight);
    console.log('CORRECT GUESS AFTER INCREMENT ', correctGuesses);
}

function Q4false() {
	// document.getElementById('Q4answerFeedback').innerHTML = "Try again!";
	document.getElementById('Q4').src='http://bulanetwork.com/wp-content/uploads/2017/05/What-if-youre-wrong--300x300.jpg';
    console.log('incorrect guess', incorrectGuesses);
    incorrectGuesses++;
    $("#incorrectGuesses").text(incorrectGuesses);
    console.log('incorrect guess after INCREMENT', incorrectGuesses);
}   

function Q5true() {
	var Q5answerFeedback = document.getElementById('Q5answerFeedback');
    $(Q5answerFeedback).show();
	// document.getElementById("Q5answerFeedback").innerHTML = "Sudden confusion, trouble speaking or understanding speech is a sign of stroke. Nice work! ";
	document.getElementById('Q5').src='https://images-na.ssl-images-amazon.com/images/I/51bXSfIn3yL._AC_UL300_SR300,300_.jpg';
	console.log('Correct Guesses', correctGuesses);
    correctGuesses++;
    $("#correctGuesses").text(correctGuesses);
    totalGuessesRight++;
    $("#totalGuessesRight").text(totalGuessesRight);
    console.log('CORRECT GUESS AFTER INCREMENT ', correctGuesses);
}

function Q5false() {
	// document.getElementById('Q5answerFeedback').innerHTML = "Try again!";
	document.getElementById('Q5').src='http://bulanetwork.com/wp-content/uploads/2017/05/What-if-youre-wrong--300x300.jpg';
    console.log('incorrect guess', incorrectGuesses);
    incorrectGuesses++;
    $("#incorrectGuesses").text(incorrectGuesses);
    console.log('incorrect guess after INCREMENT', incorrectGuesses);
}   
