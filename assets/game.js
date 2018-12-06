var computerGuess = 0;



var wins = 0;



var losses = 0;



var guessLeft = 9;



var userGuess = 0;





function makeid() {



    var text = "";

    var possible = "abcdefghijklmnopqrstuvwxyz";





    text = possible.charAt(Math.floor(Math.random() * possible.length));



    return text;

}



computerGuess = (makeid());



console.log(computerGuess);





function compare() {



    if (userGuess == computerGuess) {



        wins++;



        var winsDiv = document.getElementById("wins");



        winsDiv.innerHTML = "Wins : " + wins;



        alert("YOU JUST WON! Congratulations! Guess another letter!");



        computerGuess = (makeid());



        console.log(computerGuess);



    } else {



        losses++;



        var lossesDiv = document.getElementById("losses");



        lossesDiv.innerHTML = "Losses: " + losses;



    }



}



document.onkeydown = function getUserGuess(event) {



    userGuess = event.key;



    guessLeft--;



    var guessLeftDiv = document.getElementById("guessLeft");



    guessLeftDiv.innerHTML = "Guesses Left: " + guessLeft;



    if (guessLeft == 0) {



        alert("YOU ARE OUT OF GUESSES, THE PAGE WILL REFRESH SO YOU CAN TRY AGAIN!");



        window.location.reload(true);



    }



    compare();



    var userDiv = document.getElementById("userGuess");



    userDiv.innerHTML += " " + userGuess;





}