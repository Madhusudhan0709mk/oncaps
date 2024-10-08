// Add this line at the top of the file
'use client';

import { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle function for the mobile menu
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="border-b-2 border-white/15 rounded-xl bg-gradient-to-b #190d2e sticky top-0 z-50 backdrop-blur md:blackdrop-blur">
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
            OnCapz
          </h1>

          {/* Toggle Button for Mobile View */}
          <button
            className="block lg:hidden text-white ml-auto"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Navbar Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10 rtl:space-x-reverse">
        
              
          
            
              <Link href="/" className="text-white hover:shadow-[0px_0px_12px_#8c45ff] bg-gradient-to-b py-1 px-4 rounded-lg font-medium text-sm">
                Jobs
              </Link>
            
              <Link href="/internship" className="text-white hover:shadow-[0px_0px_12px_#8c45ff] bg-gradient-to-b py-1 px-4 rounded-lg font-medium text-sm">
                Internships
              </Link> 

              <Link href="/about" className="text-white hover:shadow-[0px_0px_12px_#8c45ff] bg-gradient-to-b py-1 px-4 rounded-lg font-medium text-sm">
                About
              </Link>
          
           
              <Link href="/features" className="text-white hover:shadow-[0px_0px_12px_#8c45ff] bg-gradient-to-b py-1 px-4 rounded-lg font-medium text-sm">
                Features
              </Link>
              <Link href="/login" className="text-white hover:shadow-[0px_0px_12px_#8c45ff] bg-gradient-to-b py-1 px-4 rounded-lg font-medium text-sm">
                Login/SignUp
              </Link>
           
          </div>

          {/* Join Button */}
          <Link href="/pricing" >
          <button className="hidden text-white lg:block hover:shadow-[0px_0px_12px_#190d2e] py-1 px-4 rounded-lg font-medium text-sm  bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
            Upgrade To Pro
          </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-2 mt-4">
            
            <li>
              <Link href="/" className="dark:text-white hover:shadow-[0px_0px_12px_#8c45ff] bg-gradient-to-b py-1 px-4 rounded-lg font-medium text-sm">
                  Jobs
              
              </Link>
            </li>
            <li>
              <Link href="/internship" className="dark:text-white hover:shadow-[0px_0px_12px_#8c45ff] bg-gradient-to-b py-1 px-4 rounded-lg font-medium text-sm">
                  Internships
              </Link>
            </li>
            <li>
              <Link href="/about" className="dark:text-white hover:shadow-[0px_0px_12px_#8c45ff] bg-gradient-to-b py-1 px-4 rounded-lg font-medium text-sm">
                  About
              </Link>
            </li>
            <li>
              <Link href="/features" className="dark:text-white hover:shadow-[0px_0px_12px_#8c45ff] bg-gradient-to-b py-1 px-4 rounded-lg font-medium text-sm">
                  Features
             
              </Link>
            </li>
            <li>
             
            </li>
            <li>
              <Link href="/login">
              <button className="w-full hover:shadow-[0px_0px_12px_#190d2e] py-1 px-4 rounded-lg font-medium text-sm dark:text-white bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
                Login/SignUp
              </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
