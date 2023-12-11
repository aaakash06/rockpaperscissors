
const images = document.querySelectorAll("img");
let userScore= 0;
let compScore= 0;
let scoreUser = document.querySelector("#score-user");
let scoreComp = document.querySelector("#score-computer");
let msg= document.querySelector(".msg");
let compChoices= [ "rock","paper","scissors" ] ;
let userWin = true;



const computerChoice= () =>
{
  let compChoice= Math.floor(Math.random()*3);
  return compChoice;
};

let compPick =compChoices[computerChoice()];

images.forEach((image)=>
{

image.addEventListener("click", ()=>
{


checkWinner(image.getAttribute("id"));
})


})




console.log(compPick);
function checkWinner(userChoice)
{
 if( userChoice === compPick)
 {
    ifdraw();
 }


 else if( userChoice === "rock")
 {
if(compPick === "paper" )
{
ifLost();
}
else
{
    ifWon();
}
 }


 else if(userChoice==="paper")
 {
    if(compPick === "rock" )
{
ifWon();
}
else
{
    ifLost();
}


 }
 else
 {

    if(compPick === "paper" )
{
ifWon();
}
else
{
    ifLost();
}

 }

}
 


function ifdraw()
{
  msg.innerText= "It was a draw. Play again";
}

function msgg(luck)
{
if(luck === true)
{

    msg.innerText= "It was a win. Play again";
    msg.style.color = "green";
}
else
{
    msg.innerText= "It was a loss. Play again";
    msg.style.color = "red";
}
}





function ifWon()
{
userScore++;
scoreUser.innerText = userScore;
msgg(true);
}

function ifLost()
{
    compScore++;
    scoreComp.innerText = compScore;
    msgg(false);
}