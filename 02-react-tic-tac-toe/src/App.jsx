import { useState } from 'react';
import { WINNING_COMBINATIONS } from './helpers/winning-combinations';
import GameBoard from './components/GameBoard';
import identifyActivePlayer from './helpers/identifyActivePlayer';
import Log from './components/Log';
import Player from './components/Player';

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const activePlayer = identifyActivePlayer(gameTurns);

	let gameBoard = initialGameBoard;
	let winner = null;

	for (const turn of gameTurns) {
		const { square, player } = turn;
		const { row, col } = square;
		gameBoard[row][col] = player;
	}

	for (const combination of WINNING_COMBINATIONS) {
		const firstSymbol = gameBoard[combination[0].row][combination[0].column];
		const secondSymbol = gameBoard[combination[1].row][combination[1].column];
		const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

		if (
			firstSymbol &&
			firstSymbol === secondSymbol &&
			firstSymbol === thirdSymbol
		) {
			winner = firstSymbol;
		}
	}

	function handleSelectSquare(rowIndex, colIndex) {
		setGameTurns((prevTurns) => {
			let currentPlayer = identifyActivePlayer(prevTurns);
			const updatedTurns = [
				{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
				...prevTurns,
			];

			return updatedTurns;
		});
	}
	return (
		<main>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					{/* ---- Player X ---- */}
					<Player
						name={'player 1'}
						symbol={'X'}
						isActive={activePlayer === 'X'}
					></Player>
					{/* ---- Player O ---- */}
					<Player
						name={'Player 2'}
						symbol={'O'}
						isActive={activePlayer === 'O'}
					></Player>
				</ol>
				{/* ---- GameBoard ----- */}
				{winner && <p>You won {winner}!</p>}
				<GameBoard
					onSelectSquare={handleSelectSquare}
					board={gameBoard}
				></GameBoard>
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}
