import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import BestBooks from '../components/bestBooks/BestBooks'
import LibraryBanner from '../components/libraryBanner/LibraryBanner'
import Commendation from '../components/commendation/Commendation'
import Footer from '../components/footer/Footer'
import AOS from 'aos';
import "aos/dist/aos.css";



const Home = () => {

    React.useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <BestBooks></BestBooks>
      <LibraryBanner></LibraryBanner>
      <Commendation></Commendation>
      <Footer></Footer>
    </div>
    </>
  )
}

export default Home

