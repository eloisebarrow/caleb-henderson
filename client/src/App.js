import React, { useState } from 'react';
import './App.css';
import Title from './components/Title.jsx';
import Photograph from './components/Photograph.jsx';
import Contact from './components/Contact.jsx';
import Menu from './components/Menu.jsx';

function App(){  

  const [overlay, setOverlay] = useState(false);

  const toggleOverlay = () => {
    setOverlay(!overlay)
  }

  return (
    <div className="App">
      <Title />
      <Photograph />
      <Menu 
        overlay={overlay}  /> 
      <Contact 
        overlay={overlay} 
        toggleOverlay={toggleOverlay} /> 
    </div>
  );
}

export default App;
