import React from 'react';

const ItemDetail = ({ detalle }) => {
  if (!detalle) return null;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '1.5rem' }}>
      <div style={{
        maxWidth: '480px', // ✅ reducido de 600px
        width: '100%',
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '1rem', // ✅ menos padding
        boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
        textAlign: 'center',
        backgroundColor: '#fff'
      }}>
        <h3 style={{ color: '#007b5e', marginBottom: '1rem', fontSize: '1.5rem' }}>
          {detalle.nombre}
        </h3>

        <a href={detalle.img} target="_blank" rel="noopener noreferrer">
          <img
            src={detalle.img}
            alt={detalle.nombre}
            style={{
              width: '100%',
              maxHeight: '250px',
              objectFit: 'cover',
              borderRadius: '6px',
              marginBottom: '1rem',
              cursor: 'zoom-in'
            }}
          />
        </a>

        <p style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#444' }}>
          {detalle.descripcion}
        </p>

        <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}>
          Precio: ${detalle.precio},00
        </p>

        <p style={{ color: detalle.stock > 0 ? 'green' : 'red', fontWeight: '500' }}>
          Stock disponible: {detalle.stock}
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
