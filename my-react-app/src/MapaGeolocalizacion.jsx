import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: '100%',
    height: '350px'
};

function MapaGeolocalizacion() {
    const [ubicacion, setUbicacion] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocalización no soportada por el navegador.');
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUbicacion({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            },
            (error) => {
                console.error(error);
                setError('No se pudo obtener la ubicación.');
            },
            { enableHighAccuracy: true }
        );
    }, []);

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            {error && <div>{error}</div>}
            {!ubicacion && !error && <div>Cargando mapa...</div>}
            {ubicacion && (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={ubicacion}
                    zoom={16}
                >
                    <Marker position={ubicacion} />
                </GoogleMap>
            )}
        </LoadScript>
    );
}

export default MapaGeolocalizacion;
