import React from 'react'

function Month() {
  return (
    <>
      <div className="flex space-x-2 items-center lg:mt-[5rem] mt-6 lg:w-[1180px] w-[full] lg:mx-auto md:mx-8 mx-6">
        <div>
          <img src={require("./images/Rect.png")} alt="" />
        </div>
        <div className="text-red-600">This Month</div>
      </div>

      <div className="md:flex justify-between items-center mt-[1rem] lg:w-[1180px] w-[full] lg:mx-auto md:mx-8 mx-6">
        <div className="text-[30px] text-black font-bold">
          Best Selling Products
        </div>

        <div className="md:mt-0 mt-3">
          <div className="">
            <button className="bg-red-600 text-white px-5 py-3 rounded-[4px]">
              View All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Month;
