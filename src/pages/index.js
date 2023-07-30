import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carouseles from '@/components/Carouseles';
import Ofertas from '@/components/Ofertas';


export default function Home() {
  return (
    <>
      <Head>
        <title>La Morocha - Home</title>
        <meta name="description" content="Bienvenidos al sitio Web de La Morocha!. Aqui podras conocer nuestros menues y pedir el tuyo!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="styles-sheets" href="../stylescomponents.css" />
      </Head>   
      <Carouseles/>
      <main>
        <Ofertas />
      </main>

    </>
  )
}
