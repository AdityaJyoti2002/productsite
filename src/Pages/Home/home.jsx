import React from 'react'
import NavBar from '../../layout/narbar'
import Header from '../../Components/Header/Header'
import Product from '../../Components/Product/product'
import ProductComparison from '../../Components/ProductComparision/Productcomparision'
import ContactPage from '../../Components/ContactUs/Contact'
import Footer from '../../layout/Footer/Footer'
import Features from '../../Components/Feature/Features'
import VideoCover from '../../Components/Video/videocard'

const Home = () => {
  return (
    <div>
      <NavBar/>
      {/* <ProductPage/> */}
    
      <Header/>
      <VideoCover/>
      <Features/>
      <Product/>
      {/* <Store/> */}
      {/* <ProductCard1/> */}
      
      <ProductComparison/>
      {/* <ProductLandingPage/> */}
      {/* <LandingPage/> */}
      <ContactPage/>

      <Footer/>

      
    </div>
  )
}

export default Home
