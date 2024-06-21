import React, { useState } from 'react';
import Logo from "../../assets/website/logo.png";
import { FaBars, FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const DropdownLinks = [
    { id: 1, name: 'Trending Books', link: '#trendingBooks' },
    { id: 2, name: 'Your Library', link: '#yourLibrary' },
    { id: 3, name: 'Commendations', link: '#commendations' },
    { id: 4, name: 'About Us', link: '#footer' },
  ];

  return (
    <div className="shadow-lg">
      <div className="container bg-yellow-50 py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <Link to={'/'} className="font-bold text-2xl sm:text-3xl flex gap-2" style={{ textDecoration: 'none' }}>
              <img src={Logo} alt="Logo" className="w-10" />
              <span className="border-text">Bibliophile Haven</span>
            </Link>
          </div>
          <div className="flex items-center justify-between gap-4">
            <ul className="items-center gap-4 hidden sm:flex">
              {/* Dropdown Section */}
              <li className="group relative cursor-pointer">
                <p className="flex items-center h-16 gap-2">
                  Quick Links
                  <span>
                    <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                  </span>
                </p>
                {/* Dropdown Links Section */}
                <div className="absolute left-0 z-10 hidden group-hover:block text-black bg-white p-2 shadow-md w-40">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <a key={data.id} href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                        <li>{data.name}</li>
                      </a>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            {/* Mobile Menu Icon */}
            <div className="sm:hidden">
              <FaBars className="text-2xl cursor-pointer" onClick={toggleMobileMenu} />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="sm:hidden mt-4">
            <ul className="flex flex-col items-center gap-4">
              {/* Dropdown Section */}
              <li className="group relative cursor-pointer w-full text-center">
                <div className="flex items-center h-16 justify-center gap-2">
                  <p className="flex items-center gap-2">Quick Links
                    <span>
                      <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                    </span>
                  </p>
                </div>
                {/* Dropdown Links Section */}
                <div className="absolute left-0 z-10 hidden group-hover:block text-black bg-white p-2 shadow-md w-full">
                  <ul className="flex flex-col items-center">
                    {DropdownLinks.map((data) => (
                      <a key={data.id} href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                        <li>{data.name}</li>
                      </a>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

