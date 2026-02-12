import './Servicios.css';

function Servicios() {
    return (
        <div className="servicios-container">
            <h2 className="section-title">Servicios</h2>

            <div className="servicios-list">
                <div className="servicio-card">
                    <h3>Venta de Merch</h3>
                    <p>Atención en tienda y venta en línea de productos oficiales.</p>
                </div>

                <div className="servicio-card">
                    <h3>Soporte de fans</h3>
                    <p>Resolvemos dudas sobre pedidos, devoluciones y envíos.</p>
                </div>

                <div className="servicio-card">
                    <h3>Eventos y Meet & Greet</h3>
                    <p>Información sobre eventos exclusivos y acceso a meet & greet.</p>
                </div>
            </div>
        </div>
    );
}

export default Servicios;