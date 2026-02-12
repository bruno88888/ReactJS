import './Sucursales.css';

function Sucursales() {
    return (
        <div className="sucursales-container">
            <h2 className="sucursales-title">Sucursales</h2>
            <p className="sucursales-intro">Encuentra nuestras sucursales y la tienda oficial de merch.</p>

            <div className="sucursales-grid">
                <div className="sucursal-card">
                    <h3>México (Sucursal central)</h3>
                    <p>Dirección: Av. Reforma 123, Ciudad de México</p>
                    <p>Horario: Lun-Sáb 10:00 - 20:00</p>
                </div>

                <div className="sucursal-card">
                    <h3>Tienda Merch</h3>
                    <p>Merch oficial de Harry Styles — camisetas, posters y más.</p>
                    <p>Compra en línea o en sucursales seleccionadas.</p>
                </div>

                <div className="sucursal-card">
                    <h3>Puebla</h3>
                    <p>Dirección: Blvd. Héroes 45, Puebla</p>
                </div>

                <div className="sucursal-card">
                    <h3>Monterrey</h3>
                    <p>Dirección: Av. Constitución 678, Monterrey</p>
                </div>

                <div className="sucursal-card">
                    <h3>Veracruz</h3>
                    <p>Dirección: Calle Mar 90, Veracruz</p>
                </div>

                <div className="sucursal-card">
                    <h3>Pachuca</h3>
                    <p>Dirección: Plaza Hidalgo 10, Pachuca</p>
                </div>
            </div>
        </div>
    );
}

export default Sucursales;
