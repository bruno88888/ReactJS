import './ContenedorTarjeta.css';
import Tarjeta from './Tarjeta';
import harry from './assets/Harry.webp';

function ContenedorTarjeta() {
    return (
        <div className="contenedor-tarjeta">
            <Tarjeta 
                titulo="Tarjeta 1" 
                descripcion="Aquí va la descripción de tu tarjeta"
                imagen={harry}
            />
            <Tarjeta 
                titulo="Tarjeta 2" 
                descripcion="Aquí va la descripción de tu tarjeta"
                imagen={harry}
            />
            <Tarjeta 
                titulo="Tarjeta 3" 
                descripcion="Aquí va la descripción de tu tarjeta"
                imagen={harry}
            />
            <Tarjeta 
                titulo="Tarjeta 4" 
                descripcion="Aquí va la descripción de tu tarjeta"
                imagen={harry}
            />
        </div>
    )
}

export default ContenedorTarjeta;