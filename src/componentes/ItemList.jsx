import React from 'react';
import Item from './Item';

const ItemList = ({ data }) => {
  return (
    <div className="container my-6"> {/* Igual que InfoCards */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        {data.map((prod) => (
          <Item key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
