


function red()
{
  alert("Go Big or go home!!!");
}


function getDiceAmount() {
	var wagerInput = document.getElementById('wager').value;
	document.getElementById("bet").innerHTML = wagerInput;
};



function timer()
{
  document.getElementById('demo').innerHTML = Date();
};

var i = 0;
function smoke() {
  for (i = 0; i < 10; i++) {
  //  document.write(i);

    document.getElementById("dude").innerHTML= "You rolled a " + (i);
  };
};

smoke();

function roll() {
  // get the current bet from the value property of the input

  var die1 = Math.floor(Math.random()*6+1);
  var die2 = Math.floor(Math.random()*6+1);

  // figure out if they win or lose money, change the balance variable accordingly

  // update this to provide a message about win or loss
  document.getElementById("message").innerHTML= "You rolled a " + (die1 + die2);
};


var myLinkFive = document.getElementById("link_5");
var myLinkAttribute = myLinkFive.getAttribute("rel");

function sayHello() {
    alert("Hello World!");
}
