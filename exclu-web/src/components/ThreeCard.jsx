import React from 'react'

function ThreeCard(props) {
  return (
    <>
      <div className=" flex-coll">
        <div>
          <img src={props.assits} alt="" />
        </div>
        <div className="text-[30px] font-bold mt-7">{props.tom}</div>
        <div className="mt-2">{props.founder}</div>
        <div className="mt-4">
          <img src={require("./images/midea.png")} alt="" />
        </div>
      </div>
    </>
  );
}

export default ThreeCard;
