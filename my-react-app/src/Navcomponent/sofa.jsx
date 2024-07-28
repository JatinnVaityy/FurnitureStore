import React from 'react';
import './sofa.css';

const sofas = [
    { name: 'Sofa 1', price: '$300', imgSrc: 'sofa1.jpg' },
    { name: 'Sofa 2', price: '$400', imgSrc: 'sofa2.jpg' },
    { name: 'Sofa 3', price: '$350', imgSrc: 'sofa3.jpg' },
    { name: 'Sofa 4', price: '$450', imgSrc: 'sofa4.jpg' },
    { name: 'Sofa 5', price: '$500', imgSrc: 'sofa5.jpg' },
    { name: 'Sofa 6', price: '$600', imgSrc: 'sofa6.jpg' },
    { name: 'Sofa 7', price: '$700', imgSrc: 'sofa7.jpg' },
    { name: 'Sofa 8', price: '$800', imgSrc: 'sofa8.jpg' },
    { name: 'Sofa 9', price: '$900', imgSrc: 'sofa9.jpg' },
    { name: 'Sofa 10', price: '$1000', imgSrc: 'sofa10.jpg' },
    { name: 'Sofa 11', price: '$1100', imgSrc: 'sofa11.jpg' },
    { name: 'Sofa 12', price: '$1200', imgSrc: 'sofa12.jpg' },
    { name: 'Sofa 13', price: '$1300', imgSrc: 'sofa13.jpg' },
    { name: 'Sofa 14', price: '$1400', imgSrc: 'sofa14.jpg' },
    { name: 'Sofa 15', price: '$1500', imgSrc: 'sofa15.jpg' },
];

const Sofa = () => {
    return (
        <div className="sofa-container">
            {sofas.map((sofa, index) => (
                <div key={index} className="sofa-item">
                    <img src={sofa.imgSrc} alt={sofa.name} class="sofa-image" />
                    <div className="sofa-details">
                        <h3>{sofa.name}</h3>
                        <p>{sofa.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sofa;
