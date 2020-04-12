import React, { useState } from 'react';
import './App.css';
import Title from './components/Title.jsx';
import Photograph from './components/Photograph.jsx';
import Contact from './components/Contact.jsx';
import Menu from './components/Menu.jsx';

function App(){  

  const [overlay, setOverlay] = useState(false);

  return (
    <div className="App">
      {/* <Header /> */}
      <Title />
      <Photograph />
      <Menu 
        overlay={overlay} 
        setOverlay={setOverlay} /> 
      <Contact 
        overlay={overlay} 
        setOverlay={setOverlay} /> 
    </div>
  );
}

export default App;
