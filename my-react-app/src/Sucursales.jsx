import './Sucursales.css';
import cdmxImg from './assets/cdmx.jpg';
import merchImg from './assets/merch.jpg';
import pueblaImg from './assets/puebla.jpg';
import monterreyImg from './assets/monterrey.jpg';
import veracruzImg from './assets/veracruz.jpg';
import pachucaImg from './assets/pachuca.jpg';

function Sucursales() {
    return (
        <div className="sucursales-container">
            <h2 className="sucursales-title">Sucursales</h2>
            <p className="sucursales-intro">
                Encuentra nuestras sucursales y la tienda oficial de merch.
            </p>

            <div className="sucursales-grid">

                <div className="sucursal-card">
                    <img src={cdmxImg} alt="Sucursal México" className="sucursal-img" />
                    <h3>México (Sucursal central)</h3>
                    <p>Dirección: Av. Reforma 123, Ciudad de México</p>
                    <p>Horario: Lun-Sáb 10:00 - 20:00</p>
                </div>

                <div className="sucursal-card">
                    <img src={merchImg} alt="Tienda Merch" className="sucursal-img" />
                    <h3>Tienda Merch</h3>
                    <p>Merch oficial de Harry Styles — camisetas, posters y más.</p>
                    <p>Compra en línea o en sucursales seleccionadas.</p>
                </div>

                <div className="sucursal-card">
                    <img src={pueblaImg} alt="Sucursal Puebla" className="sucursal-img" />
                    <h3>Puebla</h3>
                    <p>Dirección: Blvd. Héroes 45, Puebla</p>
                </div>

                <div className="sucursal-card">
                    <img src={monterreyImg} alt="Sucursal Monterrey" className="sucursal-img" />
                    <h3>Monterrey</h3>
                    <p>Dirección: Av. Constitución 678, Monterrey</p>
                </div>

                <div className="sucursal-card">
                    <img src={veracruzImg} alt="Sucursal Veracruz" className="sucursal-img" />
                    <h3>Veracruz</h3>
                    <p>Dirección: Calle Mar 90, Veracruz</p>
                </div>

                <div className="sucursal-card">
                    <img src={pachucaImg} alt="Sucursal Pachuca" className="sucursal-img" />
                    <h3>Pachuca</h3>
                    <p>Dirección: Plaza Hidalgo 10, Pachuca</p>
                </div>

            </div>
        </div>
    );
}

export default Sucursales;
