import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';
import Log from './components/Log';
import identifyActivePlayer from './helpers/identifyActivePlayer';

function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const activePlayer = identifyActivePlayer(gameTurns);

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
			<div className='game-outerContainer'>
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
					<GameBoard
						onSelectSquare={handleSelectSquare}
						turns={gameTurns}
					></GameBoard>
				</div>
				<div className='game-logs'>
					<Log turns={gameTurns} />
				</div>
			</div>
		</main>
	);
}

export default App;
