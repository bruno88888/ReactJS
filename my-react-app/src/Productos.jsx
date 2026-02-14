import polishImage from "./assets/polishPleasing.avif"
import vinylHHImage from "./assets/vinylHarrysHouse.jpg"
import HS1Image from "./assets/HS1.jpg"
import finelineImage from './assets/finelineVinyl.webp'
import sudaderaConejosImage from './assets/sudaderaConejos.jpg'
import sudaderaHarryImage from './assets/sudaderaHarry.webp'
import cassetteHHImage from './assets/cassetteHH.webp'

import "./Productos.css"

function Productos (){
    return (
        <>
            <h2 className="section-title">Productos</h2>

            <div className="productos-grid">
                <article className="producto-card">
                    <img src={vinylHHImage} alt="Disco Vinyl Harry's House" />
                    <h3>Disco de Vinyl del album Harry's House</h3>
                    <p>Disco con photobook incluido</p>
                    <button className="btn">Ver producto</button>
                </article>

                <article className="producto-card">
                    <img src={HS1Image} alt="Disco Vinyl Harry Styles" />
                    <h3>Disco de Vinyl del album Harry Styles</h3>
                    <p>Vinilo de colección con edición remasterizada.</p>
                    <button className="btn">Ver producto</button>
                </article> 

                <article className="producto-card">
                    <img src={finelineImage} alt="Disco Vinyl Fine Line" />
                    <h3>Disco de Vinyl del album Fine Line</h3>
                    <p>Vinilo de colección con edición remasterizada.</p>
                    <button className="btn">Ver producto</button>
                </article> 

                 <article className="producto-card">
                    <img src={sudaderaConejosImage} alt="Sudadera" />
                    <h3>Sudadera Love On Tour</h3>
                    <p> Sudadera con estampado de conejos.</p>
                    <button className="btn">Ver producto</button>
                </article> 
                

                 <article className="producto-card">
                    <img src={sudaderaHarryImage} alt="Sudadera" />
                    <h3>Sudadera "Harry"</h3>
                    <p>Sudadera del primer tour de Harry Styles</p>
                    <button className="btn">Ver producto</button>
                </article> 
                

                 <article className="producto-card">
                    <img src={cassetteHHImage} alt="Cassette" />
                    <h3>Cassette</h3>
                    <p>Cassette del album Harry's House.</p>
                    <button className="btn">Ver producto</button>
                </article> 
                
                <article className="producto-card">
                    <img src={polishImage} alt="Esmalte Pleasing" />
                    <h3>Esmalte para uñas con colores variados</h3>
                    <p>Todo para mostrar tus manos con seguridad y amor</p>
                    <button className="btn">Ver producto</button>
                </article>

            </div>
        </>
    );
}

export default Productos;
