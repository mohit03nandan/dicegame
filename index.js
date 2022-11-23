
const Random_no_1 = Math.floor(Math.random() * 6) + 1;  
const randomDImage = "dice" + Random_no_1 + ".png"; 
const RandomImageSource_1 = "images/" + randomDImage; 
$("img")[0].setAttribute("src", RandomImageSource_1);


const Random_no_2 = Math.floor(Math.random() * 6) + 1;
const RandomImageSource_2 = "images/dice" + Random_no_2 + ".png";
$("img")[1].setAttribute("src", RandomImageSource_2);

if (Random_no_1 > Random_no_2) {
  $("h1").html(" hurrey!! Player 1 Wins");
 }
else if (Random_no_2 > Random_no_1) {
  $("h1").html("hurrey!! Player 2 Wins ");
 }
else {
  $("h1").html("Draw")
 }
