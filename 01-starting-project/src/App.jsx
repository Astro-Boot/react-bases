import Header from './components/Header/Header';
import CoreConceptCard from './components/CoreConceptCard';
import { CORE_CONCEPTS } from './data';
import TabButton from './components/TabButton';

export default function App() {
	function handleSelect() {
		console.log('Hello World - Selected!');
	}
	return (
		<div>
			<Header />
			<main>
				<section id='core-concepts'>
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((concept, index) => (
							<CoreConceptCard
								key={index}
								image={concept.image}
								title={concept.title}
								description={concept.description}
							/>
						))}
					</ul>
				</section>

				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						<TabButton onSelect={handleSelect}>Components</TabButton>
						<TabButton onSelect={handleSelect}>JSX</TabButton>
						<TabButton onSelect={handleSelect}>Props</TabButton>
						<TabButton onSelect={handleSelect}>State</TabButton>
					</menu>
				</section>
			</main>
		</div>
	);
}
