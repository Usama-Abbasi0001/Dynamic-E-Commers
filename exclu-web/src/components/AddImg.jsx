import React from 'react'

function AddImg({oneimg}) {
  return (
    <>
     <div className=' flex-row'>
    <div><img src={oneimg} alt="" className='w-[100px] h-[100px]' /></div>    
    </div> 
    </>
  )
}

export default AddImg;
