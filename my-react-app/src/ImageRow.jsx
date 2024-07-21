import React from 'react';
import './ImageRow.css';

const images = [
  { id: 1, src: '/images/image1.jpg', alt: 'Image 1' },
  { id: 2, src: '/images/image2.jpg', alt: 'Image 2' },
  { id: 3, src: '/images/image3.jpg', alt: 'Image 3' },
];

function ImageRow() {
  return (
    <div className="image-row">
      {images.map((image) => (
        <div key={image.id} className="image-container">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}

export default ImageRow;
