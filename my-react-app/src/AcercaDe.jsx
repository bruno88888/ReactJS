import './AcercaDe.css';
import harryImg from './assets/Harry.webp';

function AcercaDe() {
    return (
        <div className="acerca-container">
            <div className="acerca-hero">
                <img src={harryImg} alt="Harry Styles" />
            </div>

            <div className="acerca-content">
                <h2 className="acerca-title">Acerca de Harry Styles</h2>
                <p>
                    Harry Styles es un cantante, compositor y actor inglés, conocido por su carrera como miembro de One Direction y por su trabajo como solista.
                    Aquí encontrarás información sobre su música, giras, y la tienda oficial de merch.
                </p>
                <p>
                    Nuestra web celebra su trayectoria y ofrece productos oficiales en la sección de Productos y en nuestras sucursales.
                </p>
            </div>
        </div>
    );
}

export default AcercaDe;