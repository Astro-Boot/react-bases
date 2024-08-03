export default function identifyActivePlayer(gameTurns) {
	let activePlayer = 'X';
	if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
		activePlayer = 'O';
	}
	return activePlayer;
}
