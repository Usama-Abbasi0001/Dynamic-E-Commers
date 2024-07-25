import React from 'react'

function Just() {
  return (
    <>
      <div className="flex justify-between lg:mt-[5rem] items-center mx-auto lg:w-[1180px] md:mt-[3rem] md:w-[700px] w-[300px] mt-[3rem] ">
        <div className="flex space-x-2 items-center   ">
          <div>
            <img src={require("./images/Rect.png")} alt="" />
          </div>
          <div className="text-red-600">Just For You</div>
        </div>

        <div className="">
          <button className="border  px-10 py-3 hover:bg-red-300 hover:rounded-[10px] hover:text-white">
            See All
          </button>
        </div>
      </div>
    </>
  );
}

export default Just;
