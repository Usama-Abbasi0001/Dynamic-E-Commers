import React from 'react'

function BackCard() {
  return (
    <>
      <div className="text-white">
        <div className="text-green-600">Categories</div>
        <div className="text-[48px] font-bold leading-[4rem] mt-16">
          Enhance Your <br /> Music Experience
        </div>
        <div className="flex space-x-8">
          <div className="mt-10 w-[60px] h-[60px] p-2 font-bold text-[12px] leading-5 bg-white text-black rounded-[50%] text-center">
            <div>23</div>
            <div className="text-[10px]">Hours</div>
          </div>
          <div className="mt-10 w-[60px] h-[60px] p-2 font-bold text-[12px] leading-5 bg-white text-black rounded-[50%] text-center">
            <div>05</div>
            <div className="text-[10px]">Days</div>
          </div>
          <div className="mt-10 w-[60px] h-[60px] p-2 font-bold text-[12px] leading-5 bg-white text-black rounded-[50%] text-center">
            <div>59</div>
            <div className="text-[10px]">Minutes</div>
          </div>
          <div className="mt-10 w-[60px] h-[60px] p-2 font-bold text-[12px] leading-5 bg-white text-black rounded-[50%] text-center">
            <div>35</div>
            <div className="text-[10px]">Seconds</div>
          </div>
        </div>
        <div>
          <button className="bg-green-400 rounded-[6px] py-3 px-10 mt-[3rem] text-white">
            Bay Now!
          </button>
        </div>
      </div>
    </>
  );
}

export default BackCard;
