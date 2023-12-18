import React from 'react'
import Header from '../components/static/Header/Header';
import Footer from '../components/static/Footer/Footer';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout