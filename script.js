let body = document.querySelector("body")
let square1 = document.querySelector("#square1")
let square2 = document.querySelector("#square2")
let square3 = document.querySelector("#square3")
let square4 = document.querySelector("#square4")
let square5 = document.querySelector("#square5")
let reset = document.querySelector("#reset")
let selectedColorString = document.querySelector("#selectedColorString")
let title = document.querySelector("#title")
let Guess = document.querySelector("#Guess")
let gUess = document.querySelector("#gUess")
let guEss = document.querySelector("#guEss")
let gueSs = document.querySelector("#gueSs")
let guesS = document.querySelector("#guesS")
let exclamation = document.querySelector("#exclamation")
let The = document.querySelector("#The")
let tHe = document.querySelector("#tHe")
let thE = document.querySelector("#thE")
let CColor = document.querySelector("#Color")
let cOlor = document.querySelector("#cOlor")
let coLor = document.querySelector("#coLor")
let colOr = document.querySelector("#colOr")
let coloR = document.querySelector("#coloR")
let tutorialButton = document.querySelector("#tutorialButton")
let randomNumber1;
let randomNumber2;
let randomNumber3;
let color;
let squares = [square1, square2, square3, square4, square5]
let correctSquare;
let tutorial = document.createElement("div")
tutorial.setAttribute("id", "tutorial")
let tutorialBox = document.createElement("div")
tutorialBox.setAttribute("id", "tutorialBox")
tutorial.append(tutorialBox)

tutorialButton.addEventListener("click", () => {
    body.append(tutorial);
})

let TboxDiv1 = document.createElement("div")
TboxDiv1.setAttribute("id", "TboxDiv1")

tutorialBox.append(TboxDiv1)
let invisibleDiv = document.createElement("div")
TboxDiv1.append(invisibleDiv)
invisibleDiv.style.width = "20px";
let tutorialTitle = document.createElement("span")
tutorialTitle.innerText = "How to play?";
tutorialTitle.setAttribute("id", "tutorialTitle")
TboxDiv1.append(tutorialTitle);
let tutorialClose = document.createElement("img")
tutorialClose.setAttribute("src", "iconClose.svg")
TboxDiv1.append(tutorialClose);
tutorialClose.setAttribute("id", "tutorialClose")


let TboxDiv2 = document.createElement("div")
tutorialBox.append(TboxDiv2)
let TutorialExplanation = document.createElement("p")
TboxDiv2.append(TutorialExplanation);
TutorialExplanation.innerText = "The game consists of 14 rounds in which you have to guess the color based on the RGB code present at the top of the page. You can choose between five options, and you win if you guess correctly more than you fail. If a round is too difficult, you can choose the SKIP option, but be aware that it is limited to three uses."
let TutorialExplanation2 = document.createElement("p")
tutorialBox.append(TutorialExplanation2)
TutorialExplanation2.innerText = "Good luck!"
TutorialExplanation.setAttribute("id", "Texplanation1")
TutorialExplanation2.setAttribute("id", "Texplanation2")
function randomColor() {
    randomNumber1 = Math.floor(Math.random() * 255)
    randomNumber2 = Math.floor(Math.random() * 255)
    randomNumber3 = Math.floor(Math.random() * 255)
    return `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`
    
}

let winNumber = 0;
let failNumber = 0;

