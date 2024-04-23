import React from "react";
import logo1 from "./assets/period-tracker.avif";
import logo2 from "./assets/consultancy.jpg";
import logo3 from "./assets/pads.avif";
import logo4 from "./assets/mood-tracker.avif";

const Services = () => {
    return (
        <div className="flex flex-wrap justify-center py-20 px-5 mb-0 mt-1">
            <h1 className="font-bold text-center text-4xl w-full">Services We Offer</h1>
            <div className="flex flex-col items-center justify-center m-12 hover:opacity-80 transform hover:scale-110 transition-transform duration-300">
                <a href="/Tracker">
                <img src={logo1} alt="Period Tracker" width={150} height={150} className="rounded-xl mb-2"/>
                <p>Period Tracker</p>
                </a>
            </div>
            <div className="flex flex-col items-center justify-center m-12 transform hover:scale-110 transition-transform duration-300">
                <a href="/Consultancy">
                    <img src={logo2} alt="Period Tracker" width={150} height={150} className="rounded-xl mb-2"/>
                    <p>Consultancy</p>
                </a>
            </div>
            <div className="flex flex-col items-center justify-center m-12 transform hover:scale-110 transition-transform duration-300">
                <img src={logo3} alt="Period Tracker" width={150} height={150} className="rounded-xl mb-2"/>
                <p>Get PILLs and PADs</p>
            </div>
            <div className="flex flex-col items-center justify-center m-12 transform hover:scale-110 transition-transform duration-300">
                <img src={logo4} alt="Period Tracker" width={150} height={150} className="rounded-xl mb-2"/>
                <p>Mood Tracker</p>
            </div>
        </div>
    )
};

export default Services;
