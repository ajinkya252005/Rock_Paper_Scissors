// 1. Select all elements at the beginning
const choices = document.querySelectorAll('.container');
const resultText = document.querySelector('#t_result');
const userScoreElem = document.querySelector('#user_score');
const compScoreElem = document.querySelector('#comp_score');

const options = ["rock", "paper", "scissors"];
let userScore = 0;
let compScore = 0;

// 2. Use a single event listener for all choices
choices.forEach(choice => {
    // Add hover effects
    choice.addEventListener('mouseover', () => {
        choice.style.border = "3px solid black";
        choice.style.cursor = "pointer";
    });
    choice.addEventListener('mouseout', () => {
        choice.style.border = "none";
    });

    // Add click event to play the game
    choice.addEventListener('click', () => {
        const userChoice = choice.id; // "rock", "paper", or "scissors"
        const computerChoice = getComputerChoice();
        playRound(userChoice, computerChoice);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

// 3. Centralize the game logic into one function
function playRound(user, computer) {
    if (user === computer) {
        // It's a draw
        resultText.innerHTML = `It's a Draw! You both chose ${user}.`;
    } else if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        // User wins
        userScore++;
        userScoreElem.innerHTML = `<b>${userScore}</b>`;
        resultText.innerHTML = `You Win! ${user} beats ${computer}.`;
    } else {
        // Computer wins
        compScore++;
        compScoreElem.innerHTML = `<b>${compScore}</b>`;
        resultText.innerHTML = `You Lose! ${computer} beats ${user}.`;
    }
}