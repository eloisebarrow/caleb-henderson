import React from 'react';
import './Contact.css';

export default function Contact(props) {
  return (
    <div className="contact-container">
      <h2 className="mobile-contact"><a href="mailto:contactcalebh@gmail.com">contactCalebH@gmail.com</a></h2>
      <h2 className="desktop-contact" onClick={() => props.toggleOverlay()}>{props.overlay ? 'x' : 'Contact'}</h2>
    </div>
  )
}
