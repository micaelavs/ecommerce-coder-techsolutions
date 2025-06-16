import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-2">
      <div className="p-5 border rounded shadow text-center bg-white" style={{ maxWidth: '400px' }}>
        <h2 className="mb-4 text-danger">¡Página no encontrada! 😱</h2>
        <p className="text-muted mb-4">La URL que estás buscando no existe o ha sido movida.</p>
        <Link to="/" className="btn btn-outline-primary">
          Volver al Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
