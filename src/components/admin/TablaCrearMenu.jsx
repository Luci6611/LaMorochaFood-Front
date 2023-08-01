import { DataContext } from '@/context/DataContext';
import { upload } from '@/firebase/config';
import { createMenu, traerCategorias } from '@/helpers/admi'
import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import swal from 'sweetalert';

const TablaCrearMenu = () => {

    const [menus, setMenus] = useState({img: ""});
    const [categ, setCateg] = useState([]);

    const { edit, setEdit, menusEditados, setMenusEditado, creado, setCreado } = useContext(DataContext);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setMenus((prevState) => ({ ...prevState, [name]: value }));
    };

    const traerCategoria = async () => {
        const response = await traerCategorias();
        setCateg(response);
    };

    const setearImagen = async (e) => {
        const url = await upload(e.target.files[0]);
        menus.img = url;
        console.log(url);
        console.log(menus.img);
    };

    useEffect(() => {
        traerCategoria();
    }, [])


    const crearMenu = async () => {
        setCreado(!creado);
        const response = await createMenu(menus);

        if (response === "producto agregado") {
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
            <h1 className="text-center subadmi">Crear Menu</h1>

            <Table striped responsive bordered hover variant="dark" className='mt-3'>
                <thead>
                    <tr>
                        <th className='text-center'>Nombre</th>
                        <th className='text-center'>Descripcion</th>
                        <th className='text-center'>Imagen</th>
                        <th className='text-center'>Precio</th>
                        <th className='text-center'>Estado</th>
                        <th className='text-center'>Categoria</th>
                        <th className='text-center'>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> <input type="text" className='bg-dark text-light p-2' onChange={handleChange} name="nombre" required id="" /></td>
                        <td> <input type="text" className='bg-dark text-light p-2' onChange={handleChange} name="descripcion" id="" /></td>
                        <td> <input type="file" className='bg-dark text-light p-2' name="img" required id="" onChange={setearImagen} /></td>
                        <td> <input type="number" className='bg-dark text-light p-2' name="precio" required min={0} id="" onChange={handleChange} />


                        </td>
                        <td>

                            <select name="disponible" className='bg-dark text-light p-2' id="" onChange={handleChange} required>
                                <option>Seleccione un Estado</option>
                                <option value="false">No Disponible</option>
                                <option value="true">Disponible</option>

                            </select>
                        </td>
                        <td>

                            <select name="categoria" className='bg-dark text-light p-2' id="" onChange={handleChange} required>
                                <option>Seleccione una categoria</option>
                                {
                                    categ.map(index => (
                                        <option value={index._id} key={index.nombre}>{index.nombre}</option>
                                    ))
                                }

                            </select>
                        </td>

                        <td className='d-flex gap-2 justify-content-center'>{menus.img ?
                            <button className='btn btn-success fw-bold' title='crear menu' onClick={() => crearMenu()}>Crear</button> : <div className="spinner-border text-success" role="status">
                                <span className="sr-only"></span>
                            </div>
                        }
                        </td>

                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default TablaCrearMenu