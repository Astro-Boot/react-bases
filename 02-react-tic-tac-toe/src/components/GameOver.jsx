import PropTypes from 'prop-types';

export default function GameOver({ winner, onResetGame }) {
	return (
		<div id='game-over'>
			<h2>Game Over</h2>
			<p>You won {winner}!</p>
			<button onClick={onResetGame}>Rematch</button>
		</div>
	);
}

GameOver.propTypes = {
	winner: PropTypes.string.isRequired,
	onResetGame: PropTypes.func.isRequired,
};
