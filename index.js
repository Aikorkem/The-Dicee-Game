//Selecting images of two players randomly

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 +".png");
//document.querySelector("h1").style.color = "red";
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 +".png");

//Changing h1 text

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}else if( randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}else{
    document.querySelector("h1").textContent = "Draw!";
}

