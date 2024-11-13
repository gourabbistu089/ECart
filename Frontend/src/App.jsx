import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import Services from './components/Services'
import Banner from './components/Banner'
import Products from './components/Products'
import headphone from './assets/hero/headphone.png'
import smartwatch from './assets/category/smartwatch.png'
import Blog from './components/Blog'
import Partners from './components/Partners'
import Footer from './components/Footer'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const bannerData1 = {
  discount: '20% Off',
  title: ' Discount Electronics',
  date: 'Valid until October 31, 2024',
  image: headphone, // Replace with the actual image URL
  title1: 'Exclusive Offer!',
  title2: 'High-Quality Sound',
  title4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  bgcolor: '#FF0000',  // Example hex code for a gold background
};
const bannerData2 = {
  discount: '30% Off',
  title: ' Happy Holidays',
  date: 'Valid until October 31, 2024',
  image: smartwatch, // Replace with the actual image URL
  title1: 'Summer Offer!',
  title2: 'High-Quality Display',
  title4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  bgcolor: '#2dcc6f',  // Example hex code for a gold background
};
function App() {

  useEffect(() => {
    AOS.init({ 
      duration: 800 ,
      easing: 'ease-in-sine',
      delay:100,
    });
    AOS.refresh();
  },[])
  return (
    <div className='bg-white  dark:bg-slate-800 dark:text-white duration-200 overflow-hidden'>
      <Navbar/>
      <div className=' mt-28'>
      <Hero/>
      <Category/>
      <Services/>
      <Banner bannerData={bannerData1}/>
      <Products/>
      <Banner bannerData={bannerData2}/>
      <Blog/>
      <Partners/>
      <Footer/>
      </div>
    </div>
  )
}

export default App