// import React, { useState } from 'react'
// import { Car, Hearts, Return } from './utils/Icons';
// function AddToCard() {


//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };
//   return (
//     <>
//       <div>
//         <div>Havic HV G-92 Gamepad</div>
//         <div className="mt-2 flex space-x-2 items-center">
//           <div>
//             <img src={require("./images/star.png")} alt="" />
//           </div>
//           <div>
//             <img src={require("./images/star.png")} alt="" />
//           </div>
//           <div>
//             <img src={require("./images/star.png")} alt="" />
//           </div>
//           <div>
//             <img src={require("./images/star.png")} alt="" />
//           </div>
//           <div>
//             <img src={require("./images/Vect.png")} alt="" />
//           </div>
//           <div>(150 Reviews)</div>
//           <div>|</div>
//           <div className="text-green-300">In Stock</div>
//         </div>
//         <div className="text-[30px]">$192.00</div>
//         <div className="mt-5 w-[380px]">
//           PlayStation 5 Controller Skin High quality vinyl with air channel
//           adhesive for easy bubble free install & mess free removal Pressure
//           sensitive.
//         </div>
//         <hr className="mt-5" />
//         <div className="flex mt-4 items-center space-x-4">
//           <div>Colours:</div>
//           <div className="flex space-x-1">
//             <input type="radio" />
//             <input type="radio" />
//           </div>
//         </div>
//         <div className="flex space-x-4 mt-2">
//           <div>Size:</div>
//           <div className="flex space-x-3">
//             <div className="w-[30px] hover:border-2 hover:border-red-400 hover:rounded-[6px] flex justify-center items-center cursor-pointer hover:bg-red-500 hover:text-white">
//               XS
//             </div>
//             <div className="w-[30px] hover:border-2 hover:border-red-400 hover:rounded-[6px] flex justify-center items-center cursor-pointer hover:bg-red-500 hover:text-white">
//               S
//             </div>
//             <div className="w-[30px] hover:border-2 hover:border-red-400 hover:rounded-[6px] flex justify-center items-center cursor-pointer hover:bg-red-500 hover:text-white">
//               M
//             </div>
//             <div className="w-[30px] hover:border-2 hover:border-red-400 hover:rounded-[6px] flex justify-center items-center cursor-pointer hover:bg-red-500 hover:text-white">
//               L
//             </div>
//             <div className="w-[30px] hover:border-2 hover:border-red-400 hover:rounded-[6px] flex justify-center items-center cursor-pointer hover:bg-red-500 hover:text-white">
//               XL
//             </div>
//           </div>
//         </div>
//         <div className="flex  items-center space-x-4 ">
//           <div className="border-2 w-[130px] flex justify-between mt-5  items-center rounded-[6px]">
//             <div
//               className="text-[30px] flex justify-center items-center font-bold border w-[40px] hover:bg-red-500 hover:text-white cursor-pointer rounded-[6px]"
//               onClick={decrement}
//             >
//               -
//             </div>
//             <div>{count}</div>
//             <div
//               className="text-[30px] flex justify-center items-center font-bold border hover:bg-red-500 hover:text-white cursor-pointer w-[40px] rounded-[6px]"
//               onClick={increment}
//             >
//               +
//             </div>
//           </div>
//           <button className="w-[130px] p-3 mt-5 hover:bg-red-700 bg-red-600 text-white rounded-[10px]">
//             Buy Now
//           </button>
//           <div className="border-2 p-3 mt-5 rounded-[10px] hover:bg-red-600">
//             <Hearts />
//           </div>
//         </div>
//         <div className="mt-5 border-2 flex items-center space-x-3 p-3">
//             <Car />
//           <div>
//             <div>Free Delivery</div>
//             <div className="text-[12px] underline">
//               Enter your postal code for Delivery Availability
//             </div>
//           </div>
//         </div>
//         <div className=" border-b-2 border-r-2 border-l-2 flex items-center space-x-3 p-3">
//          <Return/>
//           <div>
//             <div>Return Delivery</div>
//             <div className="text-[12px] underline">
//               Free 30 Days Delivery Returns. Details
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AddToCard;

import React from "react";
import { useLocation } from "react-router-dom";

function ShoppingPage() {
  const location = useLocation();
  const { side, text, dolor, dolort, num, pimage, star } = location.state || {};

  return (
    <div>
      {side && (
        <div>
          <div className="flex flex-row space-x-4 w-[1180px]">
            <div className="w-[280px] h-[310px] bg-gray-200 rounded-[4px] px-3">
              <div className="flex  justify-center py-4">
                {/* <div className="w-[60px] h-[40px] bg-red-500 text-white text-center p-2 rounded-[4px]">
                  {side}
                </div> */}
                <div className="mt-16">
                  <img src={pimage} alt="product"/>
                </div>
                {/* <div className="space-y-3">
                  <div>
                    <img src={require("./images/Fill Heart.png")} alt="heart" />
                  </div>
                  <div>
                    <img src={require("./images/Fill Eye.png")} alt="eye" />
                  </div>
                </div> */}
              </div>
              {/* <div className="w-[260px] rounded-[4px] h-[50px] bg-black text-white text-center text-[20px] pt-2 cursor-pointer">
                Add To Card
              </div> */}
            </div>

            <div className="mt-4">
              <div className="font-bold">{text}</div>
              <div className="text-red-600 mt-1">
                {dolor} <span className="text-gray-600">{dolort}</span>
              </div>
              <div className="mt-2 flex space-x-2 items-center">
                <div>
                  <img src={require("./images/star.png")} alt="star" />
                </div>
                <div>
                  <img src={require("./images/star.png")} alt="star" />
                </div>
                <div>
                  <img src={require("./images/star.png")} alt="star" />
                </div>
                <div>
                  <img src={require("./images/star.png")} alt="star" />
                </div>
                <div>
                  <img src={star} alt="star" />
                </div>
                <div className="text-gray-600">{num}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingPage;
