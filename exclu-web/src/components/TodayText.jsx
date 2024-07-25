import React from 'react'

function TodayText() {
  return (
    <>
      <div
        id="main"
        className="flex space-x-2 items-center lg:mt-[5rem] mt-6 lg:w-[1180px] w-fll lg:mx-auto md:mx-8 mx-6"
      >
        <div>
          <img src={require("./images/Rect.png")} alt="" />
        </div>
        <div className="text-red-600">Today's</div>
      </div>

      <div className="md:flex justify-between items-center mt-[1rem] lg:w-[1180px] w-full  lg:mx-auto md:mx-8 mx-6">
        <div className="md:flex md:space-x-10  items-center">
          <div className="text-[30px] text-black font-semibold">
            Flash Sales
          </div>
          <div className="flex space-x-4">
            <div className="text-center">
              <div className="font-bold">Days</div>
              <div className="text-[26px] text-black font-semibold">03</div>
            </div>
            <div className="text-red-600 text-[30px]">:</div>
            <div className="text-center">
              <div className="font-bold">Hours</div>
              <div className="text-[26px] text-black font-semibold">23</div>
            </div>
            <div className="text-red-600 text-[30px]">:</div>
            <div className="text-center">
              <div className="font-bold">Minutes</div>
              <div className="text-[26px] text-black font-semibold">10</div>
            </div>
            <div className="text-red-600 text-[30px]">:</div>
            <div className="text-center">
              <div className="font-bold">Seconds</div>
              <div className="text-[26px] text-black font-semibold">56</div>
            </div>
          </div>
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

export default TodayText;
