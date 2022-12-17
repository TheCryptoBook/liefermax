import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <div>
        <Head>
            <title>Liefermax- Dein Lieferservice</title>
            <meta name="description" content="Lieferservice Test App" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation />
        <div className='container'>
          {children}
        </div>
        <Footer />
    </div>
  )
}