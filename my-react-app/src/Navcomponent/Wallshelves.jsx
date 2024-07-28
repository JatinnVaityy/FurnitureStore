import React from 'react';
import './Wallshelves.css';

const wallShelves = [
    { name: 'Wall Shelf 1', price: '$150', imgSrc: 'wallshelf1.jpg' },
    { name: 'Wall Shelf 2', price: '$200', imgSrc: 'wallshelf2.jpg' },
    { name: 'Wall Shelf 3', price: '$250', imgSrc: 'wallshelf3.jpg' },
    { name: 'Wall Shelf 4', price: '$300', imgSrc: 'wallshelf4.jpg' },
    { name: 'Wall Shelf 5', price: '$350', imgSrc: 'wallshelf5.jpg' },
    { name: 'Wall Shelf 6', price: '$400', imgSrc: 'wallshelf6.jpg' },
    { name: 'Wall Shelf 7', price: '$450', imgSrc: 'wallshelf7.jpg' },
    { name: 'Wall Shelf 8', price: '$500', imgSrc: 'wallshelf8.jpg' },
    { name: 'Wall Shelf 9', price: '$550', imgSrc: 'wallshelf9.jpg' },
    { name: 'Wall Shelf 10', price: '$600', imgSrc: 'wallshelf10.jpg' },
    { name: 'Wall Shelf 11', price: '$650', imgSrc: 'wallshelf11.jpg' },
    { name: 'Wall Shelf 12', price: '$700', imgSrc: 'wallshelf12.jpg' },
    { name: 'Wall Shelf 13', price: '$750', imgSrc: 'wallshelf13.jpg' },
    { name: 'Wall Shelf 14', price: '$800', imgSrc: 'wallshelf14.jpg' },
    { name: 'Wall Shelf 15', price: '$850', imgSrc: 'wallshelf15.jpg' },
];

const Wallshelves = () => {
    return (
        <div className="wallshelves-container">
            {wallShelves.map((wallshelf, index) => (
                <div key={index} className="wallshelves-item">
                    <img src={wallshelf.imgSrc} alt={wallshelf.name} class="wallshelves-image" />
                    <div className="wallshelves-details">
                        <h3>{wallshelf.name}</h3>
                        <p>{wallshelf.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Wallshelves;
