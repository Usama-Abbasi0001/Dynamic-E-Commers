import React from 'react'

function Featured() {
  return (
    <>
      <div className="flex space-x-2 items-center lg:mt-[5rem] mt-6 lg:w-[1180px] w-[full] lg:mx-auto md:mx-8 mx-6">
        <div>
          <img src={require("./images/Rect.png")} alt="" />
        </div>
        <div className="text-red-600">Featured</div>
      </div>

      <div className="md:flex justify-between items-center mt-[1rem] lg:w-[1180px] w-[full] lg:mx-auto md:mx-8 mx-6">
        <div className="text-[30px] text-black font-bold">New Arrival </div>
      </div>
    </>
  );
}

export default Featured;
