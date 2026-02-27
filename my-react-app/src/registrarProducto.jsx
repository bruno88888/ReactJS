function RegistrarProducto(){
    return(
        <div className="registro-barra">
            <h3>Registrar Producto</h3>

            <form className="registro-form-horizontal">
                <input type="text" name="titulo" placeholder="Título" />
                <input type="number" name="price" placeholder="Precio" />
                <input type="text" name="description" placeholder="Descripción" />
                <input type="text" name="category" placeholder="Categoría" />
                <input type="text" name="image" placeholder="URL Imagen" />
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default RegistrarProducto