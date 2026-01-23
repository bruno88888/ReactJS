import miLogo from './assets/Logo.png';
import instagram from './assets/instagram.png';
import facebook from './assets/facebook.png';
import pinterest from './assets/pinterest.png';
import youtube from './assets/youtube.png';
import './Encabezado.css';
function Encabezado(){
    return(
        <div >  
         <Logo />
         <Menu />
         <Redes />
         <h2>Dios mio, mataron a kenny</h2>
        </div>
    );
}

function Logo(){
    return(
        <div>
            <img src={miLogo} alt="ReactLogo" />
        </div>
    );
}

function Menu(){
    return(
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contactos</li>
            </ul>
        </nav>
    );
}

function Redes(){
    return(
        <nav>   
              <li><img src={pinterest} alt="ReactPinterest" /></li>
              <li><img src={instagram} alt="ReactInstagram" /></li>
              <li><img src={facebook} alt="ReactFacebook" /></li>
              <li><img src={youtube} alt="ReactYoutube" /></li>
        </nav>
    )
}

export default Encabezado
