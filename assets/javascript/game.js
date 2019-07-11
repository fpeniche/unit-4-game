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
//var gameRunning = true;
var counter = 1;

// compares total score vs randon number and determines whether is a win or a lose
function myTotalScore() {
    if(totalScore > randomNumber){
      $("#randomNumber").html(randomNumber);
      $("#win-lose").prepend('<h2>"You lost!"</h2>');
      $("#loses").append('<span>' + counter++ + '</span>');
      $("#totalscore").html('0');
      crystalRandomNumber = Math.floor((Math.random()*12)+1); 
      redCrystalRandomNumber = Math.floor((Math.random()*12)+1);
      mineralRandomNumber = Math.floor((Math.random()*12)+1);
      greenGemRandomNumber = Math.floor((Math.random()*12)+1);
      randomNumber = Math.floor(19+(Math.random()*101));
      totalScore = 0;
      counter = 0;

    }
    else if(totalScore === randomNumber){
      $("#randomNumber").html(randomNumber);
      $("#win-lose").prepend('<h2>"You won!"</h2>');
      $("#wins").append('<span>' + counter++ + '</span>');
      $("#totalscore").html('0');
      crystalRandomNumber = Math.floor((Math.random()*12)+1); 
      redCrystalRandomNumber = Math.floor((Math.random()*12)+1);
      mineralRandomNumber = Math.floor((Math.random()*12)+1);
      greenGemRandomNumber = Math.floor((Math.random()*12)+1);
      randomNumber = Math.floor(19+(Math.random()*101));
      totalScore = 0;
      counter = 0;

    }
    else{
      console.log("nothing happened");
    }
 } 

 // determines random rumber for crystal
function crystal() {
    totalScore+= crystalRandomNumber;   //this is the same as totalScore=totalScore+crystalRandomNumber;
    $("#totalscore").html(totalScore);
    myTotalScore();
}
// determines random rumber for red crystal
function redCrystal() {
    totalScore+= redCrystalRandomNumber;
    $("#totalscore").html(totalScore);
    myTotalScore();
}

// determines random rumber for mineral
function mineral() {
    totalScore+= mineralRandomNumber;
    $("#totalscore").html(totalScore);
    myTotalScore();
}

// determines random rumber for green gem
function greenGem() {
    totalScore+= greenGemRandomNumber;
    $("#totalscore").html(totalScore);
    myTotalScore();
}

