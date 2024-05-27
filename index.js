var randomNumber1 = Math.random();
var randomNumber2 = Math.random();
randomNumber1 = 6 * randomNumber1;
randomNumber2 = 6 * randomNumber2;
randomNumber1 = Math.floor(randomNumber1) + 1;
randomNumber2 = Math.floor(randomNumber2) + 1;

var url1 = "./images/dice"+randomNumber1+".png";
var url2 = "./images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", url1);
document.querySelector(".img2").setAttribute("src", url2);

var title = "";

if(randomNumber1>randomNumber2){
    title = "🚩 Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    title = "Player 2 Wins! 🚩";
}
else{
    title = "Draw!";
}

document.querySelector("h1").innerHTML = title;