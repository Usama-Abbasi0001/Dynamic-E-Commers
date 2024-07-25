import React from 'react'
import { Link } from 'react-router-dom';

function HomAbt() {
  return (
    <>
      <div className="lg:ps-0 ">
        <div className="flex space-x-2 lg:w-[1250px] w-[full] mx-auto mt-[3rem] ps-10">
          <Link to="/home" className="hover:text-red-800 font-bold">
            Home
          </Link>
          <div>/</div>
          <Link to="/about" className="hover:text-red-800 font-bold">
            About
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomAbt;
