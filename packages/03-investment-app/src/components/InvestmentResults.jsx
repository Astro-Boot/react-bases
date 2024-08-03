import { calculateInvestmentResults, formatter } from '../util/investment';

export default function InvestmentResults({ userInput }) {
	const investmentResults = calculateInvestmentResults(userInput);
	const initialInvestment =
		investmentResults[0].valueEndOfYear -
		investmentResults[0].interest -
		investmentResults[0].annualInvestment;

	return (
		<table id='result'>
			<thead className=''>
				<tr>
					<th scope='col'>Year</th>
					<th scope='col'>Investment Value</th>
					<th scope='col'>Interest (yearly)</th>
					<th scope='col'>Total Interest</th>
					<th scope='col'>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{investmentResults.map(
					({
						year,
						valueEndOfYear: investmentValue,
						interest,
						annualInvestment,
					}) => {
						const totalInterest =
							investmentValue - annualInvestment * year - initialInvestment;
						const totalAmountInvested = investmentValue - totalInterest;
						return (
							<tr key={year}>
								<td scope='row'>{year}</td>
								<td scope='row'>{formatter.format(investmentValue)}</td>
								<td scope='row'>{formatter.format(interest)}</td>
								<td scope='row'>{formatter.format(totalInterest)}</td>
								<td scope='row'>{formatter.format(totalAmountInvested)}</td>
							</tr>
						);
					},
				)}
			</tbody>
		</table>
	);
}
