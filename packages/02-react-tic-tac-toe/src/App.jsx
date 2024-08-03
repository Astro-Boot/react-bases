import { deriveGameBoard, identifyActivePlayer, deriveWinner } from './helpers';
import { Player, Log, GameOver, GameBoard } from './components';
import { useState } from 'react';
import { PLAYERS } from './helpers/constants';

export default function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const [players, setPlayers] = useState(PLAYERS);

	const activePlayer = identifyActivePlayer(gameTurns);
	const gameBoard = deriveGameBoard(gameTurns);
	const winner = deriveWinner(gameBoard, players);

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

	function handleNameChange(symbol, newName) {
		setPlayers((prevnames) => ({
			...prevnames,
			[symbol]: newName,
		}));
	}

	function handleResetGame() {
		setGameTurns([]);
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
						onNameChange={handleNameChange}
					></Player>
					{/* ---- Player O ---- */}
					<Player
						name={'Player 2'}
						symbol={'O'}
						isActive={activePlayer === 'O'}
						onNameChange={handleNameChange}
					></Player>
				</ol>
				{/* ---- GameBoard ----- */}
				{winner && <GameOver onResetGame={handleResetGame} winner={winner} />}
				<GameBoard
					onSelectSquare={handleSelectSquare}
					board={gameBoard}
				></GameBoard>
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}
