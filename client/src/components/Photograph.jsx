import React from 'react';
import './Photograph.css';
import photos from './photos';

export default function Photograph() {

  const [currentImgIndex, setCurrentImgIndex] = React.useState(0);
  // const placeholders = [1, 2, 3, 4, 5];

  const displayImg = photos.map( (img, index) => {
    return (
      <img 
        key={index}
        src={img.src}
        onClick={() => setCurrentImgIndex(currentImgIndex !== photos.length - 1 ? currentImgIndex + 1 : 0)}
        className="current-img"
        />

    )
  })

  console.log('displayImg:', displayImg)

  return (
    <div className="img-container">
      {displayImg[currentImgIndex]}
      {/* <img src={require('./../images/IMG_5149-2.jpeg')} /> */}
    </div>
  )
}
