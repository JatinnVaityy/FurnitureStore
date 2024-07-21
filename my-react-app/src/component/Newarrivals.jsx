import React from 'react';
import './Newarrivals.css';

const newArrivals = [
  { id: 1, image: '/images/furniture1.jpeg', name: 'Sofa', price: '$200' },
  { id: 2, image: '/images/furniture2.jpeg', name: 'Chair', price: '$100' },
  { id: 3, image: '/images/furniture3.jpeg', name: 'Table', price: '$150' },
  { id: 4, image: '/images/furniture4.jpeg', name: 'Lamp', price: '$50' },
  { id: 5, image: '/images/furniture5.jpeg', name: 'Bed', price: '$300' },
  { id: 6, image: '/images/furniture6.jpeg', name: 'Cabinet', price: '$250' },
];

function Newarrivals() {
  return (
    <div className="new-arrivals">
      <h2>New Arrivals</h2>
      <div className="arrivals-grid">
        {newArrivals.map(item => (
          <div key={item.id} className="arrival-item">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-btn">View All</button>
    </div>
  );
}

export default Newarrivals;
