// Crystals Collector game... let's see how it goes
// This code will run as soon as the page loads
window.onload = function() {
    $("#crystal").on("click", crystal);
    $("#redcrystal").on("click", redCrystal);
    $("#mineral").on("click", mineral);
    $("#greengem").on("click", greenGem);
    $("#randomNumber").html(randomNumber);
  };

// variables that will hold random numbers for the crystals
var crystalRandomNumber = Math.floor((Math.random()*12)+1); 
var redCrystalRandomNumber = Math.floor((Math.random()*12)+1);
var mineralRandomNumber = Math.floor((Math.random()*12)+1);
var greenGemRandomNumber = Math.floor((Math.random()*12)+1);

// var to store a new random number every time game starts
var randomNumber = Math.floor(19+(Math.random()*101));

// other variables needed
var totalScore = 0;
//var crystalScore = 0;
//var redCrystalScore;
//var mineralScore;
//var greenGemScore;

function myTotalScore() {
    if(totalScore > randomNumber){
      $("#randomNumber").html(randomNumber);
      $("#win-lose").prepend('<h2>"You lost!"</h2>');
      $("#loses").append('<span>' +1+ '</span>');
      $("#totalscore").html('0');
    }
    else if(totalScore === randomNumber){
      $("#randomNumber").html(randomNumber);
      $("#win-lose").prepend('<h2>"You won!"</h2>');
      $("#wins").append('<span>" 1"</span>');
      $("#totalscore").html('0');
    }
    else{
      console.log("nothing happened");
    }
 } 

function crystal() {
    totalScore+= crystalRandomNumber;   //this is the same as totalScore=totalScore+crystalRandomNumber;
    $("#totalscore").html(totalScore);
    myTotalScore();

}

function redCrystal() {
    totalScore+= redCrystalRandomNumber;
    $("#totalscore").html(totalScore);
    myTotalScore();
}
function mineral() {
    totalScore+= mineralRandomNumber;
    $("#totalscore").html(totalScore);
    myTotalScore();
  
}
function greenGem() {
    totalScore+= greenGemRandomNumber;
    $("#totalscore").html(totalScore);
    myTotalScore();
  
}

