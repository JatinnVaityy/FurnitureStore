import React from 'react';
import './SideTable.css';

const sideTables = [
    { name: 'Side Table 1', price: '$100', imgSrc: 'sideTable1.jpg' },
    { name: 'Side Table 2', price: '$200', imgSrc: 'sideTable2.jpg' },
    { name: 'Side Table 3', price: '$150', imgSrc: 'sideTable3.jpg' },
    { name: 'Side Table 4', price: '$250', imgSrc: 'sideTable4.jpg' },
    { name: 'Side Table 5', price: '$300', imgSrc: 'sideTable5.jpg' },
    { name: 'Side Table 6', price: '$350', imgSrc: 'sideTable6.jpg' },
    { name: 'Side Table 7', price: '$400', imgSrc: 'sideTable7.jpg' },
    { name: 'Side Table 8', price: '$450', imgSrc: 'sideTable8.jpg' },
    { name: 'Side Table 9', price: '$500', imgSrc: 'sideTable9.jpg' },
    { name: 'Side Table 10', price: '$550', imgSrc: 'sideTable10.jpg' },
    { name: 'Side Table 11', price: '$600', imgSrc: 'sideTable11.jpg' },
    { name: 'Side Table 12', price: '$650', imgSrc: 'sideTable12.jpg' },
    { name: 'Side Table 13', price: '$700', imgSrc: 'sideTable13.jpg' },
    { name: 'Side Table 14', price: '$750', imgSrc: 'sideTable14.jpg' },
    { name: 'Side Table 15', price: '$800', imgSrc: 'sideTable15.jpg' },
];

const SideTable = () => {
    return (
        <div className="sideTable-container">
            {sideTables.map((sideTable, index) => (
                <div key={index} className="sideTable-item">
                    <img src={sideTable.imgSrc} alt={sideTable.name} className="sideTable-image" />
                    <div className="sideTable-details">
                        <h3>{sideTable.name}</h3>
                        <p>{sideTable.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SideTable;
