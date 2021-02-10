import Head from 'next/head'
import MenuButton from '../components/MenuButton'
import { MenuProvider } from '../components/MenuContext'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Note app - by edsonlcandido</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuProvider>
        <header className="header" id="header">
          <MenuButton/>
        </header>
        <div className="l-navbar" id="nav-bar">
          <Nav/>
        </div>
      </MenuProvider>
      <h1>Note 1</h1>  
    </>
  )
}
