import { DataContext } from '@/context/DataContext';
import { putMenus, traerCategorias } from '@/helpers/admi'
import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import swal from 'sweetalert';

const TablaEditarMenus = () => {

    const { edit, setEdit , menusEditados, setMenusEditados } = useContext(DataContext);
    const [categorias, setCategorias]= useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMenusEditados((prevState) => ({ ...prevState, [name]: value }));
    };

    const traerCateg = async () => {
        const response = await traerCategorias();
        setCategorias(response);
    };

    useEffect(() => {
        traerCateg();
    }, [])

    const setearImagen = async (e) => {
        const url = await upload(e.target.files[0]);
        menusEditados.img = url;
    };

    const editarMenues = async () => {

       const response = await putMenus(menusEditados);

        if (response === "producto actualizado correctamente") {
            swal(response, {
              icon: "success",
            }).then((willDelete) => {
                setEdit(false);
            });
          } else {
            swal(response, {
              icon: "warning",
  
            });
          };
    };
    


  return (
    <div>
           <h1 className='text-center subadmi'> Editar Menus</h1>
            <Table striped responsive bordered hover variant="dark" className='mt-3'>
              <thead>
                <tr>
                  <th className='text-center'>Nombre</th>
                  <th className='text-center'>Descripcion</th>
                  <th className='text-center'>Imagen</th>
                  <th className='text-center'>Precio</th>
                  <th className='text-center'>Categoria</th>
                  <th className='text-center'>Opciones</th>
                </tr>
              </thead>
              <tbody>

                    <>

                      <tr>
                        <td> <input type="text" className='bg-dark text-light p-2' onChange={handleChange} name="nombre" id="" value={menusEditados.nombre} required /></td>
                        <td> <input type="text" className='bg-dark text-light p-2' onChange={handleChange} name="descripcion" id="" value={menusEditados.descripcion} /></td>
                        <td> <input type="file" className='bg-dark text-light p-2' name="img" onChange={setearImagen} id="" /></td>
                        <td> <input type="number" className='bg-dark text-light p-2' name="precio" id="" onChange={handleChange} value={menusEditados.precio} /></td>
                        <td>
                          <select name="categoria" className='bg-dark text-light p-2' id="" onChange={handleChange}>
                            {categorias.map(index => (
                              <option value={index._id} key={index.nombre}>{index.nombre}</option>
                            )
                            )

                            }
                          </select>
                        </td>
                        <td className='d-flex justify-content-center gap-2'> <button className='btn btn-success fw-bold' title='Guardar' onClick={() => editarMenues()}>Guardar</button>

                          <button className='btn btn-danger fw-bold' title='Cancelar' onClick={() => setEdit(false)}>Cancelar</button>
                        </td>

                      </tr>
                    </>
   
              </tbody>
            </Table>
    </div>
  )
}

export default TablaEditarMenus