let invisibleDiv2 = document.createElement("div");
invisibleDiv2.style.width = "20px";
let resultClose = document.createElement("img");
resultClose.setAttribute("src", "iconClose.svg");
resultClose.setAttribute("id", "resultClose");
let result = document.createElement("div")
let resultBox = document.createElement("div")
result.append(resultBox)
result.setAttribute("id", "result")
resultBox.setAttribute("id", "resultBox")
let ResultBoxDiv1 = document.createElement("div")
resultBox.append(ResultBoxDiv1);
let ResultTitle = document.createElement("span");
ResultBoxDiv1.append(invisibleDiv2)
ResultBoxDiv1.append(ResultTitle);
ResultBoxDiv1.append(resultClose)
let skipsAvailable = 4;
ResultBoxDiv1.setAttribute("id", "resultboxdiv1")
ResultTitle.innerText = "test";
ResultTitle.setAttribute("id", "ResultTitle")
let ResultBoxDiv2 = document.createElement("div")
ResultBoxDiv2.setAttribute("id", "ResultBoxDiv2")
let ResultWins = document.createElement("div")
ResultWins.setAttribute("id", "ResultWins")
let ResultWinText = document.createElement("span");
ResultWinText.innerText = "Wins: "
ResultWinText.style.fontSize = "1.4rem";
let Wins = document.createElement("span");
Wins.style.color = "green";
Wins.style.fontSize = "1.4rem";
Wins.style.fontWeight = "bold";
Wins.innerText = "0";
let ResultFails = document.createElement("div");
ResultFails.setAttribute("id", "ResultFails");
let ResultFailsText = document.createElement("span");
ResultFailsText.innerText = "Fails: "
ResultFailsText.style.fontSize = "1.4rem";
let Fails = document.createElement("span");
Fails.style.color = "red";
Fails.style.fontSize = "1.4rem";
Fails.style.fontWeight = "bold";
Fails.innerText = "0";
resultBox.append(ResultBoxDiv2);
ResultBoxDiv2.append(ResultWins);
ResultWins.append(ResultWinText);
ResultWins.append(Wins);
ResultBoxDiv2.append(ResultFails);
ResultFails.append(ResultFailsText);
ResultFails.append(Fails);
let PlayAgain = document.createElement("button")
resultBox.append(PlayAgain);
PlayAgain.setAttribute("id", "PlayAgain")
PlayAgain.innerText = "Play Again";

let letters = title.querySelectorAll("*")

tutorialClose.addEventListener("click", () => {
    tutorial.remove();
})

resultClose.addEventListener("click", () => {
    result.remove();
    selectedColorString.innerText = "rgb(255, 255, 255)";
    for (const test of title.querySelectorAll("*")) {
        test.style.Color = "rgb(255,255,255)";
        test.classList.remove("correct")
        test.classList.remove("fail")
        test.style.Color = "rgb(255,255,255)";
    }
})

randomColor()
color = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
let randomSquareNumber = Math.floor(Math.random() * 5);
randomSquare = squares[randomSquareNumber].getAttribute("id").toString();
selectedColorString.innerText = "rgb(255, 255, 255)";

reset.addEventListener("click", () => {
    if (skipsAvailable > 0) {
    skipsAvailable--
    document.getElementById("square1").style.backgroundColor = randomColor();
    document.getElementById("square2").style.backgroundColor = randomColor();
    document.getElementById("square3").style.backgroundColor = randomColor();
    document.getElementById("square4").style.backgroundColor = randomColor();
    document.getElementById("square5").style.backgroundColor = randomColor();
    let randomNumber = Math.floor(Math.random() * 5)
    correctSquare = squares[randomNumber];
    console.log(correctSquare)
    selectedColorString.innerText = window.getComputedStyle(correctSquare).getPropertyValue("background-color");
    if (reset.innerText == "START GAME"  || reset.innerText == "PLAY AGAIN") {
        reset.innerText = `SKIP (${skipsAvailable}/3)`;
    }
    reset.innerText = `SKIP (${skipsAvailable}/3)`
}
})

PlayAgain.addEventListener("click", () => {
    result.remove();
    if (skipsAvailable > 0) {
        skipsAvailable--
        document.getElementById("square1").style.backgroundColor = randomColor();
        document.getElementById("square2").style.backgroundColor = randomColor();
        document.getElementById("square3").style.backgroundColor = randomColor();
        document.getElementById("square4").style.backgroundColor = randomColor();
        document.getElementById("square5").style.backgroundColor = randomColor();
        let randomNumber = Math.floor(Math.random() * 5)
        correctSquare = squares[randomNumber];
        console.log(correctSquare)
        selectedColorString.innerText = window.getComputedStyle(correctSquare).getPropertyValue("background-color");
        if (reset.innerText == "START GAME"  || reset.innerText == "PLAY AGAIN") {
            reset.innerText = `SKIP (${skipsAvailable}/3)`;
        }
        reset.innerText = `SKIP (${skipsAvailable}/3)`
        for (const test of title.querySelectorAll("*")) {
            test.style.Color = "rgb(255,255,255)";
            test.classList.remove("correct")
            test.classList.remove("fail")
            test.style.Color = "rgb(255,255,255)";
        }
    }
})


