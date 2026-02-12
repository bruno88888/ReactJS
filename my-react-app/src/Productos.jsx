import './Productos.css';

function Productos (){
    return (
        <div className="productos-container">
            <h2 className="section-title">Productos</h2>

            <div className="productos-grid">
                <article className="producto-card">
                    <h3>Playera oficial</h3>
                    <p>Camiseta con diseño oficial. Material 100% algodón.</p>
                    <button className="btn">Ver producto</button>
                </article>

                <article className="producto-card">
                    <h3>Poster edición limitada</h3>
                    <p>Poster de gira con ilustración exclusiva.</p>
                    <button className="btn">Ver producto</button>
                </article>

                <article className="producto-card">
                    <h3>Vinilo</h3>
                    <p>Vinilo de colección con edición remasterizada.</p>
                    <button className="btn">Ver producto</button>
                </article>
            </div>
        </div>
    );
}

export default Productos;