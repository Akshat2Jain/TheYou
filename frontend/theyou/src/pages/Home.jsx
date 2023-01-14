import React from 'react'
import Navbar from "../components/Navbar";
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Slider2 from '../components/Slider2';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
    <Announcement/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products/>
    <Slider2/>
    <Footer/>
    </>
  )
}

export default Home