import Footer from '@/components/Footer'
import NavBars from '@/components/NavBars'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body>
        <NavBars/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  )
}