square1.addEventListener("click", () => {
    if (reset.innerText !== "START GAME" && reset.innerText !== "PLAY AGAIN") {
    if (window.getComputedStyle(square1).getPropertyValue("background-color") == selectedColorString.innerText) {
      if (!Guess.classList.contains("correct") && !Guess.classList.contains("fail")) {
        Guess.classList.add("correct");
        winNumber++
      } else if (!gUess.classList.contains("correct") && !gUess.classList.contains("fail")) {
        gUess.classList.add("correct");
        winNumber++
    } else if (!guEss.classList.contains("correct") && !guEss.classList.contains("fail")) {
        guEss.classList.add("correct");
        winNumber++    
    } else if (!gueSs.classList.contains("correct") && !gueSs.classList.contains("fail")) {
        gueSs.classList.add("correct");
        winNumber++
    } else if (!guesS.classList.contains("correct") && !guesS.classList.contains("fail")) {
        guesS.classList.add("correct");
        winNumber++
    } else if (!The.classList.contains("correct") && !The.classList.contains("fail")){
        The.classList.add("correct");
        winNumber++
    } else if (!tHe.classList.contains("correct") && !tHe.classList.contains("fail")){
        tHe.classList.add("correct");
        winNumber++
    } else if (!thE.classList.contains("correct") && !thE.classList.contains("fail")){
        thE.classList.add("correct");
        winNumber++
    } else if (!CColor.classList.contains("correct") && !CColor.classList.contains("fail")){
        CColor.classList.add("correct");
        winNumber++
    } else if (!cOlor.classList.contains("correct") && !cOlor.classList.contains("fail")){
        cOlor.classList.add("correct");
        winNumber++
    } else if (!coLor.classList.contains("correct") && !coLor.classList.contains("fail")){
        coLor.classList.add("correct");
        winNumber++
    } else if (!colOr.classList.contains("correct") && !colOr.classList.contains("fail")){
        colOr.classList.add("correct");
        winNumber++
    } else if (!coloR.classList.contains("correct") && !coloR.classList.contains("fail")){
        coloR.classList.add("correct");
        winNumber++
    } else if (!exclamation.classList.contains("correct") && !exclamation.classList.contains("fail")){
        exclamation.classList.add("correct");
        winNumber++
} } else {
    if (!Guess.classList.contains("correct") && !Guess.classList.contains("fail")) {
        Guess.classList.add("fail");
        failNumber++
      } else if (!gUess.classList.contains("correct") && !gUess.classList.contains("fail")) {
        gUess.classList.add("fail");
        failNumber++
    } else if (!guEss.classList.contains("correct") && !guEss.classList.contains("fail")) {
        guEss.classList.add("fail");
        failNumber++    
    } else if (!gueSs.classList.contains("correct") && !gueSs.classList.contains("fail")) {
        gueSs.classList.add("fail");
        failNumber++
    } else if (!guesS.classList.contains("correct") && !guesS.classList.contains("fail")) {
        guesS.classList.add("fail");
        failNumber++
    } else if (!The.classList.contains("correct") && !The.classList.contains("fail")){
        The.classList.add("fail");
        failNumber++
    } else if (!tHe.classList.contains("correct") && !tHe.classList.contains("fail")){
        tHe.classList.add("fail");
        failNumber++
    } else if (!thE.classList.contains("correct") && !thE.classList.contains("fail")){
        thE.classList.add("fail");
        failNumber++
    } else if (!CColor.classList.contains("correct") && !CColor.classList.contains("fail")){
        CColor.classList.add("fail");
        failNumber++
    } else if (!cOlor.classList.contains("correct") && !cOlor.classList.contains("fail")){
        cOlor.classList.add("fail");
        failNumber++
    } else if (!coLor.classList.contains("correct") && !coLor.classList.contains("fail")){
        coLor.classList.add("fail");
        failNumber++
    } else if (!colOr.classList.contains("correct") && !colOr.classList.contains("fail")){
        colOr.classList.add("fail");
        failNumber++
    } else if (!coloR.classList.contains("correct") && !coloR.classList.contains("fail")){
        coloR.classList.add("fail");
        failNumber++
    } else if (!exclamation.classList.contains("correct") && !exclamation.classList.contains("fail")){
        exclamation.classList.add("fail");
        failNumber++
}

} 
document.getElementById("square1").style.backgroundColor = randomColor();
document.getElementById("square2").style.backgroundColor = randomColor();
document.getElementById("square3").style.backgroundColor = randomColor();
document.getElementById("square4").style.backgroundColor = randomColor();
document.getElementById("square5").style.backgroundColor = randomColor();
let randomNumber = Math.floor(Math.random() * 5)
correctSquare = squares[randomNumber];
console.log(correctSquare)
selectedColorString.innerText = window.getComputedStyle(correctSquare).getPropertyValue("background-color");
if (winNumber+failNumber == 14) {
    body.append(result);
    Wins.innerText = winNumber;
    Fails.innerText = failNumber;
    if (winNumber > failNumber) {
        ResultTitle.innerText = "La mulți ani! Cod pe Rockstar Games:5XZ3-Z6Z3-MEBV-2ULA , Cod pe Minecraft:G4TRX-KF99H-R323P-7DJ92-P2VGZ"
    } else {
        ResultTitle.innerText = "Try again!"
    }
    reset.innerText = "PLAY AGAIN";
    document.getElementById("square1").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square2").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square3").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square4").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square5").style.backgroundColor = "rgb(255,255,255)";
    skipsAvailable = 4;
    winNumber = 0;
    failNumber = 0;
}
}}) ;


