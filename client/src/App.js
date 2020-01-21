import React from 'react';
import './App.css';
import Title from './components/Title.jsx';
import Photograph from './components/Photograph.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Photograph />
      <Title />
    </div>
  );
}

export default App;
