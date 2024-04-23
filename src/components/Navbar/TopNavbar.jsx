import React from "react";
import logo from "../assets/icons8-flo.svg";

const TopNavbar = () => {
  return (
    <div className="border-b border-gray-200 sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="Logo flex items-center">
            <a href={'/'}>
                <img src={logo} width={58} height={50} alt="logo" />
            </a>
            <a href = {'/'}>
            <span className='text-xl font-extrabold text-rose-700'>Menstru</span>
            <span className='text-xl font-extrabold text-rose-500'>E<i>ase</i></span>
            </a>
          </div>
          <div className="navbar">
            <a href={'/'} className="mr-8 hover:text-rose-600 font-medium">Home</a>
            <a href={'/HeroSection'} className="mr-8 hover:text-rose-600 font-medium">About</a>
            <a href={'/Booking'} className="mr-8 hover:text-rose-600 font-medium">Services</a>
            <a href={'/Tracker'} className="mr-8 hover:text-rose-600 font-medium">Tracker</a>
            <a href={'/BlogStory'} className="mr-8 hover:text-rose-600 font-medium">Blogs</a>
          </div>
          <div className="Button">
          <a href="/Login">
            <button className="btn btn-primary h-10 rounded-m px-8 md:w-auto bg-rose-400 hover:bg-rose-500 hover:shadow-md mr-2 rounded-xl">
            Login
            </button>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
