import miLogo from './assets/Logo.png';
import instagram from './assets/instagram.png';
import facebook from './assets/facebook.png';
import pinterest from './assets/pinterest.png';
import youtube from './assets/youtube.png';
import './Encabezado.css';
function Encabezado(){
    return(
        <div className="Encabezado">  
         <Logo />
         <Menu />
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

function Menu(){
    return(
        <div className='menuDiv'>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#acerca-de">Acerca de</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#contactos">Contactos</a></li>
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
