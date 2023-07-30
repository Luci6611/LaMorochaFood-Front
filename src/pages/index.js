import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carouseles from '@/components/Carouseles';
import Ofertas from '@/components/Ofertas';


export default function Home() {
  return (
    <>
      <Head>
        <title>La Morocha - Home</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />    
        <meta name="description" content="Bienvenidos al sitio Web de La Morocha!. Aqui podras conocer nuestros menues y pedir el tuyo!" />
        <link rel="styles-sheets" href="../stylescomponents.css" />
      </Head>   
      <Carouseles/>
      <main>
        <Ofertas />
      </main>

    </>
  )
}
