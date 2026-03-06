import {useState} from "react";
import ContenedorTarjeta from "./ContenedorTarjetas";
import Encabezado from "./Encabezado";
import Footer from "./Footer";
import ImagenEstatica from "./ImagenEstatica"; 
import { AuthProvider } from "./AuthContext";

function App(){
  const[Vista, setVista] = useState("Inicio");
  return (
    <div>
      <AuthProvider>
      <Encabezado cambiarVista={setVista}/>
      <ContenedorTarjeta vista={Vista}/>
      </AuthProvider>
      {Vista === "Inicio" && <ImagenEstatica />}
      <Footer/>
    </div>
  );
}

export default App;
 