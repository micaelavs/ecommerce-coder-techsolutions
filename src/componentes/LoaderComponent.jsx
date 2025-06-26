import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoaderComponent = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '85vh' }}>
      <Spinner animation="border" variant="primary" role="status" style={{ width: '4rem', height: '4rem' }} />
      <p className="mt-3 text-muted" style={{ animation: 'pulse 1.5s infinite' }}>Cargando...</p>
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default LoaderComponent;
