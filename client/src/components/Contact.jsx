import React from 'react';
import './Contact.css';

export default function Contact() {
  console.log('this is innerWidth:', window.innerWidth)
  return (
    <div className="contact-container">
      <h2 className="mobile-contact">contactCalebH@gmail.com</h2>
      <h2 className="desktop-contact">Contact</h2>
    </div>
  )
}
