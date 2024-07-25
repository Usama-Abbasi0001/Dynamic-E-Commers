import React from 'react'
import './Write.css'
function Write() {
  return (
    <>
      <div
        id="sider"
        className="flex-col px-[20px] lg:ms-0 md:ms-[15rem] ms-[3rem] py-[20px]"
      >
        <div className="items-center mt-6 flex space-x-4">
          <div>
            <img src={require("./images/cols.png")} alt="" />
          </div>
          <div>Call To Us</div>
        </div>
        <div className="w-[280px] mt-5">
          <hr />
        </div>
        <div className="flex space-x-4 mt-5 items-center">
          <div>
            <img src={require("./images/mail.png")} alt="" />
          </div>
          <div>Write To US</div>
        </div>
        <div className="mt-10">
          Fill out our form and we will contact you within 24 hours.
        </div>
        <div className="mt-10">Emails: customer@exclusive.com</div>
        <div className="mt-10">Emails: support@exclusive.com</div>
      </div>
    </>
  );
}

export default Write;
