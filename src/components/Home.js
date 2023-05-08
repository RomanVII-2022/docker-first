import React from 'react'
import NavigationBar from './NavigationBar'
import Carousell from './Carousell'
import Services from './Services'
import Popular from './Popular'
import Look from './Look'
import Explore from './Explore'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Carousell />
      <Services />
      <Look />
      <Explore />
      <Footer />
    </div>
  )
}

export default Home