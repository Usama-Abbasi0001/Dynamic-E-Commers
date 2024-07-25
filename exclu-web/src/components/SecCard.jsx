import React from 'react'

function SecCard(props) {
  return (
    <>
      <div div className="flex flex-col">
        <div className="w-[280px] h-[290px]  bg-gray-200 rounded-[4px]">
          <div className="flex justify-center py-4">
            <div className="mt-12">
              <img src={props.zimage} alt="" />
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

          <div className="mt-10">
            <div className="font-bold">{props.main}</div>
            <div className="text-red-600 mt-1">
              {props.dolur} <span className="text-gray-600">{props.but}</span>
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
                <img src={require("./images/star.png")} alt="" />
              </div>
              <div className="text-gray-600">(65)</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecCard;
