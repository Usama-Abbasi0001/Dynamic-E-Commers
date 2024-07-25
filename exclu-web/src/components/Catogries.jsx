import React from 'react'

function Catogries() {
  return (
    <>
      <div className="flex space-x-2 items-center lg:mt-[5rem] mt-6 lg:w-[1180px] w-[full] lg:mx-auto md:mx-8 mx-6">
        <div>
          <img src={require("./images/Rect.png")} alt="" />
        </div>
        <div className="text-red-600">Categories</div>
      </div>

      <div className="md:flex justify-between items-center mt-[1rem] lg:w-[1180px] w-[full] lg:mx-auto md:mx-8 mx-6">
        <div className="text-[30px] text-black font-bold">
          Browse By Category
        </div>

        <div className="flex  md:space-x-3 justify-between md:mt-0 mt-3">
          <div>
            <img src={require("./images/Left.png")} alt="" />
          </div>
          <div>
            <img src={require("./images/Right.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Catogries;
