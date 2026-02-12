import './Contactanos.css';

function Contactanos() {
    return (
        <div className="contacto-container">
            <h2 className="section-title">Contáctanos</h2>

            <div className="contact-grid">
                <div className="contact-card">
                    <h3>Atención al cliente</h3>
                    <p>Email: soporte@ejemplo.com</p>
                    <p>Tel: +52 55 1234 5678</p>
                </div>

                <form className="contact-form">
                    <label>Nombre</label>
                    <input type="text" placeholder="Tu nombre" />

                    <label>Email</label>
                    <input type="email" placeholder="tu@email.com" />

                    <label>Mensaje</label>
                    <textarea placeholder="Escribe tu mensaje"></textarea>

                    <button className="btn" type="button">Enviar mensaje</button>
                </form>
            </div>
        </div>
    );
}

export default Contactanos;