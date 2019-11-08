import React from 'react';
import './App.css';
import Title from './components/Title.jsx';
import CurrentImage from './components/CurrentImage.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Title />
      <CurrentImage />
      <Contact />
    </div>
  );
}

export default App;
