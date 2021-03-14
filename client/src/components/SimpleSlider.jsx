import React, { Component } from "react";
import Slider from "react-slick";
import './SimpleSlider.css';
import img1 from './../images/IMG_5149-2.jpeg';
import img2 from './../images/Street_2019019.jpg';
import img3 from './../images/Street_2019020.jpg';
import img4 from './../images/Street_2019029.jpg';
import img5 from './../images/Street_2019034.jpg';
import img6 from './../images/Street_2019035.jpg';
import img7 from './../images/Street_2019035(1).jpg';
import img8 from './../images/Street_2019036.jpg';
import img9 from './../images/Street_2019037.jpg';
import img10 from './../images/Street_2019038.jpg';
import img11 from './../images/Street_2019039.jpg';
import img12 from './../images/Street_2019040.jpg';
import img13 from './../images/Street_2019012.jpg';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];
  
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="img-container">
          <img src={images[0]} />
        </div>
        <div className="img-container">
          <img src={images[1]} />
        </div>
        <div className="img-container">
          <img src={images[2]} />
        </div>
        <div className="img-container">
          <img src={images[3]} />
        </div>
        <div className="img-container">
          <img src={images[4]} />
        </div>
        {/* <div className="img-container">
          <img src={images[5]} />
        </div>
        <div className="img-container">
          <img src={images[6]} />
        </div>
        <div className="img-container">
          <img src={images[7]} />
        </div>
        <div className="img-container">
          <img src={images[8]} />
        </div>
        <div className="img-container">
          <img src={images[9]} />
        </div>
        <div className="img-container">
          <img src={images[10]} />
        </div>
        <div className="img-container">
          <img src={images[11]} />
        </div>
        <div className="img-container">
          <img src={images[12]} />
        </div> */}
      </Slider>
    </div>
  );
}
