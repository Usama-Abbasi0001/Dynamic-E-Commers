import React from 'react'

function OneImage() {
  return (
    <>
      <div className="lg:w-[570px] lg:mt-0 mt-[2rem] lg:ps-0 md:ps-[40px] md:mx-0 mx-4">
        <img
          className=" h-[500px]"
          src={require("./images/sidepics.png")}
          alt=""
        />
      </div>
    </>
  );
}

export default OneImage;