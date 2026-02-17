//34.08615384975846, -118.37175876970554
import { useEffect, useState } from "react";
import './Clima.css';
function Clima(){
    const [clima, setClima] = useState(null);
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
    console.log("API_KEY: ", API_KEY);
    const lat = 34.08615384975846
    const lng = -118.37175876970554

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=es`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setClima(data);
        })
        .catch((error)=> console.error("Error: ",error));

    },[])

    return (
        <div className="divClima">
            {
                clima? (
                    <>
                    <p>{clima.name} Temp: {clima.main.temp}°C | Hum: {clima.main.humidity}%</p>
                    <p>Descripcion: {clima.weather[0].description}</p>
                    </>
                ):(
                    <p>Cargando...</p>
                )
            }

        </div>
    )
}

export default Clima