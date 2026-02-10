import {useState} from "react";
import ContenedorTarjeta from "./ContenedorTarjetas";
import Encabezado from "./Encabezado";
import Footer from "./Footer";
import ImagenEstatica from "./ImagenEstatica"; 

function App(){
  const[Vista, setVista] = useState("Inicio");
  return (
    <div>
      <Encabezado cambiarVista={setVista}/>
      <ContenedorTarjeta vista={Vista}/>
      {Vista === "Inicio" && <ImagenEstatica />}
      <Footer/>
    </div>
  );
}

export default App;
 