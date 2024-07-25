// import React from 'react';
// import './Cards.css';
// import { useNavigate } from 'react-router-dom';



// function Cards({ side, text, dolor, dolort, num, pimage, star }) {
//   const navigate = useNavigate();
//   function gotosopping(){
//     navigate("/shopping")
//   }
//   return (
//     <>
    

//       <div className="flex flex-col" >
//         <div className="w-[280px] h-[310px]  bg-gray-200 rounded-[4px] px-3">
//           <div
//             className="flex justify-center py-4"
//             >
//             <div
//               className="w-[60px] h-[40px] bg-red-500 text-white text-center p-2 rounded-[4px]
//               "
//               >
//               {side}
//             </div>
//             <div className="mt-16">
//               <img src={pimage} alt="" />
//             </div>
//             <div className="space-y-3">
//               <div>
//                 <img src={require("./images/Fill Heart.png")} alt="" />
//               </div>
//               <div>
//                 <img src={require("./images/Fill Eye.png")} alt="" />
//               </div>
//             </div>
//           </div>

//           <div
//             className="w-[260px] rounded-[4px] h-[50px] bg-black text-white text-center text-[20px] pt-2 cursor-pointer" onClick={gotosopping}
//             >
//             Add To Card
//           </div>
//         </div>

//         <div className="mt-4">
//           <div className="font-bold">{text}</div>
//           <div className="text-red-600 mt-1">
//             {dolor} <span className="text-gray-600">{dolort}</span>
//           </div>
//           <div className="mt-2 flex space-x-2 items-center">
//             <div>
//               <img src={require("./images/star.png")} alt="" />
//             </div>
//             <div>
//               <img src={require("./images/star.png")} alt="" />
//             </div>
//             <div>
//               <img src={require("./images/star.png")} alt="" />
//             </div>
//             <div>
//               <img src={require("./images/star.png")} alt="" />
//             </div>
//             <div>
//               <img src={star} alt="" />
//             </div>
//             <div className="text-gray-600">{num}</div>
//           </div>
//         </div>
//       </div>
    
//     </>
//   );
// }

// export default Cards;



import React from "react";
import "./Cards.css";
import { useNavigate } from "react-router-dom";

function Cards({ side, text, dolor, dolort, num, pimage, star }) {
  const navigate = useNavigate();

  function gotosopping() {
    navigate("/shopping", {
      state: {
        side,
        text,
        dolor,
        dolort,
        num,
        pimage,
        star,
      },
    });
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="w-[280px] h-[310px] bg-gray-200 rounded-[4px] px-3">
          <div className="flex justify-center py-4">
            <div className="w-[60px] h-[40px] bg-red-500 text-white text-center p-2 rounded-[4px]">
              {side}
            </div>
            <div className="mt-16">
              <img src={pimage} alt="" />
            </div>
            <div className="space-y-3">
              <div>
                <img src={require("./images/Fill Heart.png")} alt="" />
              </div>
              <div>
                <img src={require("./images/Fill Eye.png")} alt="" />
              </div>
            </div>
          </div>
          <div
            className="w-[260px] rounded-[4px] h-[50px] bg-black text-white text-center text-[20px] pt-2 cursor-pointer"
            onClick={gotosopping}
          >
            Add To Card
          </div>
        </div>

        <div className="mt-4">
          <div className="font-bold">{text}</div>
          <div className="text-red-600 mt-1">
            {dolor} <span className="text-gray-600">{dolort}</span>
          </div>
          <div className="mt-2 flex space-x-2 items-center">
            <div>
              <img src={require("./images/star.png")} alt="" />
            </div>
            <div>
              <img src={require("./images/star.png")} alt="" />
            </div>
            <div>
              <img src={require("./images/star.png")} alt="" />
            </div>
            <div>
              <img src={require("./images/star.png")} alt="" />
            </div>
            <div>
              <img src={star} alt="" />
            </div>
            <div className="text-gray-600">{num}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
