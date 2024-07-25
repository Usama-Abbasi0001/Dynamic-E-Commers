
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { database } from './firebaseconfig';
import {createUserWithEmailAndPassword} from 'firebase/auth'
function LoginText() {



  const navigate = useNavigate();
  // function gotoHome(){
  //   navigate('/home')
  // }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const email= e.target.email.value
    const password= e.target.password.value

    createUserWithEmailAndPassword(database, email,password).then(data=>{
      console.log(data,"authData")
      navigate('/home')
      alert("Login SuccessFuly")
    })
  }
  return (
    <>
      <div className="lg:mt-[9rem] mt-[5rem] mx-auto flex flex-col lg:justify-start justify-center items-center lg:items-start">
        <div className="text-[36px]">Log in to Exclusive</div>
        <div className="text-[16px]">Enter your details below</div>
        <form  onSubmit={(e)=>handleSubmit(e)}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email or Phone Number"
              className="mt-[30px] w-[300px] border-solid border-b-2 border-black p-2"
            />   
          </div>
          <div>
            <input
              className="mt-[30px] w-[300px] border-solid border-b-2 border-black p-2"
              type="password"
              name="password" 
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between mt-[3rem] w-[300px] items-center">
            <div>
              <button
            type='submit'
                // onClick={gotoHome}
                className="text-white bg-red-600 rounded-[10px] hover:bg-white font-bold hover:text-black hover:border-2 hover:border-sky-500 w-[100px] py-3"
              >
                Log In{" "}
              </button>
            </div>
            <div className="text-red-600 cursor-pointer">Forget Password?</div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginText;
