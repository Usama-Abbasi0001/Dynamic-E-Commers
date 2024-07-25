import React from 'react'

function NewCard({ whyp, kind, dollar, chang, half }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-[280px] h-[300px]  bg-gray-200 rounded-[4px] px-4">
          <div className="flex justify-center py-4">
            <div
              className="w-[60px] h-[40px] bg-green-400 text-white text-center p-2 
         rounded-[4px]"
            >
              NEW
            </div>
            <div className="mt-16">
              <img src={whyp} alt="" />
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
        </div>

        <div className="mt-4">
          <div className="font-bold">{kind}</div>
          <div className=" flex space-x-2 items-center">
            <div className="text-red-600 mt-1">{dollar}</div>
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
              <img src={half} alt="" />
            </div>
            <div className="text-gray-600">{chang}</div>
          </div>
          <div className="flex space-x-1 mt-2 ">
            <input type="radio" />
            <input type="radio" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewCard;
