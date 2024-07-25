import React from 'react'

function Delivery(props) {
  return (
    <>
      <div className="text-center w-[300px] items-center flex flex-col lg:mt-0 mt-10">
        <div>
          <img src={props.thar} alt="" />
        </div>
        <div className="mt-4 text-[18px] font-bold">{props.free}</div>
        <div className="text-[14px]">{props.order}</div>
      </div>
    </>
  );
}

export default Delivery;
