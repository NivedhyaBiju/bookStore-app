import React from 'react'
import "./banner.css";
import { PiCaretDoubleDownThin } from "react-icons/pi";
import Add from '../add/Add';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Banner = () => {
  return (
    <>
      <div className="min-h-[570px] sm:min-h-[670px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200" style={{background:'url(https://i.postimg.cc/CLmzYbFr/build-library.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
        <div className="container pb-8 sm:pb-0">
          <div className="flex flex-col justify-center items-center gap-4 pt-12 sm:pt-20 text-center sm:text-left order-2 sm:order-1">
            <h1
              data-aos="slide-down"
              data-aos-duration="500"
              className="text-3d text-5xl sm:text-5xl lg:text-7xl font-bold">
                Welcome to Bibliophile Haven
            </h1>
            <p 
            data-aos="slide-up"
            data-aos-duration="500"
            data-aos-delay="100" 
            className="text-xl text-sm-10">
              Your ultimate book collection awaits - start building it today
            </p>
            <div className="mt-5">
            <a href="#createBook">
            <PiCaretDoubleDownThin className="indicate-down"/>
            </a>
            </div>
          </div>
        </div>
      </div>
      <Add></Add>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
    </>
          )
};

          export default Banner