square2.addEventListener("click", () => {
    if (reset.innerText !== "START GAME" && reset.innerText !== "PLAY AGAIN") {
    if (window.getComputedStyle(square2).getPropertyValue("background-color") == selectedColorString.innerText) {
      if (!Guess.classList.contains("correct") && !Guess.classList.contains("fail")) {
        Guess.classList.add("correct");
        winNumber++
      } else if (!gUess.classList.contains("correct") && !gUess.classList.contains("fail")) {
        gUess.classList.add("correct");
        winNumber++
    } else if (!guEss.classList.contains("correct") && !guEss.classList.contains("fail")) {
        guEss.classList.add("correct");
        winNumber++
    } else if (!gueSs.classList.contains("correct") && !gueSs.classList.contains("fail")) {
        gueSs.classList.add("correct");
        winNumber++
    } else if (!guesS.classList.contains("correct") && !guesS.classList.contains("fail")) {
        guesS.classList.add("correct");
        winNumber++
    } else if (!The.classList.contains("correct") && !The.classList.contains("fail")){
        The.classList.add("correct");
        winNumber++
    } else if (!tHe.classList.contains("correct") && !tHe.classList.contains("fail")){
        tHe.classList.add("correct");
        winNumber++
    } else if (!thE.classList.contains("correct") && !thE.classList.contains("fail")){
        thE.classList.add("correct");
        winNumber++
    } else if (!CColor.classList.contains("correct") && !CColor.classList.contains("fail")){
        CColor.classList.add("correct");
        winNumber++
    } else if (!cOlor.classList.contains("correct") && !cOlor.classList.contains("fail")){
        cOlor.classList.add("correct");
        winNumber++
    } else if (!coLor.classList.contains("correct") && !coLor.classList.contains("fail")){
        coLor.classList.add("correct");
        winNumber++
    } else if (!colOr.classList.contains("correct") && !colOr.classList.contains("fail")){
        colOr.classList.add("correct");
        winNumber++
    } else if (!coloR.classList.contains("correct") && !coloR.classList.contains("fail")){
        coloR.classList.add("correct");
        winNumber++
    } else if (!exclamation.classList.contains("correct") && !exclamation.classList.contains("fail")){
        exclamation.classList.add("correct");
        winNumber++
} } else {
    if (!Guess.classList.contains("correct") && !Guess.classList.contains("fail")) {
        Guess.classList.add("fail");
        failNumber++
      } else if (!gUess.classList.contains("correct") && !gUess.classList.contains("fail")) {
        gUess.classList.add("fail");
        failNumber++
    } else if (!guEss.classList.contains("correct") && !guEss.classList.contains("fail")) {
        guEss.classList.add("fail");
        failNumber++   
    } else if (!gueSs.classList.contains("correct") && !gueSs.classList.contains("fail")) {
        gueSs.classList.add("fail");
        failNumber++
    } else if (!guesS.classList.contains("correct") && !guesS.classList.contains("fail")) {
        guesS.classList.add("fail");
        failNumber++
    } else if (!The.classList.contains("correct") && !The.classList.contains("fail")){
        The.classList.add("fail");
        failNumber++
    } else if (!tHe.classList.contains("correct") && !tHe.classList.contains("fail")){
        tHe.classList.add("fail");
        failNumber++
    } else if (!thE.classList.contains("correct") && !thE.classList.contains("fail")){
        thE.classList.add("fail");
        failNumber++
    } else if (!CColor.classList.contains("correct") && !CColor.classList.contains("fail")){
        CColor.classList.add("fail");
        failNumber++
    } else if (!cOlor.classList.contains("correct") && !cOlor.classList.contains("fail")){
        cOlor.classList.add("fail");
        failNumber++
    } else if (!coLor.classList.contains("correct") && !coLor.classList.contains("fail")){
        coLor.classList.add("fail");
        failNumber++
    } else if (!colOr.classList.contains("correct") && !colOr.classList.contains("fail")){
        colOr.classList.add("fail");
        failNumber++
    } else if (!coloR.classList.contains("correct") && !coloR.classList.contains("fail")){
        coloR.classList.add("fail");
        failNumber++
    } else if (!exclamation.classList.contains("correct") && !exclamation.classList.contains("fail")){
        exclamation.classList.add("fail");
        failNumber++
}

}document.getElementById("square1").style.backgroundColor = randomColor();
document.getElementById("square2").style.backgroundColor = randomColor();
document.getElementById("square3").style.backgroundColor = randomColor();
document.getElementById("square4").style.backgroundColor = randomColor();
document.getElementById("square5").style.backgroundColor = randomColor();
let randomNumber = Math.floor(Math.random() * 5)
correctSquare = squares[randomNumber];
console.log(correctSquare)
selectedColorString.innerText = window.getComputedStyle(correctSquare).getPropertyValue("background-color"); 
if (winNumber+failNumber == 14) {
    body.append(result);
    Wins.innerText = winNumber;
    Fails.innerText = failNumber;
    if (winNumber > failNumber) {
        ResultTitle.innerText = "La mulți ani! Cod pe Rockstar Games:5XZ3-Z6Z3-MEBV-2ULA , Cod pe Minecraft:G4TRX-KF99H-R323P-7DJ92-P2VGZ"
    } else {
        ResultTitle.innerText = "Try again!"
    }
    reset.innerText = "PLAY AGAIN";
    document.getElementById("square1").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square2").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square3").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square4").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square5").style.backgroundColor = "rgb(255,255,255)";
    winNumber = 0;
    failNumber = 0;
    skipsAvailable = 4;
}
}}) ;


