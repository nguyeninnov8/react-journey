import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from '../data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import './index.css';

function App() {
  const [selectedTab, setSelectedTab] = useState();
  function handleTabSelect(tabButton) {
    setSelectedTab(tabButton); 
    console.log(tabButton);
  }

  let tabDefaultContent = <p>Select a tab to see an example</p>;
  if (selectedTab) {
    tabDefaultContent = (
      <div id="tab-content">
      <h3>{EXAMPLES[selectedTab].title}</h3>
      <p>{EXAMPLES[selectedTab].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTab].code}
        </code>
      </pre>
    </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map(conceptItem => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Example</h2>
          <menu>
            <TabButton isSelected={selectedTab === 'components'} onSelect={() => handleTabSelect('components')}>Component</TabButton>
            <TabButton isSelected={selectedTab === 'jsx'} onSelect={() => handleTabSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTab === 'props'} onSelect={() => handleTabSelect('props')}>Prop</TabButton>
            <TabButton isSelected={selectedTab === 'state'} onSelect={() => handleTabSelect('state')}>State</TabButton>
          </menu>
          {tabDefaultContent}
        </section>

      </main>
    </div>
  );
}

export default App;
