import React from "react";
import logo1 from "./assets/share1.jpg";
import logo2 from "./assets/share2.jpg";
import logo3 from "./assets/share3.avif";
import logo4 from "./assets/share4.jpg";

const Share = () => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-blue-300 to-green-100 px-20 py-10">
      <div className="max-w-l">
        <h4 className="text-lg font-semibold">
          Share your stories through us to the world
        </h4>
        <h2 className="text-2xl font-bold">Let end Period Stigma</h2>
        <p className="max-w-md">
          Sign Up and start contributing your first own blog on health and
          hygiene. Here at Shewin we respect privacy so you can opt stay
          anynomous or privately share the story to us.
        </p>
        <a href={'/BlogStory'}>
        <button className="mt-4 bg-rose-400 hover:bg-rose-500 hover:shadow-md h-10 rounded-xl px-5 py-2">
            Share the World
        </button>
        </a>
      </div>

      <div className="ml-5 mt-[-90px] flex flex-col items-end">
        <div className="mb-5 overflow-hidden shadow-lg">
          <img src={logo1} alt="stain2" className="mb-2 rounded-xl" width={280} height={280}/>
        </div>
        <div className="mr-[-30] overflow-hidden shadow-lg">
          <img src={logo2} alt="stain1" className="mb-2 rounded-xl" width={135} height={135}/>
        </div>
      </div>

      <div className="mr-10 ml-30 flex flex-col items-end">
        <div className="mb-10 overflow-hidden shadow-lg">
          <img src={logo3} alt="stain1" className="mb-2 rounded-xl" width={220} height={220}/>
        </div>
        <div className="mr-[-30] overflow-hidden shadow-lg ">
          <img src={logo4} alt="stain" className="mb-2 rounded-xl" width={200} height={200}/>
        </div>
      </div>
      
    </div>
  );
};

export default Share;
