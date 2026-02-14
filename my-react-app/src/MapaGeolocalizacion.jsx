import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '20px'
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
            () => {
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
                    zoom={17}
                    options={{
                        disableDefaultUI: true,
                        zoomControl: true,
                    }}
                >
                    <Marker
                        position={ubicacion}
                        icon={{
                            path: window.google.maps.SymbolPath.CIRCLE,
                            scale: 10,
                            fillColor: "#ff3b3b",
                            fillOpacity: 1,
                            strokeColor: "#ffffff",
                            strokeWeight: 3,
                        }}
                    />
                </GoogleMap>
            )}
        </LoadScript>
    );
}

export default MapaGeolocalizacion;
