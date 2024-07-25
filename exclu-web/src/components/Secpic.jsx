import React from 'react'

function Secpic() {
  return (
    <>
      <div className="flex-col">
        <div className="position">
          <img src={require("./images/secend.png")} alt="" />
        </div>
        <div className="relative md:-top-[7rem] -top-[5rem] text-white ps-8">
          <div className="md:text-[24px]  font-bold opacity-6 ">Perfume</div>
          <div className="md:text-[14px] text-[10px]">
            GUCCI INTENSE OUD EDP
          </div>
          <div className="md:text-[16px]">
            <u>Shop Now</u>
          </div>
        </div>
      </div>
    </>
  );
}

export default Secpic;
