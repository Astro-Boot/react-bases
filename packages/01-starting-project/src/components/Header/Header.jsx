import reactImage from '../../assets/react-core-concepts.png';
import "./Header.css";

let reactDescriptions = [
	'Fundamental',
	'Core',
	'Crucial',
	'Essential',
	'Important',
	'Key',
	'Necessary',
	'Needed',
	'Primary',
	'Vital',
];

function getRandomDescription() {
	let randomIndex = Math.floor(Math.random() * reactDescriptions.length);
	return reactDescriptions[randomIndex];
}

export default function Header() {
	let description = getRandomDescription();
	return (
		<header>
			<img src={reactImage} alt='Stylized atom' />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	);
}