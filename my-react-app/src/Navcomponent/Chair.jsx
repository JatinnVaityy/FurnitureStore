import React from 'react';
import './Chair.css';

const chairs = [
    { name: 'Chair 1', price: '$100', imgSrc: 'chair1.jpg' },
    { name: 'Chair 2', price: '$150', imgSrc: 'chair2.jpg' },
    { name: 'Chair 3', price: '$200', imgSrc: 'chair3.jpg' },
    { name: 'Chair 4', price: '$250', imgSrc: 'chair4.jpg' },
    { name: 'Chair 5', price: '$300', imgSrc: 'chair5.jpg' },
    { name: 'Chair 6', price: '$350', imgSrc: 'chair6.jpg' },
    { name: 'Chair 7', price: '$400', imgSrc: 'chair7.jpg' },
    { name: 'Chair 8', price: '$450', imgSrc: 'chair8.jpg' },
    { name: 'Chair 9', price: '$500', imgSrc: 'chair9.jpg' },
    { name: 'Chair 10', price: '$550', imgSrc: 'chair10.jpg' },
    { name: 'Chair 11', price: '$600', imgSrc: 'chair11.jpg' },
    { name: 'Chair 12', price: '$650', imgSrc: 'chair12.jpg' },
    { name: 'Chair 13', price: '$700', imgSrc: 'chair13.jpg' },
    { name: 'Chair 14', price: '$750', imgSrc: 'chair14.jpg' },
    { name: 'Chair 15', price: '$800', imgSrc: 'chair15.jpg' },
];

const Chair = () => {
    return (
        <div className="chair-container">
            {chairs.map((chair, index) => (
                <div key={index} className="chair-item">
                    <img src={chair.imgSrc} alt={chair.name} class="chair-image" />
                    <div className="chair-details">
                        <h3>{chair.name}</h3>
                        <p>{chair.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chair;
