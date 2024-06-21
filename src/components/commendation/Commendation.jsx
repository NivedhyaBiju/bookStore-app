import React from 'react'
import Slider from 'react-slick'
import Person1 from "../../assets/website/person1.png";
import Person2 from "../../assets/website/person2.png";
import Person3 from "../../assets/website/person3.png";
import Person4 from "../../assets/website/person4.png";
import Person5 from "../../assets/website/person5.png";
import { FaStar } from 'react-icons/fa';

const commendationData = [
  {
    id: 1, 
    name: "Evara",
    text: "This website is perfect for organizing my personal library! I love how I can add a cover page, title, author, and even the preface. It makes my collection look so professional and easy to browse.",
    img: Person1,
    rating: <div className="w-full flex items-center justify-center">
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
            </div>,
  },
  {
    id: 2, 
    name: "Nick",
    text: "A great tool for book collectors! It's so easy to add my books with all their details. The visual presentation with the cover pages is fantastic. I just wish there was an option to sort by author.",
    img: Person2,
    rating: <div className="w-full flex items-center justify-center">
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
            </div>,
  },
  {
    id: 3, 
    name: "Loria Philip",
    text: "I am thrilled with this site! It's a wonderful way to keep track of my book collection. Adding the cover page and preface gives each entry a personal touch. Highly recommend for any book lover.",
    img: Person3,
    rating: <div className="w-full flex items-center justify-center">
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
            </div>,

  },
  {
    id: 4, 
    name: "Alexander",
    text: "This site is a lifesaver for organizing my home library. Adding books with detailed information is straightforward, and the cover images make it visually appealing. Perfect for serious collectors!",
    img: Person4,
    rating: <div className="w-full flex items-center justify-center">
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
            </div>,
  },
  {
    id: 5, 
    name: "David",
    text: "Great for keeping my book collection organized! I like how I can add detailed information for each book. It would be even better if I could share my collection with friends.",
    img: Person5,
    rating: <div className="w-full flex items-center justify-center">
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
                 <FaStar className="text-yellow-500"/>
            </div>,
  },
]

const Commendation = () => {

  // SLIDER CONFIG
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,

    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        }, 
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id='commendations' className="py-10">
        <div className="container py-20">
            {/* HEADER */}
            <div
            data-aos="slide-up" 
            className="text-center mb-20 max-w-[400px] mx-auto">
                <p className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">What our users says</p>
                <h1 className="text-5xl font-bold">Commendations</h1>
                <p className="text-xs text-gray-400 py-2">
                Reader's Reflections: Showcase Your Book Journey
                </p>
            </div>
            {/* CARD SECTION */}
            <div data-aos="zoom-in">
              <Slider {...settings}>
                {
                  commendationData.map((id)=>(
                    <div>
                      <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-5xl bg-black-100 dark:bg-black-200 hover:bg-violet-100 dark:hover:bg-violet-200 hover:text-white bg-primary/10 relative">
                        <div>
                          <img 
                          src={id.img} 
                          alt=""
                          className="rounded-full w-20 h-20 object-cover" 
                          />
                        </div>
                        <div>
                          <div>
                            <p className="text-gray-500 text-sm">{id.text}</p>
                            <h1 className="text-xl font-bold text-black/80 dark:text-dark">{id.name}</h1>
                            <div className="w-full flex items-center justify-center">
                              {id.rating}
                              </div>
                          </div>
                        </div>
                        <p style={{color:'gray'}} className="absolute text-black-20 z-10 top-0 right-0 font-serif text-9xl">,,</p>
                      </div>
                    </div>
                  ))
                }
              </Slider>
            </div>
        </div>
    </div>
  )
}

export default Commendation
