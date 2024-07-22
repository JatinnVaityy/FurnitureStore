import React from 'react';
import './Bed.css';

const beds = [
    { name: 'Bed 1', price: '$400', imgSrc: 'bed1.jpg' },
    { name: 'Bed 2', price: '$450', imgSrc: 'bed2.jpg' },
    { name: 'Bed 3', price: '$500', imgSrc: 'bed3.jpg' },
    { name: 'Bed 4', price: '$550', imgSrc: 'bed4.jpg' },
    { name: 'Bed 5', price: '$600', imgSrc: 'bed5.jpg' },
    { name: 'Bed 6', price: '$650', imgSrc: 'bed6.jpg' },
    { name: 'Bed 7', price: '$700', imgSrc: 'bed7.jpg' },
    { name: 'Bed 8', price: '$750', imgSrc: 'bed8.jpg' },
    { name: 'Bed 9', price: '$800', imgSrc: 'bed9.jpg' },
    { name: 'Bed 10', price: '$850', imgSrc: 'bed10.jpg' },
    { name: 'Bed 11', price: '$900', imgSrc: 'bed11.jpg' },
    { name: 'Bed 12', price: '$950', imgSrc: 'bed12.jpg' },
    { name: 'Bed 13', price: '$1000', imgSrc: 'bed13.jpg' },
    { name: 'Bed 14', price: '$1050', imgSrc: 'bed14.jpg' },
    { name: 'Bed 15', price: '$1100', imgSrc: 'bed15.jpg' },
];

const Bed = () => {
    return (
        <div className="bed-container">
            {beds.map((bed, index) => (
                <div key={index} className="bed-item">
                    <img src={bed.imgSrc} alt={bed.name} className="bed-image" />
                    <div className="bed-details">
                        <h3>{bed.name}</h3>
                        <p>{bed.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Bed;
