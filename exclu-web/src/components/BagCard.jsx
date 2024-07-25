import React from 'react'

function BagCard(props) {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-[280px] px-3 h-[330px]  bg-gray-200 rounded-[4px]">
          <div className="flex justify-center py-4">
            {/* <div className="w-[60px] h-[40px] bg-red-500 text-white text-center p-2 rounded-[4px">
              {props.three}
            </div> */}
            <div className="mt-16">
              <img src={props.main} alt="" />
            </div>
            <div className="space-y-3">
              <div>
                <img src={require("./images/delet.png")} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[260px] rounded-[4px] h-[50px] bg-black text-white text-center text-[20px] pt-2 cursor-pointer flex items-center space-x-2 justify-center">
            <div>
              <img src={require("./images/bugg.png")} alt="" />
            </div>
            <div>Add To Card</div>
          </div>
        </div>

        <div className="mt-4  ">
          <div>{props.bug}</div>
          <div className="flex space-x-3 mt-2">
            <div className="text-red-600">$960</div>
            <div>
              <del className="text-gray-600">{props.gray}</del>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BagCard;
