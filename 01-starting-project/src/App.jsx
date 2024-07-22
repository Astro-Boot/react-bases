import componentImage from "./assets/components.png";
import reactImage from "./assets/react-core-concepts.png";

let reactDescriptions = [
  "Fundamental",
  "Core",
  "Crucial",
  "Essential",
  "Important",
  "Key",
  "Necessary",
  "Needed",
  "Primary",
  "Vital",
];
function getRandomDescription() {
  let randomIndex = Math.floor(Math.random() * reactDescriptions.length);
  return reactDescriptions[randomIndex];
}

function Header() {
  let description = getRandomDescription();
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConceptCard(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConceptCard
              title="Component"
              description="The core Ui building block."
              img={componentImage}
            />
            <CoreConceptCard/>
            <CoreConceptCard/>
            <CoreConceptCard/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

