
function RegistrarProducto(){
    return(
        <div><h2>Regirtrar Productos</h2>
        <form>
            <label>Titulo:</label>
            <input type="text" name="titulo"></input>
            <label>Precio:</label>
            <input type="number" name="price"></input>
             <label>Descripcion:</label>
            <input type="text" name="description"></input>
             <label>Categoria:</label>
            <input type="text" name="category"></input>
             <label>Imagen:</label>
            <input type="text" name="image"></input>
            <button>Registrar</button>

        </form>
        </div>
    )
}
export default RegistrarProducto