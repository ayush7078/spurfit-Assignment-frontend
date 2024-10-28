import React from 'react';
import { AiOutlineArrowLeft, AiOutlineEdit } from 'react-icons/ai';

const Header = ({ onSave }) => {
  return (
    <header className="flex items-center justify-between bg-gray-200 p-4 shadow-md">
      <div className="flex items-center space-x-3">
        <AiOutlineArrowLeft className="cursor-pointer text-black" size={24} />
        <span className="text-lg font-semibold text-black">Run Workout</span>
        <AiOutlineEdit className="cursor-pointer ml-2 text-black" size={20} />
      </div>
      <button onClick={onSave} className="bg-gray-500 text-white px-4 py-2 rounded-md font-semibold shadow-md">
        Save Workout
      </button>
    </header>
  );
};

export default Header;