square3.addEventListener("click", () => {
    if (reset.innerText !== "START GAME" && reset.innerText !== "PLAY AGAIN") {
    if (window.getComputedStyle(square3).getPropertyValue("background-color") == selectedColorString.innerText) {
      if (!Guess.classList.contains("correct") && !Guess.classList.contains("fail")) {
        Guess.classList.add("correct");
        winNumber++
      } else if (!gUess.classList.contains("correct") && !gUess.classList.contains("fail")) {
        gUess.classList.add("correct");
        winNumber++
    } else if (!guEss.classList.contains("correct") && !guEss.classList.contains("fail")) {
        guEss.classList.add("correct");
        winNumber++
    } else if (!gueSs.classList.contains("correct") && !gueSs.classList.contains("fail")) {
        gueSs.classList.add("correct");
        winNumber++
    } else if (!guesS.classList.contains("correct") && !guesS.classList.contains("fail")) {
        guesS.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!The.classList.contains("correct") && !The.classList.contains("fail")){
        The.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!tHe.classList.contains("correct") && !tHe.classList.contains("fail")){
        tHe.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!thE.classList.contains("correct") && !thE.classList.contains("fail")){
        thE.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!CColor.classList.contains("correct") && !CColor.classList.contains("fail")){
        CColor.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!cOlor.classList.contains("correct") && !cOlor.classList.contains("fail")){
        cOlor.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!coLor.classList.contains("correct") && !coLor.classList.contains("fail")){
        coLor.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!colOr.classList.contains("correct") && !colOr.classList.contains("fail")){
        colOr.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!coloR.classList.contains("correct") && !coloR.classList.contains("fail")){
        coloR.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!exclamation.classList.contains("correct") && !exclamation.classList.contains("fail")){
        exclamation.classList.add("correct");
        console.log("nicee2");winNumber++
} } else {
    if (!Guess.classList.contains("correct") && !Guess.classList.contains("fail")) {
        Guess.classList.add("fail");
        console.log("nicee");failNumber++
      } else if (!gUess.classList.contains("correct") && !gUess.classList.contains("fail")) {
        gUess.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!guEss.classList.contains("correct") && !guEss.classList.contains("fail")) {
        guEss.classList.add("fail");
        console.log("nicee2");    failNumber++
    } else if (!gueSs.classList.contains("correct") && !gueSs.classList.contains("fail")) {
        gueSs.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!guesS.classList.contains("correct") && !guesS.classList.contains("fail")) {
        guesS.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!The.classList.contains("correct") && !The.classList.contains("fail")){
        The.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!tHe.classList.contains("correct") && !tHe.classList.contains("fail")){
        tHe.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!thE.classList.contains("correct") && !thE.classList.contains("fail")){
        thE.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!CColor.classList.contains("correct") && !CColor.classList.contains("fail")){
        CColor.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!cOlor.classList.contains("correct") && !cOlor.classList.contains("fail")){
        cOlor.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!coLor.classList.contains("correct") && !coLor.classList.contains("fail")){
        coLor.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!colOr.classList.contains("correct") && !colOr.classList.contains("fail")){
        colOr.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!coloR.classList.contains("correct") && !coloR.classList.contains("fail")){
        coloR.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!exclamation.classList.contains("correct") && !exclamation.classList.contains("fail")){
        exclamation.classList.add("fail");
        console.log("nicee2");failNumber++
}

}document.getElementById("square1").style.backgroundColor = randomColor();
document.getElementById("square2").style.backgroundColor = randomColor();
document.getElementById("square3").style.backgroundColor = randomColor();
document.getElementById("square4").style.backgroundColor = randomColor();
document.getElementById("square5").style.backgroundColor = randomColor();
let randomNumber = Math.floor(Math.random() * 5)
correctSquare = squares[randomNumber];
console.log(correctSquare)
selectedColorString.innerText = window.getComputedStyle(correctSquare).getPropertyValue("background-color");
if (winNumber+failNumber == 14) {
    body.append(result);
    Wins.innerText = winNumber;
    Fails.innerText = failNumber;
    if (winNumber > failNumber) {
        ResultTitle.innerText = "La mulți ani! Cod pe Rockstar Games:5XZ3-Z6Z3-MEBV-2ULA , Cod pe Minecraft:G4TRX-KF99H-R323P-7DJ92-P2VGZ"
    } else {
        ResultTitle.innerText = "Try again!"
    }
    reset.innerText = "PLAY AGAIN";
    document.getElementById("square1").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square2").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square3").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square4").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square5").style.backgroundColor = "rgb(255,255,255)";
    winNumber = 0;
    failNumber = 0;
    skipsAvailable = 4;
}
}}) ;


