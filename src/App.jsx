import {useState} from "react";
import ContenedorTarjeta from "./ContenedorTarjetas";
import Encabezado from "./Encabezado";
import Footer from "./Footer";
import ImagenEstatica from "./ImagenEstatica";

function App(){
  const [vista, setVista] = useState('Inicio');
  return (
  <div>
    <Encabezado cambiarVista={setVista} />
    <ContenedorTarjeta vista={vista} />
    <ImagenEstatica/>
    <Footer />
    </div>
  )
}

export default App
