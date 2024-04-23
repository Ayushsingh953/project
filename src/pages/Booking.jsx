import React from "react";
import logo1 from "../components/assets/bookslot.avif";

export default function Booking() {
  return (
    <div className="flex justify-center items-center px-20 bg-blue-50 py-0">
      

      <div className="max-w-md w-full px-5 py-5 mt-10 mb-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Let Book your appointment</h2>
      <form className='px-[-20] py-10'>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input type="tel" id="phone" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input type="date" id="date" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
          <input type="time" id="time" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (optional)</label>
          <textarea id="message" rows={3} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="bg-violet-500 text-white px-4 py-2 rounded-2xl hover:bg-violet-600 w-full">Book Your Slot</button>
      </form>
    </div>

    <div className='py-[-40] px-10 ml-2 mt-0'>
        <img src={logo1} alt="help" width={650} height={650} className='rounded-2xl'/>
      </div>

    </div>
  );
}