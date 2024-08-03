export default function UserInput({ onChange, userInput, errors }) {
	return (
		<section id='user-input'>
			<div className='input-group'>
				<div className='input-group-item'>
					<label htmlFor='initial-investment'>Initial Investment</label>
					<input
						type='number'
						id='initial-investment'
						onChange={(e) => onChange('initialInvestment', e.target.value)}
						value={userInput.initialInvestment}
					/>
					{errors.initialInvestment && (
						<p className='error'>{errors.initialInvestment}</p>
					)}
				</div>
				<div className='input-group-item'>
					<label htmlFor='annual-investment'>Anual Investment</label>
					<input
						type='number'
						id='annual-investment'
						onChange={(e) => onChange('annualInvestment', e.target.value)}
						value={userInput.annualInvestment}
					/>
					{errors.annualInvestment && (
						<p className='error'>{errors.annualInvestment}</p>
					)}
				</div>
			</div>

			<div className='input-group'>
				<div className='input-group-item'>
					<label htmlFor='expected-return'>Expected Return</label>
					<input
						type='number'
						id='expected-return'
						onChange={(e) => onChange('expectedReturn', e.target.value)}
						value={userInput.expectedReturn}
					/>
					{errors.expectedReturn && (
						<p className='error'>{errors.expectedReturn}</p>
					)}
				</div>

				<div className='input-group-item'>
					<label htmlFor='duration'>Duration</label>
					<input
						type='number'
						id='duration'
						onChange={(e) => onChange('duration', e.target.value)}
						value={userInput.duration}
					/>
					{errors.duration && <p className='error'>{errors.duration}</p>}
				</div>
			</div>
		</section>
	);
}
