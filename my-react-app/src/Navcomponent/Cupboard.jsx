import React from 'react';
import './Cupboard.css';

const cupboards = [
    { name: 'Cupboard 1', price: '$200', imgSrc: 'cupboard1.jpg' },
    { name: 'Cupboard 2', price: '$300', imgSrc: 'cupboard2.jpg' },
    { name: 'Cupboard 3', price: '$250', imgSrc: 'cupboard3.jpg' },
    { name: 'Cupboard 4', price: '$350', imgSrc: 'cupboard4.jpg' },
    { name: 'Cupboard 5', price: '$400', imgSrc: 'cupboard5.jpg' },
    { name: 'Cupboard 6', price: '$450', imgSrc: 'cupboard6.jpg' },
    { name: 'Cupboard 7', price: '$500', imgSrc: 'cupboard7.jpg' },
    { name: 'Cupboard 8', price: '$550', imgSrc: 'cupboard8.jpg' },
    { name: 'Cupboard 9', price: '$600', imgSrc: 'cupboard9.jpg' },
    { name: 'Cupboard 10', price: '$650', imgSrc: 'cupboard10.jpg' },
    { name: 'Cupboard 11', price: '$700', imgSrc: 'cupboard11.jpg' },
    { name: 'Cupboard 12', price: '$750', imgSrc: 'cupboard12.jpg' },
    { name: 'Cupboard 13', price: '$800', imgSrc: 'cupboard13.jpg' },
    { name: 'Cupboard 14', price: '$850', imgSrc: 'cupboard14.jpg' },
    { name: 'Cupboard 15', price: '$900', imgSrc: 'cupboard15.jpg' },
];

const Cupboard = () => {
    return (
        <div className="cupboard-container">
            {cupboards.map((cupboard, index) => (
                <div key={index} className="cupboard-item">
                    <img src={cupboard.imgSrc} alt={cupboard.name} className="cupboard-image" />
                    <div className="cupboard-details">
                        <h3>{cupboard.name}</h3>
                        <p>{cupboard.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cupboard;
