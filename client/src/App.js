import React from 'react';
import './App.css';
import Title from './components/Title.jsx';
import Photograph from './components/Photograph.jsx';
import Header from './components/Header.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Title />
      <Photograph />
      <Contact />
    </div>
  );
}

export default App;
