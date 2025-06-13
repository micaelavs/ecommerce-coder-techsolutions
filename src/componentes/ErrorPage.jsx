import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <h2>La página solicitada, no existe! 😱</h2>
        <Link to='/' className='btn btn-dark'>Volver a Home</Link>
    </div>
  )
}

export default ErrorPage