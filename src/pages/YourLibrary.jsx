import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Banner from '../components/YourLibrary/banner/Banner'
import AOS from 'aos';
import "aos/dist/aos.css";
import ScrollToTop from '../components/YourLibrary/scroll/ScrollToTop';


const YourLibrary = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ScrollToTop></ScrollToTop>
        <Navbar></Navbar>
        <Banner></Banner>
        <Footer></Footer>
    </div>
  )
}

export default YourLibrary
