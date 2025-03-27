import React from 'react'
import NavBar from '../../layout/narbar'
import Header from '../../Components/Header/Header'
import Product from '../../Components/Product/product'
import Store from '../../Components/Store/Store'
import ProductComparison from '../../Components/ProductComparision/Productcomparision'
import ContactPage from '../../Components/ContactUs/Contact'
import Footer from '../../layout/Footer/Footer'
import Pages from '../../Components/Small Header/pages'
import ProductLandingPage from '../../Components/Small Header/pages'
import LandingPage from '../../Components/Small Header/LandingPages'
import Features from '../../Components/Feature/Features'
import ProductPage from '../../Components/Product/productpages'
import ProductCard1 from '../../Components/AnyCard/ProductCard'
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
