import NavBars from '@/components/NavBars';
import DataProvider from '@/context/DataContext';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App({ Component, pageProps }) {

  return <DataProvider>
    <NavBars/>
    <Component {...pageProps} />
  </DataProvider>

}
