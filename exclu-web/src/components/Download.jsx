import React from 'react'

function Download() {
  return (
    <>
         <div className="space-y-5">
        <div className="text-[24px]">Download App</div>
        <div className="">Save $3 with App New User Only</div>
        <div>
          <img src={require("./images/three.png")} alt="" />
        </div>
        <div>
          <img src={require("./images/face.png")} alt="" />
        </div>
      </div> 
    </>
  )
}

export default Download;
