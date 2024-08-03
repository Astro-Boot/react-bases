import Header from './components/Header/Header';
import CoreConceptCard from './components/CoreConceptCard';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import TabButton from './components/TabButton';
import { useState } from 'react';

export default function App() {
	const [selectedTopic, setSelectedTopic] = useState('components');

	function handleSelect(selectButton) {
		setSelectedTopic(selectButton);
	}
	return (
		<div>
			<Header />
			<main>
				<section id='core-concepts'>
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((conceptItem) => (
							<CoreConceptCard key={conceptItem.title} {...conceptItem} />
						))}
					</ul>
				</section>

				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						<TabButton
							isSelected={selectedTopic === 'components'}
							onSelect={() => handleSelect('components')}
						>
							Components
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'jsx'}
							onSelect={() => handleSelect('jsx')}
						>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'props'}
							onSelect={() => handleSelect('props')}
						>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'state'}
							onSelect={() => handleSelect('state')}
						>
							State
						</TabButton>
					</menu>
				</section>
				{!selectedTopic && <p>Select a topic to see an example</p>}
				{selectedTopic && (
					<div id='tab-content'>
						<h3>{EXAMPLES[selectedTopic].title}</h3>
						<p>{EXAMPLES[selectedTopic].description}</p>
						<pre>
							<code>{EXAMPLES[selectedTopic].code}</code>
						</pre>
					</div>
				)}
			</main>
		</div>
	);
}
