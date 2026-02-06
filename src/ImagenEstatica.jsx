import './ImagenEstatica.css';
import defaultImage from './assets/Harry.webp'; // fallback local image

function ImagenEstatica({ imagen, titulo }) {
    const src = imagen || defaultImage;
    return (
        <div className="imagen-estatica">
            <img src={src} alt="Imagen estática" className="imagen-estatica__img" />
            <div className="imagen-estatica__overlay">
                <h1>{titulo}</h1>
                
            </div>
        </div>
    )
}

export default ImagenEstatica;
