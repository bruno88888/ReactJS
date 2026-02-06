import miLogo from './assets/Logo.png';
import instagram from './assets/instagram.png';
import facebook from './assets/facebook.png';
import pinterest from './assets/pinterest.png';
import youtube from './assets/youtube.png';
import PropTypes from 'prop-types';
import './Encabezado.css';

function Encabezado({ cambiarVista }){
    return(
        <div className="Encabezado">  
         <Logo />
         <Menu cambiarVista={cambiarVista} />
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

function Menu({cambiarVista }){
    return(
        <div className='menuDiv'>
            <ul>
                <li onClick={() => cambiarVista('Inicio')}>Inicio</li>
                <li onClick={() => cambiarVista('Productos')}>Productos</li>
                <li onClick={() => cambiarVista('Acerca de')}>Acerca de</li>
                <li onClick={() => cambiarVista('Servicios')}>Servicios</li>
                <li onClick={() => cambiarVista('Contactos')}>Contactos</li>
                <li onClick={() => cambiarVista('Galeria')}>Galeria</li>
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
Menu.propTypes = {
    cambiarVista: PropTypes.func.isRequired
};

Encabezado.propTypes = {
    cambiarVista: PropTypes.func.isRequired
};


export default Encabezado
