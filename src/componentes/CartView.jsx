import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
  const { cart, clear, removeItem, cartTotal } = useContext(CartContext);
   const preConfirm = () =>{
          Swal.fire({
              title:'¿Va a eliminar los prodcutos del carrito, está seguro de hacerlo?',
              showDenyButton:true,
              denyButtonText:'No',
              confirmButtonText:'Si'
          }).then((result)=>{
              if(result.isConfirmed){
                  clear()
              }
          })
      }

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
          <span className="fw-bold">Total a pagar: ${cartTotal()}</span>
          <div>
            <button className='btn btn-danger me-2' onClick={preConfirm}>Vaciar carrito</button>
            <Link className='btn btn-success' to='/checkout'>Terminar Compra</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
