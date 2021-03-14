import React from 'react';
import './Photograph.css';
// import photos from './../photos';
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

export default function Photograph() {

  const [currentImgIndex, setCurrentImgIndex] = React.useState(0);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

  const displayImg = images.map( (img, index) => {
    return (
      <img 
        key={index}
        src={img}
        onClick={() => setCurrentImgIndex(currentImgIndex !== images.length - 1 ? currentImgIndex + 1 : 0)}
        className="current-img"
        alt="Caleb Henderson portfolio images"
        />
    )
  })

  return (
    <div className="img-container">
      <div 
        className="dot"
        onClick={() => setCurrentImgIndex(currentImgIndex !== 0 ? currentImgIndex - 1 : images.length - 1)}
        > ･ 
      </div>
      {displayImg[currentImgIndex]}
      <div 
        className="dot"
        onClick={() => setCurrentImgIndex(currentImgIndex !== images.length - 1 ? currentImgIndex + 1 : 0)}
        > ･ 
      </div>
    </div>
  )
}