square4.addEventListener("click", () => {
    if (reset.innerText !== "START GAME" && reset.innerText !== "PLAY AGAIN") {
    if (window.getComputedStyle(square4).getPropertyValue("background-color") == selectedColorString.innerText) {
      if (!Guess.classList.contains("correct") && !Guess.classList.contains("fail")) {
        Guess.classList.add("correct");
        console.log("nicee");winNumber++
      } else if (!gUess.classList.contains("correct") && !gUess.classList.contains("fail")) {
        gUess.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!guEss.classList.contains("correct") && !guEss.classList.contains("fail")) {
        guEss.classList.add("correct");
        console.log("nicee2");winNumber++ 
    } else if (!gueSs.classList.contains("correct") && !gueSs.classList.contains("fail")) {
        gueSs.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!guesS.classList.contains("correct") && !guesS.classList.contains("fail")) {
        guesS.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!The.classList.contains("correct") && !The.classList.contains("fail")){
        The.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!tHe.classList.contains("correct") && !tHe.classList.contains("fail")){
        tHe.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!thE.classList.contains("correct") && !thE.classList.contains("fail")){
        thE.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!CColor.classList.contains("correct") && !CColor.classList.contains("fail")){
        CColor.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!cOlor.classList.contains("correct") && !cOlor.classList.contains("fail")){
        cOlor.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!coLor.classList.contains("correct") && !coLor.classList.contains("fail")){
        coLor.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!colOr.classList.contains("correct") && !colOr.classList.contains("fail")){
        colOr.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!coloR.classList.contains("correct") && !coloR.classList.contains("fail")){
        coloR.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!exclamation.classList.contains("correct") && !exclamation.classList.contains("fail")){
        exclamation.classList.add("correct");
        console.log("nicee2");winNumber++
} } else {
    if (!Guess.classList.contains("correct") && !Guess.classList.contains("fail")) {
        Guess.classList.add("fail");
        console.log("nicee");failNumber++
      } else if (!gUess.classList.contains("correct") && !gUess.classList.contains("fail")) {
        gUess.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!guEss.classList.contains("correct") && !guEss.classList.contains("fail")) {
        guEss.classList.add("fail");
        console.log("nicee2");  failNumber++  
    } else if (!gueSs.classList.contains("correct") && !gueSs.classList.contains("fail")) {
        gueSs.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!guesS.classList.contains("correct") && !guesS.classList.contains("fail")) {
        guesS.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!The.classList.contains("correct") && !The.classList.contains("fail")){
        The.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!tHe.classList.contains("correct") && !tHe.classList.contains("fail")){
        tHe.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!thE.classList.contains("correct") && !thE.classList.contains("fail")){
        thE.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!CColor.classList.contains("correct") && !CColor.classList.contains("fail")){
        CColor.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!cOlor.classList.contains("correct") && !cOlor.classList.contains("fail")){
        cOlor.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!coLor.classList.contains("correct") && !coLor.classList.contains("fail")){
        coLor.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!colOr.classList.contains("correct") && !colOr.classList.contains("fail")){
        colOr.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!coloR.classList.contains("correct") && !coloR.classList.contains("fail")){
        coloR.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!exclamation.classList.contains("correct") && !exclamation.classList.contains("fail")){
        exclamation.classList.add("fail");
        console.log("nicee2");failNumber++
}

}document.getElementById("square1").style.backgroundColor = randomColor();
document.getElementById("square2").style.backgroundColor = randomColor();
document.getElementById("square3").style.backgroundColor = randomColor();
document.getElementById("square4").style.backgroundColor = randomColor();
document.getElementById("square5").style.backgroundColor = randomColor();
let randomNumber = Math.floor(Math.random() * 5)
correctSquare = squares[randomNumber];
console.log(correctSquare)
selectedColorString.innerText = window.getComputedStyle(correctSquare).getPropertyValue("background-color"); 
if (winNumber+failNumber == 14) {
    body.append(result);
    Wins.innerText = winNumber;
    Fails.innerText = failNumber;
    if (winNumber > failNumber) {
        ResultTitle.innerText = "La mulți ani! Cod pe Rockstar Games:5XZ3-Z6Z3-MEBV-2ULA , Cod pe Minecraft:G4TRX-KF99H-R323P-7DJ92-P2VGZ"
    } else {
        ResultTitle.innerText = "Try again!"
    }
    reset.innerText = "PLAY AGAIN";
    document.getElementById("square1").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square2").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square3").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square4").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square5").style.backgroundColor = "rgb(255,255,255)";
    winNumber = 0;
    failNumber = 0;
    skipsAvailable = 4;
}
}}) ;


