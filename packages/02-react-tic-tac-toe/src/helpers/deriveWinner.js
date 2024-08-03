import { WINNING_COMBINATIONS } from './constants';
export default function deriveWinner(gameBoard, players) {
	let winner = null;

	for (const combination of WINNING_COMBINATIONS) {
		const firstSymbol = gameBoard[combination[0].row][combination[0].column];
		const secondSymbol = gameBoard[combination[1].row][combination[1].column];
		const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

		if (
			firstSymbol &&
			firstSymbol === secondSymbol &&
			firstSymbol === thirdSymbol
		) {
			winner = players[firstSymbol];
		}
	}

	return winner;
}
