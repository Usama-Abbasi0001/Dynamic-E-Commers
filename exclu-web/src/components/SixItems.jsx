import React from 'react'

function SixItems(props) {
  return (
    <>
      <div className="lg:mt-[5rem] mt-[3rem] mx-auto">
        <div className="w-[180px] h-[150px] flex items-center gap-[10px] rounded-[6px] justify-center border-2 border-black hover:bg-red-600 hover:text-white hover:border-2 hover:border-red-500 ">
          <div>
            <img src={props.ximage} alt="" />
          </div>
          <div>{props.name}</div>
        </div>
      </div>
    </>
  );
}

export default SixItems;
