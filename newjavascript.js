
var question = {
  superPower : "Choose a Superpower: Super Strength, Invisiblity, Fly.",
  cuisine : "Choose a Cuisine: Italian, Mexican, Seafood",
  color : "Choose a Color Blue, Orange, Red",
  dessert : "Choose a Dessert Cake, Ice Cream, Brownie",
   drink : "Choose a Drink Coffee, Soda, Tea",
   sport : "Choose a Sport Basketball, Tennis, Football",
   car : "Choose a Car Jeep, Ford, Toyota",
   name: "What is your name?",
};

var myName = prompt(question.name);

function say(name) {
  return name;
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
            alert(say(myName) + " " + "should star in Mirrors with Justin Timberlake");
            end("mirrors");
          }
          else if (color === "Orange") {
            alert(say(myName) + " " + "shoud star in Bang Bang with Ariana Grande");
            end("bang");

          }
          else {
            alert(say(myName) + " " + "should star in HYFR with Drake");
            end("hyfr");
          }
      }
      else if(cuisine === "Mexican"){
        color = prompt(question.color);
          if (color === "Blue"){
            alert(say(myName) + " " + "should star in FourFive Seconds with Rihanna");
            end("fourFive");
          }
          else if (color === "Orange") {
            alert(say(myName) + " " + "should star in Diamonds with Rihanna");
            end("diamonds");

          }
          else {
            alert(say(myName) + " " + "should star in Drunk in Love with Beyonce");
            end("drunk");
          }
      }
      else{
        color = prompt(question.color);
          if (color === "Blue"){
            alert(say(myName) + " " + "should star in Crank That with Soulija Boy");
            end("crank");
          }
          else if (color === "Orange") {
            alert(say(myName) + " " + "should star in A Sky Full of Stars with Coldplay");
            end("sky");

          }
          else {
            alert(say(myName) + " " + "should star in Hands to Myself with Selena Gomez");
            end("hands");
          }

      }

};
var invisiblity = function(){
    dessert = prompt(question.dessert);
      if (dessert === "Cake"){
        drink = prompt(question.drink);
          if ( drink === "Coffee"){
            alert(say(myName) + " " + "should star in 7/11 with Beyonce");
            end("seven");
          }
          else if (drink === "Soda") {
            alert(say(myName) + " " + "should star in International Love with Pitbull");
            end("international");

          }
          else {
            alert(say(myName) + " " + "should star in Loyal with Chris Brown");
            end("loyal");
          }
      }
      else if(dessert === "Ice Cream"){
        drink = prompt(question.drink);
          if (drink === "Coffee"){
            alert(say(myName) + " " + "should star in Yeah with Usher");
            end("yeah");
          }
          else if (drink === "Soda") {
            alert(say(myName) + " " + "should star in Sorry with Justin Beiber");
            end("sorry");

          }
          else {
            alert(say(myName) + " " + "should star in Fun with Pitbull");
            end("fun");
          }
      }
      else{
        drink = prompt(question.drink);
          if (drink === "Coffee"){
            alert(say(myName) + " " + "should star in Happy with Pharrel");
            end("happy");
          }
          else if (drink === "Soda") {
            alert(say(myName) + " " + "should star in California Girls with Katy Perry");
            end("california");

          }
          else {
            alert(say(myName) + " " + "should star in Fancy with Iggy");
            end("fancy");

          }

      }

};
var fly = function(){
    sport = prompt(question.sport);
      if (sport === "Basketball"){
        car = prompt(question.car);
          if ( car === "Jeep"){
            alert(say(myName) + " " + "should star in Thrift Store with Macklemore");
            end("thrift");
          }
          else if (car === "Ford") {
            alert(say(myName) + " " + "should star in Gangnam Style with PSY");
            end("gangnam");

          }
          else {
            alert(say(myName) + " " + "should star in Dark Horse with Katy Perry");
            end("dark");
          }
      }
      else if(sport === "Tennis"){
        car = prompt(question.car);
          if (car === "Jeep"){
            alert(say(myName) + " " + "should star in Downtown with Macklemore");
            end("downtown");
          }
          else if (car === "Ford") {
            alert(say(myName) + " " + "should star in Love the Way you Lie with Rihanna");
            end("love");

          }
          else {
            alert(say(myName) + " " + "should star in Wrecking Ball with Miley Cyrus");
            end("wrecking");
          }
      }
      else{
        car = prompt(question.car);
          if (car === "Jeep"){
            alert(say(myName) + " " + "should star in Empire State of Mind with Jay Z");
            end("empire");
          }
          else if (car === "Ford") {
            alert(say(myName) + " " + "should star in Single Ladies with Beyonce");
            end("single");

          }
          else {
            alert(say(myName) + " " + "should star in Watch me Whip with Silento");
            end("watch");
          }

      }

};


function musicVideo (){
    myName;
    var superPower = prompt(question.superPower);
    if (superPower === "Super Strength"){
      superStrength();}
    else if (superPower === "Invisiblity") {
      invisiblity();}
    else {
      fly();};
};

musicVideo();
