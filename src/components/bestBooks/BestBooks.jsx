import React from 'react'
import Img1 from "../../assets/website/book1.png";
import Img2 from "../../assets/website/book2.png";
import Img3 from "../../assets/website/book3.png";
import Img4 from "../../assets/website/book4.png";
import {FaStar} from "react-icons/fa";

const BooksData = [
    {
      id: 1,
      img: Img1,
      title: "RISE ABOVE WILDERNESS",
      description: "Are you caught up in a wilderness journey ? Is fear and defeat holding you back from advancing? Wait a minute. You got the right book to help you stay encouraged and motivated as you go through your life journey.",
    },
    {
      id: 2,
      img: Img2,
      title: "RAM C/O ANANDHI",
      description: "The story revolves around Ram, a young Malayali, who arrives in Chennai to study at a film school, and the incidents that happen in his life with his new set of friends in the city.",
    },
    {
      id: 3,
      img: Img3,
      title: "The House Of Strange Stories",
      description: "In The House of Strange Stories, Ruskin Bond presents a spine-tingling collection of some of the most chilling tales ever written. Featuring classic stories such as Arthur Conan Doyle’s ‘The Red-Headed League’ and Edgar Allan Poe’s ‘The Cask of Amontillado’, as well as several of Bond’s own eerie creations, these tales of horror, suspense, and the supernatural are sure to send shivers down your spine. With haunted houses, vampires, and other frightful creatures, this book is not for the faint of heart. Get ready to be scared out of your wits!",
    },
    {
      id: 4,
      img: Img4,
      title: "One Day, Life Will Change",
      description: "The book follows the Iife of Samaira. She has gone through an abusive marriage and when she is free to get back to her old self, her family meets an accident. She is left alone and no one to call as family. She sees no hope in living but soon sun shines in her life in the form of Vivian."
    },
  ];
  

const BestBooks = () => {
  return (
    <>
    <div id='trendingBooks' className="py-10">
        <div className="container py-10">
            {/* HEADER SECTION */}
            <div className="text-center mb-20 max-w-[400px] mx-auto">
                <p className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Trending Books</p>
                <h1 className="text-5xl font-bold">Best Books</h1>
                <p className="text-xs text-gray-400 py-2">
                    The Best Books to Add to Your Collection{" "}                
                </p>
            </div>
            {/* CARD SECTION */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-5 place-items-center py-8">
                {
                    BooksData.map((book)=>(
                        <div 
                        data-aos="zoom-in"
                        className="rounded-5xl bg-orange-100 dark:bg-orange-200 hover:bg-red-100 dark:hover:bg-red-400 hover:text-white relative shadow-xl duration-high group max-w-[300px]">
                            <div className="h-[100px]">
                                <img 
                                src={book.img} 
                                alt=""
                                className="max-w-[130px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md" 
                                />
                            </div>
                            <div className="p-14 text-center">
                                <div className="w-full flex items-center justify-center">
                                    <FaStar className="text-yellow-500"/>
                                    <FaStar className="text-yellow-500"/>
                                    <FaStar className="text-yellow-500"/>
                                    <FaStar className="text-yellow-500"/>
                                    <FaStar className="text-yellow-500"/>
                                </div>
                                <h1 className="text-xl font-bold">{book.title}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{book.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default BestBooks
