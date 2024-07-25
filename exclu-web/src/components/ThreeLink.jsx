import React from 'react'

function ThreeLink() {
  return (
    <>
      <div className="lg:ps-0  ">
        <div className="flex space-x-4 lg:w-[1250px] w-[full] mx-auto mt-[3rem] ps-10">
          <li className="hover:text-red-800 font-bold cursor-pointer">
            Account
          </li>

          <li className="hover:text-red-800 font-bold cursor-pointer">
            Gaming
          </li>

          <li className="hover:text-red-800 font-bold cursor-pointer">
            Havic HV G-92 Gamepad
          </li>
        </div>
      </div>
    </>
  );
}

export default ThreeLink;
