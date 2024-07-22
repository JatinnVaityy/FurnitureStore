import React from 'react';
import './Stool.css';

const stools = [
    { name: 'Stool 1', price: '$50', imgSrc: 'stool1.jpg' },
    { name: 'Stool 2', price: '$60', imgSrc: 'stool2.jpg' },
    { name: 'Stool 3', price: '$70', imgSrc: 'stool3.jpg' },
    { name: 'Stool 4', price: '$80', imgSrc: 'stool4.jpg' },
    { name: 'Stool 5', price: '$90', imgSrc: 'stool5.jpg' },
    { name: 'Stool 6', price: '$100', imgSrc: 'stool6.jpg' },
    { name: 'Stool 7', price: '$110', imgSrc: 'stool7.jpg' },
    { name: 'Stool 8', price: '$120', imgSrc: 'stool8.jpg' },
    { name: 'Stool 9', price: '$130', imgSrc: 'stool9.jpg' },
    { name: 'Stool 10', price: '$140', imgSrc: 'stool10.jpg' },
    { name: 'Stool 11', price: '$150', imgSrc: 'stool11.jpg' },
    { name: 'Stool 12', price: '$160', imgSrc: 'stool12.jpg' },
    { name: 'Stool 13', price: '$170', imgSrc: 'stool13.jpg' },
    { name: 'Stool 14', price: '$180', imgSrc: 'stool14.jpg' },
    { name: 'Stool 15', price: '$190', imgSrc: 'stool15.jpg' },
];

const Stools = () => {
    return (
        <div className="stool-container">
            {stools.map((stool, index) => (
                <div key={index} className="stool-item">
                    <img src={stool.imgSrc} alt={stool.name} className="stool-image" />
                    <div className="stool-details">
                        <h3>{stool.name}</h3>
                        <p>{stool.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Stools;
