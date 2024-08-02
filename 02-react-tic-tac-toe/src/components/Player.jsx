import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Player({
	name: initialName,
	symbol,
	isActive,
	onNameChange,
}) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(initialName);

	function handleEditClick() {
		setIsEditing(!isEditing);

		if (isEditing) {
			onNameChange(symbol, playerName);
		}
	}

	function handleChage({ target: { value } }) {
		setPlayerName(value);
	}

	return (
		<li className={isActive ? 'active' : undefined}>
			<span className='player'>
				{!isEditing ? (
					<span className='player-name'>{playerName}</span>
				) : (
					<input
						type='text'
						onChange={handleChage}
						required
						defaultValue={playerName}
					/>
				)}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
}

Player.propTypes = {
	name: PropTypes.string.isRequired,
	symbol: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired,
	onNameChange: PropTypes.func.isRequired,
};
