import { useState } from "react"
import api from './Services/api'

function RegistrarProducto(){
    const [productos, setProductos] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
    });

    const handleChange = (e) => {
        setProductos({
            ...productos,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        try{
           const response = await api.post('/products', productos);
            alert('Producto registrado exitosamente');
            console.log(productos);
            setProductos({
                title:'',
                price:'',
                description:'',
                category:'',
                image:'',
            })
        }catch(error){
            console.error('Error al registrar producto:', error);
        }
    };
    return (
        <div>
            <h1>Registrar Productos</h1>
            <form onSubmit={handleSubmit}></form>
        </div>
    )

}








//function RegistrarProducto(){
  //  return(
    //    <div className="registro-barra">
      //      <h3>Registrar Producto</h3>
//
  //          <form className="registro-form-horizontal">
    //            <input type="text" name="titulo" placeholder="Título" />
      //          <input type="number" name="price" placeholder="Precio" />
        //        <input type="text" name="description" placeholder="Descripción" />
          //      <input type="text" name="category" placeholder="Categoría" />
            //    <input type="text" name="image" placeholder="URL Imagen" />
              //  <button type="submit">Registrar</button>
            //</form>
        //</div>
    //)
//}

export default RegistrarProducto