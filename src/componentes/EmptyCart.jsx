import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-5 border rounded shadow text-center bg-white" style={{ maxWidth: '400px' }}>
        <h2 className="mb-4 text-danger">¡Tu carrito está vacío! 🛒</h2>
        <h4 className="text-muted mb-4">Te invitamos a ver nuestros productos</h4>
        <Link className="btn btn-outline-primary" to="/">
          Ir a Home
        </Link>
      </div>
    </div>
  )
}

export default EmptyCart