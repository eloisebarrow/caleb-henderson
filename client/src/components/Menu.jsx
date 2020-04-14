import React from 'react';
import './Menu.css';

export default function Menu(props) {
  return (
    <div className={props.overlay ? 'show-overlay' : 'hide-overlay'}>
      {/* <button className="closebtn" onClick={() => {props.setOverlay(false)}}>X</button> */}
      <h1>ContactCalebH@gmail.com</h1>
    </div>
  )
}
