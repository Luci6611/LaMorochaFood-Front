import React, { lazy, useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Cookies from 'universal-cookie';
const TablaCrearCategoria = lazy(() => import('@/components/admin/TablaCrearCategoria'), {
  fallback: () => <div>Cargando...</div>,
});
const TablaCrearMenu = lazy(() => import('@/components/admin/TablaCrearMenu'), {
  fallback: () => <div>Cargando...</div>,
});

import TablaEditarMenus from'@/components/admin/TablaEditarMenus';

const TablaMenus = lazy(() => import('@/components/admin/TablaMenus'), {
  fallback: () => <div>Cargando...</div>,
});

import { DataContext } from '@/context/DataContext';



const admi = () => {


  const [token, setToken] = useState(false);
  const { edit, setEdit , menusEditados, setMenusEditados } = useContext(DataContext);
  

  const cookies = new Cookies();

  useEffect(() => {

    if (cookies.get("token")) {
      setToken(true);
    }

  }, [ menusEditados]);



  return (
    <>
      <Head>
        <title>La Morocha - Admi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="styles-sheets" href="../stylescomponents.css" />
      </Head>

      {
        token ?

            <main className='  p-3 '>
              {edit ?
                <TablaEditarMenus />
                :
                <TablaMenus />
              }
              {!edit ? <>

                <TablaCrearMenu />

                <TablaCrearCategoria />
              </> : <></>
              }
            </main>

          : <></>
      }



    </>
  )
}

export default admi