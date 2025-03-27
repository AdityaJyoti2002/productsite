import React from 'react'
import Header from '../../Components/Header/Header'
import Product from '../../Components/Product/product'
import ProductComparison from '../../Components/ProductComparision/Productcomparision'
import ContactPage from '../../Components/ContactUs/Contact'
import Footer from '../../layout/Footer/Footer'
import Features from '../../Components/Feature/Features'
import VideoCover from '../../Components/Video/videocard'
import Navbar from '../../layout/Navbar'
// import Navbar from '../layout/Navbar'

const Home = () => {
  return (
    <div>
      {/* <ProductPage/> */}
    <Navbar/>
      <Header/>
      <VideoCover/>
      <Features/>
      <Product/>
      {/* <Store/> */}
      {/* <ProductCard1/> */}x
      
      <ProductComparison/>
      {/* <ProductLandingPage/> */}
      {/* <LandingPage/> */}
      <ContactPage/>

      <Footer/>

      
    </div>
  )
}

export default Home
