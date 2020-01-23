import React, {useState, useEffect } from 'react';
import './App.css';
import Title from './components/Title.jsx';
import Photograph from './components/Photograph.jsx';
// import Header from './components/Header.jsx';
import Contact from './components/Contact.jsx';
import Menu from './components/Menu.jsx';

function App(){  

  const [overlay, setOverlay] = useState(false);



  return (
    <div className="App">
      {/* <Header /> */}
      <Title />
      <Photograph />
      <Contact overlay={overlay} setOverlay={setOverlay} />
      <Menu overlay={overlay} setOverlay={setOverlay} />
    </div>
  );
}

export default App;
