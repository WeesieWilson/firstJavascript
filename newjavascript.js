
var question = {
  superPower : "Choose a Superpower Super Strength, Invisiblity, Fly.",
  cuisine : "Choose a Cuisine: Italian, Mexican, Seafood",
  color : "Choose a Color Blue, Orange, Red",
  dessert : "Choose a Dessert Cake, Ice Cream, Brownie",
   drink : "Choose a Drink Coffee, Soda, Tea",
   sport : "Choose a Sport Basketball, Tennis, Football",
   car : "Choose a Car Jeep, Ford, Toyota",
};

var end = function(className){
  var element = document.getElementsByClassName(className)[0];
  element.style.display ="block";
};


var superStrength = function(){
    var cuisine = prompt(question.cuisine);
      if (cuisine === "Italian"){
        var color = prompt(question.color);
          if (color === "Blue"){
            alert("Justin Mirrors");
            end("mirrors");
          }
          else if (color === "Orange") {
            alert("Bang Bang by Ariana Grande");
            end("bang");

          }
          else {
            alert("HYFR Drake");
            end("hyfr");
          }
      }
      else if(cuisine === "Mexican"){
        color = prompt(question.color);
          if (color === "Blue"){
            alert("FourFive Seconds by Rihanna");
          }
          else if (color === "Orange") {
            alert("Diamonds by Rihanna");

          }
          else {
            alert("Drunk in Love by Beyonce");
          }
      }
      else{
        color = prompt(question.color);
          if (color === "Blue"){
            alert("Crank That by Soulija Boy");
          }
          else if (color === "Orange") {
            alert("A Sky Full of Stars Coldplay");

          }
          else {
            alert("A Sky Full of Stars by Coldy play");
          }

      }

};
var invisiblity = function(){
    cuisine = prompt(question.cuisine);
      if (cuisine === "Italian"){
        color = prompt(question.color);
          if ( color === "Blue"){
            alert("Mirros by Justin Timberlake");
          }
          else if (color === "Orange") {
            alert("Bang Bang by Ariana Grande");

          }
          else {
            alert("HYFR Drake");
          }
      }
      else if(cuisine === "Mexican"){
        color = prompt(question.color);
          if (color === "Blue"){
            alert("FourFive Seconds by Rihanna");
          }
          else if (color === "Orange") {
            alert("Diamonds by Rihanna");

          }
          else {
            alert("Drunk in Love by Beyonce");
          }
      }
      else{
        color = prompt(question.color);
          if (color === "Blue"){
            alert("Crank That by Soulija Boy");
          }
          else if (color === "Orange") {
            alert("A Sky Full of Stars Coldplay");

          }
          else {
            alert("A Sky Full of Stars by Coldy play");
          }

      }

};
var fly = function(){
    cuisine = prompt(question.cuisine);
      if (cuisine === "Italian"){
        color = prompt(question.color);
          if ( color === "Blue"){
            alert("Mirros by Justin Timberlake");
          }
          else if (color === "Orange") {
            alert("Bang Bang by Ariana Grande");

          }
          else {
            alert("HYFR Drake");
          }
      }
      else if(cuisine === "Mexican"){
        color = prompt(question.color);
          if (color === "Blue"){
            alert("FourFive Seconds by Rihanna");
          }
          else if (color === "Orange") {
            alert("Diamonds by Rihanna");

          }
          else {
            alert("Drunk in Love by Beyonce");
          }
      }
      else{
        color = prompt(question.color);
          if (color === "Blue"){
            alert("Crank That by Soulija Boy");
          }
          else if (color === "Orange") {
            alert("A Sky Full of Stars Coldplay");

          }
          else {
            alert("A Sky Full of Stars by Coldy play");
          }

      }

};


function musicVideo (){
    var superPower = prompt(question.superPower);
    if (superPower === "Super Strength"){
      superStrength();}
    else if (superPower === "Invisiblity") {
      invisiblity();}
    else {
      fly();};
};

musicVideo();
