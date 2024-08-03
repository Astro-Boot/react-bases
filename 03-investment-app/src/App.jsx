import UserInput from './components/UserInput';
import Header from './components/Header';
import { useState } from 'react';
import InvestmentResults from './components/InvestmentResults.jsx';

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 15000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const [errors, setErrors] = useState({});

	function handleInputChange(inputIdentifier, value) {
		let newValue = +value;

		let error = '';

		switch (inputIdentifier) {
			case 'initialInvestment':
			case 'annualInvestment':
				newValue = Math.max(0, newValue);
				if (newValue === 0) error = 'El valor debe ser positivo';
				break;
			case 'expectedReturn':
				newValue = Math.min(100, Math.max(0, newValue));
				if (newValue === 0) error = 'El valor debe ser mayor que 0';
				if (newValue === 100) error = 'El valor debe ser menor que 100';
				break;
			case 'duration':
				newValue = Math.max(1, newValue);
				break;
		}

		setUserInput((prevInput) => ({
			...prevInput,
			[inputIdentifier]: newValue,
		}));

		setErrors((prevErrors) => ({ ...prevErrors, [inputIdentifier]: error }));
	}

	return (
		<>
			<Header />
			<UserInput
				onChange={handleInputChange}
				userInput={userInput}
				errors={errors}
			/>
			<InvestmentResults userInput={userInput} />
		</>
	);
}
export default App;
