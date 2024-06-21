import React from 'react'
import LibraryImg from "../../assets/website/library-banner.png";
import { BiSolidCategory } from "react-icons/bi";
import { Link } from 'react-router-dom';
import "./librarybanner.css";
import { IoBookSharp } from 'react-icons/io5';
import { ImBooks } from 'react-icons/im';
import { TbBooksOff } from 'react-icons/tb';

const LibraryBanner = () => {
  return (
    <>
    <div id='yourLibrary' className="py-10">
        <div className="container py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-3">
                {/* IMAGE SECTION */}
                <div>
                    <img
                    data-aos="zoom-in" 
                    src={LibraryImg} 
                    alt=""
                    className="max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover" 
                    />
                </div>
                {/* TEXT CONTENT SECTION */}
                <div
                data-aos="slide-up" 
                className="flex flex-col justify-center gap-6 sm:pt-0">
                    <h1 className="text-3xl sm:text-4xl font-bold">Your Library At Your Fingertips</h1>
                    <p className="text-sm text-gray-500 tracking-wide leading-5">Welcome to the future of reading! Your dream collection is always just a click away.</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <ImBooks className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />
                            <p>Create your collection</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <IoBookSharp className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400' />
                            <p>Access your books</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <TbBooksOff className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400' />
                            <p>Delete unwanted books</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to={'/library'} style={{textDecoration:'none'}}>
                            <button className=" animated-border bg-gradient-to-r from-gray-500 to-gray-500 text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200">
                                Explore The World
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LibraryBanner
