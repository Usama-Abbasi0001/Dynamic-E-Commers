import React from 'react'

function ActiveCard(props) {
  return (
    <>
      <div className="w-[260px] h-[230px] border hover:bg-red-600 hover:text-white text-black text-center flex flex-col justify-center items-center rounded-[6px]">
        <div>
          <img src={props.chang} alt="" />
        </div>
        <div className="text-[30px] font-bold mt-5">{props.number}</div>
        <div>{props.lines}</div>
      </div>
    </>
  );
}

export default ActiveCard;
