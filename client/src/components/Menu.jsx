import React from 'react';
import './Menu.css';

export default function Menu(props) {
  return (
    <div className={props.overlay ? 'show-overlay' : 'hide-overlay'}>
      {/* <button className="closebtn" onClick={() => {props.setOverlay(false)}}>X</button> */}
      <a href="mailto:contactcalebh@gmail.com" target="_blank"><h1>ContactCalebH@gmail.com</h1></a>
    </div>
  )
}
