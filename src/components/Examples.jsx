import { EXAMPLES } from '../../data';
import { useState } from 'react';
import TabButton from './TabButton';
import Section from './Section';

export default function Examples() {
    const [selectedTab, setSelectedTab] = useState();
    function handleTabSelect(tabButton) {
      setSelectedTab(tabButton); 
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
        <Section id='examples'>
          <h2>Example</h2>
          <menu>
            <TabButton isSelected={selectedTab === 'components'} onClick={() => handleTabSelect('components')}>Component</TabButton>
            <TabButton isSelected={selectedTab === 'jsx'} onClick={() => handleTabSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTab === 'props'} onClick={() => handleTabSelect('props')}>Prop</TabButton>
            <TabButton isSelected={selectedTab === 'state'} onClick={() => handleTabSelect('state')}>State</TabButton>
          </menu>
          {tabDefaultContent}
        </Section>
    )
}