square5.addEventListener("click", () => {
    if (reset.innerText !== "START GAME" && reset.innerText !== "PLAY AGAIN") {
    if (window.getComputedStyle(square5).getPropertyValue("background-color") == selectedColorString.innerText) {
      if (!Guess.classList.contains("correct") && !Guess.classList.contains("fail")) {
        Guess.classList.add("correct");
        console.log("nicee");winNumber++
      } else if (!gUess.classList.contains("correct") && !gUess.classList.contains("fail")) {
        gUess.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!guEss.classList.contains("correct") && !guEss.classList.contains("fail")) {
        guEss.classList.add("correct");
        console.log("nicee2");   winNumber++ 
    } else if (!gueSs.classList.contains("correct") && !gueSs.classList.contains("fail")) {
        gueSs.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!guesS.classList.contains("correct") && !guesS.classList.contains("fail")) {
        guesS.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!The.classList.contains("correct") && !The.classList.contains("fail")){
        The.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!tHe.classList.contains("correct") && !tHe.classList.contains("fail")){
        tHe.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!thE.classList.contains("correct") && !thE.classList.contains("fail")){
        thE.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!CColor.classList.contains("correct") && !CColor.classList.contains("fail")){
        CColor.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!cOlor.classList.contains("correct") && !cOlor.classList.contains("fail")){
        cOlor.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!coLor.classList.contains("correct") && !coLor.classList.contains("fail")){
        coLor.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!colOr.classList.contains("correct") && !colOr.classList.contains("fail")){
        colOr.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!coloR.classList.contains("correct") && !coloR.classList.contains("fail")){
        coloR.classList.add("correct");
        console.log("nicee2");winNumber++
    } else if (!exclamation.classList.contains("correct") && !exclamation.classList.contains("fail")){
        exclamation.classList.add("correct");
        console.log("nicee2");winNumber++
} } else {
    if (!Guess.classList.contains("correct") && !Guess.classList.contains("fail")) {
        Guess.classList.add("fail");
        console.log("nicee");failNumber++
      } else if (!gUess.classList.contains("correct") && !gUess.classList.contains("fail")) {
        gUess.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!guEss.classList.contains("correct") && !guEss.classList.contains("fail")) {
        guEss.classList.add("fail");
        console.log("nicee2");    failNumber++
    } else if (!gueSs.classList.contains("correct") && !gueSs.classList.contains("fail")) {
        gueSs.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!guesS.classList.contains("correct") && !guesS.classList.contains("fail")) {
        guesS.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!The.classList.contains("correct") && !The.classList.contains("fail")){
        The.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!tHe.classList.contains("correct") && !tHe.classList.contains("fail")){
        tHe.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!thE.classList.contains("correct") && !thE.classList.contains("fail")){
        thE.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!CColor.classList.contains("correct") && !CColor.classList.contains("fail")){
        CColor.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!cOlor.classList.contains("correct") && !cOlor.classList.contains("fail")){
        cOlor.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!coLor.classList.contains("correct") && !coLor.classList.contains("fail")){
        coLor.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!colOr.classList.contains("correct") && !colOr.classList.contains("fail")){
        colOr.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!coloR.classList.contains("correct") && !coloR.classList.contains("fail")){
        coloR.classList.add("fail");
        console.log("nicee2");failNumber++
    } else if (!exclamation.classList.contains("correct") && !exclamation.classList.contains("fail")){
        exclamation.classList.add("fail");
        console.log("nicee2");failNumber++
}

}document.getElementById("square1").style.backgroundColor = randomColor();
document.getElementById("square2").style.backgroundColor = randomColor();
document.getElementById("square3").style.backgroundColor = randomColor();
document.getElementById("square4").style.backgroundColor = randomColor();
document.getElementById("square5").style.backgroundColor = randomColor();
let randomNumber = Math.floor(Math.random() * 5)
correctSquare = squares[randomNumber];
console.log(correctSquare)
selectedColorString.innerText = window.getComputedStyle(correctSquare).getPropertyValue("background-color");
if (winNumber+failNumber == 14) {
    body.append(result);
    Wins.innerText = winNumber;
    Fails.innerText = failNumber;
    if (winNumber > failNumber) {
        ResultTitle.innerText = "La mulți ani! Cod pe Rockstar Games:5XZ3-Z6Z3-MEBV-2ULA , Cod pe Minecraft:G4TRX-KF99H-R323P-7DJ92-P2VGZ"
    } else {
        ResultTitle.innerText = "Try again!"
    }
    reset.innerText = "PLAY AGAIN";
    document.getElementById("square1").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square2").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square3").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square4").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("square5").style.backgroundColor = "rgb(255,255,255)";
    winNumber = 0;
    failNumber = 0;
    skipsAvailable = 4;
}
}}) ;