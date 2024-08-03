import { useState } from 'react';
import './ExerciseSeventeen.css';

const COLORS = {
	Yes: 'green',
	No: 'red',
	default: 'white',
};

export default function ExerciseSeventeen() {
	const [editText, setEditText] = useState('default');

	const handleClick = (value) => setEditText(value);

	return (
		<div id='exercise-17'>
			<h1 style={{ color: COLORS[editText] }}>CSS is great!</h1>
			<menu>
				{['Yes', 'No'].map((option) => (
					<li key={option}>
						<button onClick={() => handleClick(option)}>{option}</button>
					</li>
				))}
			</menu>
		</div>
	);
}
