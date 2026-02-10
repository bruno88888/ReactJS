import miLogo from './assets/Logo.png';
import instagram from './assets/instagram.png';
import facebook from './assets/facebook.png';
import pinterest from './assets/pinterest.png';
import youtube from './assets/youtube.png';
import './Encabezado.css';
function Encabezado({cambiarVista}){
    return(
        <div className="Encabezado">  
         <Logo />
         <Menu cambiarVista={cambiarVista}/>
         <Redes />
        </div>
    );
}

function Logo(){
    return(
        <div className="logoDiv">
            <img src={miLogo} alt="ReactLogo" />
        </div>
    );
}

function Menu({cambiarVista}){
    return(
        <div className='menuDiv'>
            <ul>
                <li><button onClick={() => cambiarVista("Inicio")}>Inicio</button></li>
                <li><button onClick={() => cambiarVista("Productos")}>Productos</button></li>
                <li><button onClick={() => cambiarVista("Acerca de")}>Acerca de</button></li>
                <li><button onClick={() => cambiarVista("Servicios")}>Servicios</button></li>
                <li><button onClick={() => cambiarVista("Contactanos")}>Contactos</button></li>
            </ul>
        </div>
    );
}

function Redes(){
    return(
        <div className='redesDiv'>   
              <li><a href="#"><img src={pinterest} alt="ReactPinterest" /></a></li> 
              <li><a href="#"><img src={instagram} alt="ReactInstagram" /></a></li>
              <li><a href="#"><img src={facebook} alt="ReactFacebook" /></a></li>
              <li><a href="#"><img src={youtube} alt="ReactYoutube" /></a></li>
        </div>
    )
}

export default Encabezado
