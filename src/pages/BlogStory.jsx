import React from "react";
import logo1 from "../components/assets/blogStory.png";

export default function BlogStory() {
  return (
    <div className="flex justify-center items-center px-2">
      <div className='py-10 px-5 mr-2'>
        <img src={logo1} alt='blogimage' width={500} height={500} className='rounded-2xl'/>
      </div>
      <div className="max-w-md w-full px-10 py-5 mt-10 mb-10">
        <h1 className="text-4xl font-semibold mb-10 flex items-center justify-center text-cyan-800">Share your own Story</h1>
        <form>
          <div className="mb-6">
            <label htmlFor="title" className="block text-gray-700 text-m font-bold mb-2">Title:</label>
            <input type="text" placeholder="Enter the title for the blog" id="title" name="title" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="content" className="block text-gray-700 text-m font-bold mb-2">Content:</label>
            <textarea placeholder="Your blog here..." id="content" name="content" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows={8}></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="bg-lime-100 hover:bg-lime-200 text-black font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </form>
      </div>

      <div>
        
      </div>
    </div>
  );
}
