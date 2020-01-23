import React from 'react';
import './Menu.css';

export default function Menu(props) {
  return (
    <div className="overlay">
      <a href="javascript:void(0)" className="closebtn" onClick={() => props.setOverlay(false)}>X</a>
      <h1>ContactCalebH@gmail.com</h1>
    </div>
  )
}
