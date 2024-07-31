import PropTypes from 'prop-types';

export default function GameBoard({ onSelectSquare, turns }) {
	let gameBoard = initialGameBoard;

	for (const turn of turns) {
		const { square, player } = turn;
		const { row, col } = square;
		gameBoard[row][col] = player;
	}

	return (
		<ol id='game-board'>
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button onClick={() => onSelectSquare(rowIndex, colIndex)}>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}

GameBoard.propTypes = {
	onSelectSquare: PropTypes.func.isRequired,
	turns: PropTypes.arrayOf(
		PropTypes.shape({
			square: PropTypes.shape({
				row: PropTypes.number.isRequired,
				col: PropTypes.number.isRequired,
			}).isRequired,
			player: PropTypes.string.isRequired,
		}),
	).isRequired,
};

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];
