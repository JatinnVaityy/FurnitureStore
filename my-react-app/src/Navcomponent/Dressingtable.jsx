import React from 'react';
import './Dressingtable.css';

const dressingTables = [
    { name: 'Dressing Table 1', price: '$300', imgSrc: 'dressingtable1.jpg' },
    { name: 'Dressing Table 2', price: '$350', imgSrc: 'dressingtable2.jpg' },
    { name: 'Dressing Table 3', price: '$400', imgSrc: 'dressingtable3.jpg' },
    { name: 'Dressing Table 4', price: '$450', imgSrc: 'dressingtable4.jpg' },
    { name: 'Dressing Table 5', price: '$500', imgSrc: 'dressingtable5.jpg' },
    { name: 'Dressing Table 6', price: '$550', imgSrc: 'dressingtable6.jpg' },
    { name: 'Dressing Table 7', price: '$600', imgSrc: 'dressingtable7.jpg' },
    { name: 'Dressing Table 8', price: '$650', imgSrc: 'dressingtable8.jpg' },
    { name: 'Dressing Table 9', price: '$700', imgSrc: 'dressingtable9.jpg' },
    { name: 'Dressing Table 10', price: '$750', imgSrc: 'dressingtable10.jpg' },
    { name: 'Dressing Table 11', price: '$800', imgSrc: 'dressingtable11.jpg' },
    { name: 'Dressing Table 12', price: '$850', imgSrc: 'dressingtable12.jpg' },
    { name: 'Dressing Table 13', price: '$900', imgSrc: 'dressingtable13.jpg' },
    { name: 'Dressing Table 14', price: '$950', imgSrc: 'dressingtable14.jpg' },
    { name: 'Dressing Table 15', price: '$1000', imgSrc: 'dressingtable15.jpg' },
];

const DressingTable = () => {
    return (
        <div className="dressingtable-container">
            {dressingTables.map((dressingTable, index) => (
                <div key={index} className="dressingtable-item">
                    <img src={dressingTable.imgSrc} alt={dressingTable.name} class="dressingtable-image" />
                    <div className="dressingtable-details">
                        <h3>{dressingTable.name}</h3>
                        <p>{dressingTable.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DressingTable;
