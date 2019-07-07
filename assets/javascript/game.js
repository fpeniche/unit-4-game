// Crystals Collector game... let's see how it goes

//  This code will run as soon as the page loads.
window.onload = function() {
    $("#crystal").on("click", crystal);
    $("#redcrystal").on("click", redCrystal);
    $("#mineral").on("click", mineral);
    $("#greengem").on("click", greenGem);
  };

// variables that will hold random numbers for the crystals
var crystalRandomNumber = Math.floor((Math.random()*12)+1); 
var redCrystalRandomNumber = Math.floor((Math.random()*12)+1);
var mineralRandomNumber = Math.floor((Math.random()*12)+1);
var greenGemRandomNumber = Math.floor((Math.random()*12)+1);

// variable to tell the system the game is running
var gameRunning = false;

// var to store a new random number every time game starts
var RandomNumber = Math.floor(19+(Math.random()*101));

// other variables needed
var totalScore;
var crystalScore;
var redCrystalScore;
var mineralScore;
var greenGemScore;

//function totalScore(){
  //  sum += $("#totalscore").add(crystalScore+redCrystalScore+mineralScore+greenGemScore);
// } 

function crystal() {
    gameRunning = true;
  //  totalSoFar = $("#totalscore").html();
    crystalScore = $("#totalscore").html(crystalRandomNumber); 

}
function redCrystal() {
    gameRunning = true;
    redCrystalScore = $("#totalscore").html(redCrystalRandomNumber);
  //  totalScore(redCrystalScore);
}
function mineral() {
    gameRunning = true;
    mineralScore = $("#totalscore").html(mineralRandomNumber);
  //  totalScore(mineralScore);
}
function greenGem() {
    gameRunning = true;
    greenGemScore = $("#totalscore").html(greenGemRandomNumber);
  //  totalScore(greenGemScore);
}
