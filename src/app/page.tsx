

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Product from "./Components/product";



import Share from "./Components/Share";
import Slides from "./Components/Slides";
import SubHero from "./Components/SubHero";


export default function Home(){
  return (
    <>
    {/* <Header/> */}
    <Header/>
    <Hero/>
    <SubHero/>
  
   <Product/>
    
    <Slides/>
    <Share/>
    
    <Footer/>
    {/* <Footer/> */}
    </>
  )
}
