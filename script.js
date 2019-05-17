//some global variables
let humanWins = 0;
let compWins = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
const pscore = document.querySelector('#playerscore');
const cscore = document.querySelector('#compscore');
const endmessage = document.querySelector('#endmessage');
function computerPlay(){
    let rand = Math.random();
    if(rand >= .66){
        let result = "Scissors";
        return result;
    } else if(rand >= .33){
        let result = "Paper";
        return result;
    } else if(rand >= 0){
        let result = "Rock";
        return result;
    }
}
    
function singleRound(comp, human){
    let str = "";

    switch(human){
        
        case "Rock":         
            (comp == "Rock") ? str ="Draw, Rock and Rock.":
            (comp == "Paper") ? str ="You lose, Rock loses to Paper.":
            (comp == "Scissors") ? str ="You win, Rock beats Scissors.":
            console.log("ERROR");
            game(str);
            break;
        case "Paper":
            (comp == "Rock") ? str ="You win, Paper beats Rock.":
            (comp == "Paper") ? str ="Draw, Paper and Paper.":
            (comp == "Scissors") ? str ="You lose, Paper loses to Scissors.":
            console.log("ERROR");
            game(str);
            break;
        case "Scissors":
            (comp == "Rock") ? str ="You lose, Scissors loses to Rock.":
            (comp == "Paper") ? str ="You win, Scissors beats Paper.":
            (comp == "Scissors") ? str ="Draw, Scissors and Scissors.":
            console.log("ERROR");
            game(str);
            break;
    }
}


function game(wStr){
    if(humanWins < 5 && compWins < 5){
        if (wStr.search("win") != -1){
            humanWins++;
            pscore.textContent = humanWins;
        } else if (wStr.search("lose") != -1){
            compWins++;
            cscore.textContent = compWins;
        }
        console.log(wStr);
    }
    if (humanWins == 5){
        endmessage.textContent = "You win! The score was " + humanWins + " to " + compWins + ".";
    } else if (compWins == 5){
        endmessage.textContent = "You lose. The score was " + humanWins + " to " + compWins + ".";
    }
}


    function main(){
    rock.addEventListener('click', function(e) {
        let humanSelection = "Rock";
        let computerSelection = computerPlay();
        singleRound(computerSelection, humanSelection);
        
    })

    paper.addEventListener('click', function(e){
        let humanSelection = "Paper";
        let computerSelection = computerPlay();
        singleRound(computerSelection, humanSelection);
        
    })

    scissors.addEventListener('click', function(e){
        let humanSelection = "Scissors";
        let computerSelection = computerPlay();
        singleRound(computerSelection, humanSelection);
        
    })


    }
main();