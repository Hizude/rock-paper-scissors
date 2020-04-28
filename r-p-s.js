let playerPoints = 0;
let computerPoints = 0;
const rounds = 5; 

function addPointsPlayer(){
	playerPoints += 1;
}

function addPointsComputer(){
	computerPoints += 1;
}

function computerPlay(){
	const allMoves = ["rock", "paper", "scissors"];
	let randomMove = allMoves[Math.floor(Math.random() * allMoves.length)];
	return randomMove;
}

function playRound(playerSelection, computerSelection){
	switch(computerSelection){
		case "rock":
			if (playerSelection === "rock"){
				return "Tie!";
			} else if (playerSelection === "paper") {
				addPointsPlayer();
				return "You win! Paper beats rock";
			} else if (playerSelection === "scissors") {
				addPointsComputer();
				return "You lose! Rock beats scissors";
			}
			break;
		case "paper":
			if (playerSelection === "rock"){
				addPointsComputer();
				return "You lose! Paper beats rock";
			} else if (playerSelection === "paper") {
				return "Tie!";
			} else if (playerSelection === "scissors") {
				addPointsPlayer();
				return "You win! Scissors beat paper";
			}
			break;
		case "scissors":
			if (playerSelection === "rock"){
				addPointsPlayer();
				return "You win! Rock beats scissors";
			} else if (playerSelection === "paper") {
				addPointsComputer();
				return "You lose! Scissors beats paper";
			} else if (playerSelection === "scissors") {
				return "Tie!";
			}
			break;
		default: 
			return 1;
	}
}

function game(){
	for (var i = 0; i < rounds; i++) {
		let pMove = prompt("Choose either 'rock', 'paper' or 'scissors'!");
		const playerSelection = pMove.toLowerCase();
		let computerSelection = computerPlay();
		console.log(playRound(playerSelection, computerSelection));
	}
	console.log("Score: You: " + playerPoints + " Bot: " + computerPoints);
}

game();