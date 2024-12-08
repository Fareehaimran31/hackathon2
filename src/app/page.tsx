

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Slides from "./Components/Slides";
import SubHero from "./Components/SubHero";


export default function Home(){
  return (
    <>
    {/* <Header/> */}
    <Header/>
    <Hero/>
    <SubHero/>
  
    <Products/>
    <Slides/>
    
    <Footer/>
    {/* <Footer/> */}
    </>
  )
}
