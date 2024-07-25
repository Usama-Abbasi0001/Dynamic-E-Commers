import React from 'react'
import { Cross } from './utils/Icons';

function SideBar() {
  return (
    <>
      <div className="w-[300px]  border-r-2 border-gray-200  hidden lg:flex flex-col space-y-5 pt-10 px-10">
        <div className="flex justify-between">
          <div className="hover:underline hover:text-red-500 cursor-pointer font-bold">
            Woman’s Fashion
          </div>
          <Cross />
        </div>
        <div className="flex justify-between">
          <div className="hover:underline hover:text-red-500 cursor-pointer font-bold">
            Men’s Fashion
          </div>
          <Cross />
        </div>
        <div className="hover:underline hover:text-red-500 cursor-pointer font-bold">
          Electronics
        </div>
        <div className="hover:underline hover:text-red-500 cursor-pointer font-bold">
          Home & Lifestyle
        </div>
        <div className="hover:underline hover:text-red-500 cursor-pointer font-bold">
          Medicine
        </div>
        <div className="hover:underline hover:text-red-500 cursor-pointer font-bold">
          Sports & Outdoor
        </div>
        <div className="hover:underline hover:text-red-500 cursor-pointer font-bold">
          Baby’s & Toys
        </div>
        <div className="hover:underline hover:text-red-500 cursor-pointer font-bold">
          Groceries & Pets
        </div>
        <div className="hover:underline hover:text-red-500 cursor-pointer font-bold">
          Health & Beauty
        </div>
      </div>
    </>
  );
}

export default SideBar;
