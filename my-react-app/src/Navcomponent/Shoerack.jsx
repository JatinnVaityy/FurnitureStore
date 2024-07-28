import React from 'react';
import './Shoerack.css';

const shoeRacks = [
    { name: 'Shoerack 1', price: '$100', imgSrc: 'shoerack1.jpg' },
    { name: 'Shoerack 2', price: '$150', imgSrc: 'shoerack2.jpg' },
    { name: 'Shoerack 3', price: '$200', imgSrc: 'shoerack3.jpg' },
    { name: 'Shoerack 4', price: '$250', imgSrc: 'shoerack4.jpg' },
    { name: 'Shoerack 5', price: '$300', imgSrc: 'shoerack5.jpg' },
    { name: 'Shoerack 6', price: '$350', imgSrc: 'shoerack6.jpg' },
    { name: 'Shoerack 7', price: '$400', imgSrc: 'shoerack7.jpg' },
    { name: 'Shoerack 8', price: '$450', imgSrc: 'shoerack8.jpg' },
    { name: 'Shoerack 9', price: '$500', imgSrc: 'shoerack9.jpg' },
    { name: 'Shoerack 10', price: '$550', imgSrc: 'shoerack10.jpg' },
    { name: 'Shoerack 11', price: '$600', imgSrc: 'shoerack11.jpg' },
    { name: 'Shoerack 12', price: '$650', imgSrc: 'shoerack12.jpg' },
    { name: 'Shoerack 13', price: '$700', imgSrc: 'shoerack13.jpg' },
    { name: 'Shoerack 14', price: '$750', imgSrc: 'shoerack14.jpg' },
    { name: 'Shoerack 15', price: '$800', imgSrc: 'shoerack15.jpg' },
];

const Shoerack = () => {
    return (
        <div className="shoerack-container">
            {shoeRacks.map((shoerack, index) => (
                <div key={index} className="shoerack-item">
                    <img src={shoerack.imgSrc} alt={shoerack.name} class="shoerack-image" />
                    <div className="shoerack-details">
                        <h3>{shoerack.name}</h3>
                        <p>{shoerack.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shoerack;
