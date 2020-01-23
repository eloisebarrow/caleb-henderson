import React from 'react';
import './Contact.css';

export default function Contact(props) {
  return (
    <div className="contact-container">
      <h2 className="mobile-contact">contactCalebH@gmail.com</h2>
      <h2 className="desktop-contact" onClick={() => props.setOverlay(true)}>Contact</h2>
    </div>
  )
}
