import React from 'react'

function Account(props) {
  return (
    <>
      <div className="lg:space-y-5 space-y-2 md:mt-0 mt-10">
        <div className="text-[24px]">{props.one}</div>
        <div>{props.two}</div>
        <div>{props.three}</div>
        <div>{props.four}</div>
        <div>{props.five}</div>
        <div>{props.six}</div>
      </div>
    </>
  );
}

export default Account;
