const InfoCards = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 fw-bold">
        Somos la mejor tienda online de elementos electrónicos recuperados!
      </h2>

      <section className="bg-light p-4 mb-4 rounded border-start border-4 border-primary shadow-sm">
        <h3 className="text-primary">¿Quiénes somos?</h3>
        <p className="text-muted fs-6">
          En Tech Solutions nos especializamos en la venta de productos electrónicos recuperados. 
          Todos nuestros equipos son rigurosamente testeados y reacondicionados por técnicos calificados, garantizando calidad a bajo costo.
        </p>
      </section>

      <section className="bg-light p-4 mb-4 rounded border-start border-4 border-success shadow-sm">
        <h3 className="text-success">¿Cómo comprar?</h3>
        <p className="text-muted fs-6">
          Elegí el producto que más te guste, hacé clic en “Agregar al carrito” y completá los pasos para finalizar tu compra. 
          Podés optar por envío a domicilio o retiro en nuestro local.
        </p>
      </section>

      <section className="bg-light p-4 mb-4 rounded border-start border-4 border-warning shadow-sm">
        <h3 className="text-warning">Formas de pago</h3>
        <ul className="text-muted fs-6">
          <li>Tarjetas de crédito y débito (Visa, Mastercard y American Express.)</li>
          <li>Transferencia bancaria</li>
          <li>MercadoPago</li>
        </ul>
      </section>
    </div>
  );
};

export default InfoCards;
