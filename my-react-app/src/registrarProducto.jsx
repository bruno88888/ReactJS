import { useState } from "react";
import api from "./Services/api";

function RegistrarProducto() {

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
    };

    const handleSubmit = async (e) => {   // 👈 async agregado
        e.preventDefault();
        try {
            const response = await api.post('/products', productos);
            alert('Producto registrado exitosamente');
            console.log(response.data);

            setProductos({
                title: '',
                price: '',
                description: '',
                category: '',
                image: '',
            });

        } catch (error) {
            console.error('Error al registrar producto:', error);
        }
    };

    return (
        <div className="registro-barra">
            <h3>Registrar Producto</h3>

            <form className="registro-form-horizontal" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Título" 
                    value={productos.title}
                    onChange={handleChange}
                />

                <input 
                    type="number" 
                    name="price" 
                    placeholder="Precio"
                    value={productos.price}
                    onChange={handleChange}
                />

                <input 
                    type="text" 
                    name="description" 
                    placeholder="Descripción"
                    value={productos.description}
                    onChange={handleChange}
                />

                <input 
                    type="text" 
                    name="category" 
                    placeholder="Categoría"
                    value={productos.category}
                    onChange={handleChange}
                />

                <input 
                    type="text" 
                    name="image" 
                    placeholder="URL Imagen"
                    value={productos.image}
                    onChange={handleChange}
                />

                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}

export default RegistrarProducto;