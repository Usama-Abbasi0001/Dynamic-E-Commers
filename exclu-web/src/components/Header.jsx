import React from "react";

function Header() {
  return (
    <>
      <div className="lg:text-[18px] md:text-[16px] text-[14px] py-2 bg-black text-white flex md:flex-row flex-col items-center text-center">
        <div className="lg:basis-[70%] basis-[75%] lg:text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <a href="" className="text-white hover:text-red-400">
            <u>ShopNow</u>
          </a>
        </div>
        <div className="basis-[20%] lg:text-[18px] md:text-[16px] text-[14px] flex space-x-3">
          <div>English</div>
          <div>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
