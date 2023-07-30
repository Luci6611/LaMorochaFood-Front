import { createCate, traerCategorias } from '@/helpers/admi';
import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import swal from 'sweetalert';


const TablaCrearCategoria = () => {

    const [categoriasCreate, setCategoriasCreate] = useState([{
        nombreUsuario: "5666"
    }]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoriasCreate((prevState) => ({ ...prevState, [name]: value }));
    };


    const crearCategorias = async ()=>{
         const response = await createCate(categoriasCreate);

         if (response === "Categoria creada correctamente") {
            swal(response, {
              icon: "success",
            });
          } else {
            swal(response, {
              icon: "warning",
  
            });
          };
    };


    return (
        <div className='mt-5'>
            <h1 className="text-center subadmi">Crear Categoria de Menu</h1>

            <Table striped responsive bordered hover variant="dark" className='mt-3'>
                <thead>
                    <tr>
                        <th className='text-center'>Nombre</th>
                        <th className='text-center'>Estado</th>
                        <th className='text-center'>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-center'> <input type="text" onChange={handleChange} name="nombre" required id="" className='bg-dark text-light p-2' /></td>

                        <td className='text-center'>
                            <select name="estado" id="" onChange={handleChange} required className='bg-dark text-light p-2'>
                                <option className='text-light'>Seleccione un Estado</option>
                                <option className="text-light" value="false">No Disponible</option>
                                <option className="text-light" value="true">Disponible</option>
                            </select>
                        </td>


                        <td className='d-flex gap-2 justify-content-center'> <button className='btn btn-success fw-bold' title='crear categoria' onClick={() => crearCategorias()}>Crear</button>
                        </td>

                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default TablaCrearCategoria