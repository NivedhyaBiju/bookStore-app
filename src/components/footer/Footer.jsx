import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import "./footer.css";


const Footer = () => {
  return (
    <div id="footer" className="shadow-lg">
      <div className="container bg-yellow-50">
        <div className="grid md:grid-cols-3 py-5 px-20 gap-20">
          {/* COMPANY DETAILS */}
          <div className="py-8 px-4">
            <h1 className="border-text sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Bibliophile Haven</h1>
            <p className="story">Unite with Stories, One Page at a Time</p>
            <br />
            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Malappuram, Kerala</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91-9876543210</p>
            </div>
          </div>
          {/* LINK SECTION */}
          <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 col-span-2">
            <div>
              <div className="py-8 px-4 flex flex-col">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Connect with us</h1>
                <ul className="flex flex-col gap-3">
                  <div className="flex gap-3 mt-6">
                    <a href="#">
                      <FaInstagram className="text-3xl" />
                    </a>
                    <a href="#">
                      <FaFacebook className="text-3xl" />
                    </a>
                    <a href="#">
                      <FaLinkedin className="text-3xl" />
                    </a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <input className="rounded-xl border bg-orange-200 p-2" type="text" placeholder="Enter your email" />
                    <button className='rounded-xl border bg-green-300 p-1'>Send</button>
                  </div>
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4 flex flex-col">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                    <span>&#128204;</span>
                    <a href="#trendingBooks">
                    <span>Best Books</span>
                    </a>
                  </li>
                  <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                    <span>&#128204;</span>
                    <a href="#yourLibrary">
                    <span>Your Library</span>
                    </a>
                  </li>
                  <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                    <span>&#128204;</span>
                    <a href="#commendations">
                    <span>Commendations</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* COPYRIGHT SECTION */}
        <div>
          <div className="border-t-2 border-gray-300/50">
          <p className="text-center py-10">&copy; 2024 Bibliophile Haven. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
