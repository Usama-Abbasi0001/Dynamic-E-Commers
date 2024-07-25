import React from 'react'

function Exclu() {
  return (
    <>
      <div>
        <div className="text-[24px]">Exclusive</div>
        <div className="mt-5">Subscribe</div>
        <div className="mt-5">Get 10% off your first order</div>
        <div className=" mt-5 flex w-[230px] border p-2">
          <input
            className=" border-solid bg-black"
            type="text"
            placeholder="Enter Your Email"
          />
          <div className="">
            <img src={require("./images/icon.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Exclu;
