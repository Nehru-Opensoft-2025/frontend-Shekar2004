import React from 'react';
import DropdownRow from './components/DropdownRow';

import './App.css';

const App = () => {
  return(
    <div className="App">
      <DropdownRow name="Level 1" backgroundColor="#333333" level = {0} 
        children = {
          <>
            <DropdownRow name="Sublevel 1" backgroundColor="#666666" level={1}
              children = {
                <>
                  <DropdownRow name="Item 1" backgroundColor="#999999" level={2}/>
                  <DropdownRow name="Item 2" backgroundColor="#999999" level={2}/>
                </>
              }
            />
            <DropdownRow name="Sublevel 2" backgroundColor="#666666" level={1}
              children = {
                <>
                  <DropdownRow name="Item 1" backgroundColor="#999999" level={2}/>
                  <DropdownRow name="Item 2" backgroundColor="#999999" level={2}/>
                  <DropdownRow name="Item 3" backgroundColor="#999999" level={2}/>
                </>
              }
            />
          </>
        } 
      />
      <DropdownRow name="Level 2" backgroundColor="#333333" level = {0} 
        children = {
          <>
            <DropdownRow name="Sublevel 1" backgroundColor="#666666" level={1}
              children = {
                <>
                  <DropdownRow name="Item 1" backgroundColor="#999999" level={2}/>
                  <DropdownRow name="Item 2" backgroundColor="#999999" level={2}/>
                  <DropdownRow name="Item 3" backgroundColor="#999999" level={2}/>
                  <DropdownRow name="Item 4" backgroundColor="#999999" level={2}/>
                </>
              }
            />
          </>
        } 
      />
      <DropdownRow name="Level 3" backgroundColor="#333333" level = {0} 
        children = {
          <>
            <DropdownRow name="Sublevel 1" backgroundColor="#666666" level={1}
              children = {
                <>
                  <DropdownRow name="Item 1" backgroundColor="#999999" level={2}/>
                </>
              }
            />
            <DropdownRow name="Sublevel 2" backgroundColor="#666666" level={1}
              children = {
                <>
                  <DropdownRow name="Item 1" backgroundColor="#999999" level={2}/>
                </>
              }
            />
            <DropdownRow name="Sublevel 3" backgroundColor="#666666" level={1}
              children = {
                <>
                  <DropdownRow name="Item 1" backgroundColor="#999999" level={2}/>
                  <DropdownRow name="Item 2" backgroundColor="#999999" level={2}/>
                  <DropdownRow name="Item 3" backgroundColor="#999999" level={2}/>
                </>
              }
            />
            <DropdownRow name="Sublevel 4" backgroundColor="#666666" level={1}
              children = {
                <>
                  <DropdownRow name="Item 1" backgroundColor="#999999" level={2}/>
                  <DropdownRow name="Item 2" backgroundColor="#999999" level={2}/>
                </>
              }
            />
          </>
        } 
      />
    </div>
  );
};

export default App;

