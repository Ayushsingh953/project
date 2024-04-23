import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-full w-64 fixed top-0 left-0 overflow-y-auto">
      <div className="p-4 text-white">
        <h2 className="text-lg font-semibold mb-4">Period Tracker</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white">Home</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white">Calendar</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white">Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
