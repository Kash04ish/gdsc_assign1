import React from 'react';
import Search from './components/search';
import './styles.css';
import initialDetails from './data/initialDetails';

function App() {
  return (
    <div>
      <Search details={initialDetails}/>
    </div>
  );
}

export default App;