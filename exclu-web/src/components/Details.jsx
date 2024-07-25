import React from 'react'
import './Details.css'
function Details() {
  return (
    <>
      <div
        id="inpss"
        className="lg:w-[800px]  h-[480px] pt-[40px] lg:mt-0 mt-[3rem] md:ms-10 px-[20px] "
      >
        <div className="md:flex md:space-y-0 space-y-5 justify-between">
          <div>
            <input
              className="bg-gray-100 py-2 ps-2 rounded-[4px]"
              type="text"
              placeholder="Your Name*"
            />
          </div>
          <div>
            <input
              className="bg-gray-100 py-2 ps-2 rounded-[4px]"
              type="text"
              placeholder="Your Email*"
            />
          </div>
          <div>
            <input
              className="bg-gray-100 py-2 ps-2 rounded-[4px]"
              type="text"
              placeholder="Your Phone*"
            />
          </div>
        </div>
        <div className="md:mt-[3rem] mt-5">
          <input
            className="bg-gray-100 py-2 ps-2 rounded-[4px] lg:w-[760px] md:w-[640px] h-[250px] "
            type="text"
            placeholder="Your Massage"
          />
        </div>
        <div className=" mt-10 justify-end flex">
          <button className=" cursor-pointer hover:bg-red-500 bg-red-600 text-white py-4 rounded-[4px] px-10 ">
            Send Massage
          </button>
        </div>
      </div>
    </>
  );
}

export default Details;
