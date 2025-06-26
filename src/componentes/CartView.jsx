import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartView = () => {
  const { cart, clear, removeItem } = useContext(CartContext);

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <h2 className="mb-4">Tu carrito 🛒</h2>

        <div>
          {cart.map((compra) => (
            <div key={compra.id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem 0',
              borderBottom: '1px solid #eee',
              flexWrap: 'wrap'
            }}>
              <img src={compra.img} alt={compra.nombre} style={{ width: '8rem', objectFit: 'contain' }} />
              <span style={{ flex: 1, marginLeft: '1rem' }}>{compra.nombre}</span>
              <span>${compra.precio},00</span>
              <span>x{compra.quantity}</span>
              <span className="fw-bold">= ${compra.precio * compra.quantity},00</span>
              <button className="btn btn-danger ms-2" onClick={() => removeItem(compra.id)}>X</button>
            </div>
          ))}
        </div>

        <hr />

        <div className="mt-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="fw-bold">Total a pagar: $</span>
          <div>
            <button className='btn btn-danger me-2' onClick={clear}>Vaciar carrito</button>
            <button className='btn btn-success'>Terminar Compra</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
