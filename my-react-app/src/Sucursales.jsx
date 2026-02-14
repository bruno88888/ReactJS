import './Sucursales.css';
import laImg from './assets/pleasing-la.jpeg';
import nyImg from './assets/pleasing-ny.jpeg';
import londonImg from './assets/pleasing-london.jpeg';

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapStyle = {
  width: "100%",
  height: "200px",
  borderRadius: "10px",
  marginTop: "12px"
};

const tiendas = [
  {
    ciudad: "Los Angeles",
    direccion: "West Hollywood, California",
    coords: { lat: 34.0900, lng: -118.3617 },
    img: laImg
  },
  {
    ciudad: "New York",
    direccion: "Manhattan, New York",
    coords: { lat: 40.7831, lng: -73.9712 },
    img: nyImg
  },
  {
    ciudad: "London",
    direccion: "Covent Garden, London",
    coords: { lat: 51.5115, lng: -0.1235 },
    img: londonImg
  }
];

function Sucursales() {
  return (
    <div className="sucursales-container">
      <h2 className="sucursales-title">
        Tiendas Oficiales de Pleasing
      </h2>

      <p className="sucursales-intro">
        Explora las ubicaciones oficiales de la marca creada por Harry Styles.
      </p>

      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <div className="sucursales-grid">
          {tiendas.map((tienda, index) => (
            <div className="sucursal-card" key={index}>
              <img
                src={tienda.img}
                alt={tienda.ciudad}
                className="sucursal-img"
              />
              <h3>{tienda.ciudad}</h3>
              <p>Ubicación: {tienda.direccion}</p>

              {/* MAPA INDIVIDUAL */}
              <GoogleMap
                mapContainerStyle={mapStyle}
                center={tienda.coords}
                zoom={15}
              >
                <Marker position={tienda.coords} />
              </GoogleMap>
            </div>
          ))}
        </div>
      </LoadScript>
    </div>
  );
}

export default Sucursales;
