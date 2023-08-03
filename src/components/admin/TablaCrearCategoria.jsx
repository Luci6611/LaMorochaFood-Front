import { createCate, putCate, traerCategorias } from '@/helpers/admi';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import swal from 'sweetalert';


const TablaCrearCategoria = () => {

    const [categoriasCreate, setCategoriasCreate] = useState([{
        nombreUsuario: "5666"
    }]);

    const [categorias, setCategorias] = useState([]);
    const [cateEdit, setEditarCate] = useState([{id: ""}]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoriasCreate((prevState) => ({ ...prevState, [name]: value }));
    };

    

    const handleChangeEdit = (e) => {
        const { name, value } = e.target;
        setEditarCate((prevState) => ({ ...prevState, [name]: value }));
    };

    const traerCategoria = async () => {
        const response = await traerCategorias();
        setCategorias(response);
    };


    const crearCategorias = async () => {
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

    const editarCate = async (id) => {

        cateEdit.id = id;

        const response = await putCate(cateEdit);

        if (response === "Categoria Acualizada") {
            swal(response, {
                icon: "success",
            }).then((willDelete) => {
            });
        } else {
            swal(response, {
                icon: "warning",

            });
        };
    };


    useEffect(() => {

        traerCategoria();

    }, [editarCate]);




    return (
        <div className='mt-2'>
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
                    <tr className='w-100'>



                    </tr>
                </tbody>
            </Table>

            <div className=' d-flex justify-content-center flex-column '>

                <h1 className="text-center subadmi">Editar Categorias</h1>
                <Table striped bordered responsive hover variant='dark' className='mt-2 mb-2'>
                    <thead>
                        <tr>
                            <th className='text-center'>Categoria</th>
                            <th className='text-center'>Editar</th>
                            <th className='text-center'>Guardar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map(index => (
                            <> <tr>
                                <td> {index.nombre}</td>
                                <td className='g-2 text-center'>< input type="text" name="nombre" id="" className='bg-dark p-2 text-light ' onChange={handleChangeEdit} required /></td>
                                <td className='d-flex g-2 justify-content-center'>
                                    <button className='btn btn-success fw-bold' title='Editar' onClick={() => editarCate(index._id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>

                            </>

                        ))

                        }

                    </tbody>
                </Table>

            </div>

        </div>
      
    )
}

export default TablaCrearCategoria