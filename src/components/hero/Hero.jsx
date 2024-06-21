import React, { useState } from 'react'
import Book1 from "../../assets/website/book1.png";
import Book2 from "../../assets/website/book2.png";
import Book3 from "../../assets/website/book3.png";
import Vector from "../../assets/website/book-bg.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "RISE ABOVE WILDERNESS: A Field Guide to Living with Guts & Confidence",
    description: "Are you caught up in a wilderness journey ? Is fear and defeat holding you back from advancing? Wait a minute. You got the right book to help you stay encouraged and motivated as you go through your life journey.",
  },
  {
    id: 2,
    img: Book2,
    title: "RAM C/O ANANDHI",
    description: "The story revolves around Ram, a young Malayali, who arrives in Chennai to study at a film school, and the incidents that happen in his life with his new set of friends in the city.",
  },
  {
    id: 3,
    img: Book3,
    title: "The House Of Strange Stories",
    description: "In The House of Strange Stories, Ruskin Bond presents a spine-tingling collection of some of the most chilling tales ever written. Featuring classic stories such as Arthur Conan Doyle’s ‘The Red-Headed League’ and Edgar Allan Poe’s ‘The Cask of Amontillado’, as well as several of Bond’s own eerie creations, these tales of horror, suspense, and the supernatural are sure to send shivers down your spine. With haunted houses, vampires, and other frightful creatures, this book is not for the faint of heart. Get ready to be scared out of your wits!",
  },
]

const Hero = () => {

  const [imageId, setImageId] = useState(Book1)

  const [title, setTitle] = useState("RISE ABOVE WILDERNESS: A Field Guide to Living with Guts & Confidence");

  const [description, setDescription] = useState("Are you caught up in a wilderness journey ? Is fear and defeat holding you back from advancing? Wait a minute. You got the right book to help you stay encouraged and motivated as you go through your life journey.");


  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <>
    <div className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200" style={bgImage}>
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* TEXT CONTENT SECTION */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1 
            data-aos="zoom-out" 
            data-aos-duration="500" 
            className="text-3xl sm:text-3xl lg:text-5xl font-bold">
              {title}
            </h1>
            <p 
            data-aos="slide-up"
            data-aos-duration="500"
            data-aos-delay="100" 
            className="text-sm">
              {description}
            </p>
            <div>
              <a href="#yourLibrary">
              <button
              data-aos="zoom-in" 
              className="bg-gradient-to-r from-orange-400 to-orange-800 text-black px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200">
                Get Started
              </button>
              </a>
            </div>
          </div>
          {/* IMAGE SECTION */}
          <div className="min-h-[450px] flex justify-content items-center relative order-1 sm:order-2">
            {/* MAIN IMAGE */}
            <div className="h-[350px] sm:h-[500px] overflow-hidden flex justify-center items-center">
              <img
              data-aos="zoom-in"
              data-aos-once="true" 
              src={imageId} 
              alt=""
              className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto" 
              />
            </div>
            {/* OTHER IMAGE LIST*/}
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-5 absolute -bottom-[40px] lg:-right-1 rounded-full cursor-pointer">
              {
                ImageList.map((id)=>(
                  <img 
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={id.img}
                  className="max-w-[100px] sm:w-[450px] h-[200px] object-contain inline-block hover:scale-110 duration-200"
                  onClick={()=>{
                    setImageId(
                      id.id === 1 ? Book1 :
                      id.id === 2 ? Book2:
                      Book3
                    );
                    setTitle(id.title);
                    setDescription(id.description);
                  }}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
