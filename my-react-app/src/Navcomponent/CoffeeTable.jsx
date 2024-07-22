import React from 'react';
import './CoffeeTable.css';

const coffeeTables = [
    { name: 'Coffee Table 1', price: '$100', imgSrc: 'coffeeTable1.jpg' },
    { name: 'Coffee Table 2', price: '$200', imgSrc: 'coffeeTable2.jpg' },
    { name: 'Coffee Table 3', price: '$150', imgSrc: 'coffeeTable3.jpg' },
    { name: 'Coffee Table 4', price: '$250', imgSrc: 'coffeeTable4.jpg' },
    { name: 'Coffee Table 5', price: '$300', imgSrc: 'coffeeTable5.jpg' },
    { name: 'Coffee Table 6', price: '$350', imgSrc: 'coffeeTable6.jpg' },
    { name: 'Coffee Table 7', price: '$400', imgSrc: 'coffeeTable7.jpg' },
    { name: 'Coffee Table 8', price: '$450', imgSrc: 'coffeeTable8.jpg' },
    { name: 'Coffee Table 9', price: '$500', imgSrc: 'coffeeTable9.jpg' },
    { name: 'Coffee Table 10', price: '$550', imgSrc: 'coffeeTable10.jpg' },
    { name: 'Coffee Table 11', price: '$600', imgSrc: 'coffeeTable11.jpg' },
    { name: 'Coffee Table 12', price: '$650', imgSrc: 'coffeeTable12.jpg' },
    { name: 'Coffee Table 13', price: '$700', imgSrc: 'coffeeTable13.jpg' },
    { name: 'Coffee Table 14', price: '$750', imgSrc: 'coffeeTable14.jpg' },
    { name: 'Coffee Table 15', price: '$800', imgSrc: 'coffeeTable15.jpg' },
];

const CoffeeTable = () => {
    return (
        <div className="coffeeTable-container">
            {coffeeTables.map((coffeeTable, index) => (
                <div key={index} className="coffeeTable-item">
                    <img src={coffeeTable.imgSrc} alt={coffeeTable.name} className="coffeeTable-image" />
                    <div className="coffeeTable-details">
                        <h3>{coffeeTable.name}</h3>
                        <p>{coffeeTable.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CoffeeTable;
