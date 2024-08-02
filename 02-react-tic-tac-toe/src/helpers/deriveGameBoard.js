import { INITIAL_GAME_BOARD } from './constants';

export default function deriveGameBoard(gameTurns) {
	let gameBoard = [...INITIAL_GAME_BOARD].map((innerArrays) => [
		...innerArrays,
	]);

	for (const turn of gameTurns) {
		const { square, player } = turn;
		const { row, col } = square;
		gameBoard[row][col] = player;
	}
	return gameBoard;
}
