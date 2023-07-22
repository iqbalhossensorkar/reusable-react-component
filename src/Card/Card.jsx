// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import CardList from './CardList';

const Card = () => {
    const [item, setItem] = useState([])
    useEffect( () => {
        fetch('fake.json').then(res => res.json()).then(data => setItem(data)).catch(error => console.log(error))
    }, [])
  return (
    <div className="item-card-list">
      {item.map((item, index) => (
        <CardList key={index} imageUrl={item.imageUrl} description={item.description} />
      ))}
    </div>
  );
};

export default Card;
