import PropTypes from 'prop-types';
export default function Log({ turns }) {
	return (
		<>
			<p className='log-title'>Game Moves Logs</p>
			<hr />
			<ol id='log'>
				{turns.map((turn, index) => (
					<li key={index}>
						{`Player ${turn.player} moved to row ${
							turn.square.row
						}, col ${turn.square.col}`}
					</li>
				))}
			</ol>
		</>
	);
}

Log.propTypes = {
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
