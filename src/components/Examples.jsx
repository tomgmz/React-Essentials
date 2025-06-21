import {useState} from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton/TabButton.jsx';

function Examples(){
const [selectedTopic, setSelectedTopic] = useState();
  
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic you want to explore.</p>;

  if (selectedTopic){
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return(
    <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')} label='Components'/>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')} label='JSX'/>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')} label='Props'/>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')} label='State'/>
          </menu>
          {tabContent}
        </section>
  );
}

export default Examples