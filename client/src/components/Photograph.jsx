import React from 'react';
import './Photograph.css';

export default function Photograph() {

  const [currentImgIndex, setCurrentImgIndex] = React.useState(0);
  const placeholders = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10];

  const displayImg = placeholders.map( (img, index) => {
    return (
      <div 
        key={index}
        onClick={() => setCurrentImgIndex(currentImgIndex !== placeholders.length - 1 ? currentImgIndex + 1 : 0)}
        className="current-img"
        >
          {img}
      </div>
    )
  })

  return (
    <div className="img-container">
      {displayImg[currentImgIndex]}
    </div>
  )
}

