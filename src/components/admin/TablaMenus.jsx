import { DataContext } from '@/context/DataContext';
import { eliminarMenus, traerMenus } from '@/helpers/admi';
import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import swal from 'sweetalert';

const TablaMenus = () => {

    const [menus, setMenus]= useState([]);
    const { edit, setEdit , menusEditados, setMenusEditados,  creado, setCreados  } = useContext(DataContext);
    
    
  const eliminarMenu = (id) => {
    swal({
      title: "Esta seguro?",
      text: "Esta accion es inrreversible!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Menu eliminada con Exito!", {
            icon: "success",
          });
          eliminarMenus(id);
        } else {
          swal("Operacion cancelada con exito!", {
            icon: "success",

          });
        }
      });
  };

    const editarMenus = (datos) => {
        setEdit(true);
        setMenusEditados(datos);
    };
    
    const traerMenu = async () => {
        const response = await traerMenus();
        setMenus(response);
    };

    useEffect(() => {
        traerMenu();
    }, [eliminarMenu, creado])

    return (
        <div>
            <h1 className='text-center subadmi'> Administrar Menus</h1>
            <Table striped responsive bordered hover variant="dark" className='mt-3'>
                <thead>
                    <tr>
                        <th className='text-center'>Id</th>
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
                    {

                        menus.map(index => (
                            <tr key={index._id}>
                                <td>{index._id}</td>
                                <td>{index.nombre}</td>
                                <td>{index.descripcion}</td>
                                <td><img src={index.img} alt={index.titulo} width={20} /></td>
                                <td>$ {index.precio}</td>
                                <td>{index.disponible === true ? "Disponible" : "No Disponible"}</td>
                                <td>{index.categoria.nombre}</td>
                                <td className='d-flex gap-2 justify-content-center'>
                                    <button className='btn btn-danger fw-bold' title='Eliminar' onClick={() => eliminarMenu(index._id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                        </svg>
                                    </button>
                                    <button className='btn btn-success fw-bold' title='Editar' onClick={() => editarMenus(index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg></button>
                                </td>

                            </tr>
                        ))

                    }

                </tbody>
            </Table>

        </div>
    )
}

export default TablaMenus