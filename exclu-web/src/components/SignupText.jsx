import React from "react";
import { Link } from "react-router-dom";


function SignupText() {
  return (
    <>
      <div className="lg:mt-[9rem] mt-[5rem] mx-auto flex flex-col lg:justify-start justify-center items-center lg:items-start">
        <div className="text-[36px]">Create an account</div>
        <div className="text-[16px]">Enter your details below</div>
        <form >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name..."
              className="mt-[30px] w-[300px] border-solid border-b-2 border-black p-2"
            />
          </div>
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
          <div className="flex flex-col justify-between mt-[3rem] w-[300px] items-center">
            <div>
              <button
                
                className="text-white bg-red-600 rounded-[10px] hover:bg-white font-bold hover:text-black hover:border-2 hover:border-sky-500 w-[300px] py-3"
              >
                Create Account
              </button>
              <div className="flex justify-center items-center gap-5 py-2 w-[300px] border-2 border-gray-500 mt-[20px] text-center rounded-[10px]">
                <div>
                  <img
                    src={require("../components/images/google.png")}
                    alt="Google sign up"
                  />
                </div>
                <div>Sign up with Google</div>
              </div>
            </div>
            <div className="mt-[20px]">
              Already Have Account?{" "}
              <Link
                to="/login"
                className="hover:text-red-600 cursor-pointer underline"
              >
                Log in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupText;

// import React from "react";
// import { Link } from "react-router-dom";
// import { useFormik } from "formik";
// import { signUpSchema } from "../schemas";

// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
// };

// function SignupText() {
//   const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
//     initialValues: initialValues,
//     validationSchema:signUpSchema,
//     onSubmit: (values) => {
//       console.log( values);
//     },
//   });

//   return (
//     <>
//       <div className="lg:mt-[9rem] mt-[5rem] mx-auto flex flex-col lg:justify-start justify-center items-center lg:items-start">
//         <div className="text-[36px]">Create an account</div>
//         <div className="text-[16px]">Enter your details below</div>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <input
//               type="text"
//               name="name"
//               autoComplete="off"
//               placeholder="Name..."
//               value={values.name}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className="mt-[30px] w-[300px] border-solid border-b-2 border-black p-2 "
//             />
//           </div>
//           <div>
//             <input
//               type="email"
//               name="email"
//               autoComplete="off"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="Email or Phone Number"
//               className="mt-[30px] w-[300px] border-solid border-b-2 border-black p-2"
//             />
//           </div>
//           <div>
//             <input
//               className="mt-[30px] w-[300px] border-solid border-b-2 border-black p-2"
//               type="password"
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               autoComplete="off"
//               name="password"
//               placeholder="Password"
//             />
//           </div>
//           <div className="flex flex-col justify-between mt-[3rem] w-[300px] items-center">
//             <div>
//               <button
//                 type="submit"
//                 className="text-white bg-red-600 rounded-[10px] hover:bg-white font-bold hover:text-black hover:border-2 hover:border-sky-500 w-[300px] py-3"
//               >
//                 Create Account
//               </button>
//               <div className="flex justify-center items-center gap-5 py-2 w-[300px] border-2 border-gray-500 mt-[20px] text-center rounded-[10px]">
//                 <div>
//                   <img
//                     src={require("../components/images/google.png")}
//                     alt="Google sign up"
//                   />
//                 </div>
//                 <div>Sign up with Google</div>
//               </div>
//             </div>
//             <div className="mt-[20px]">
//               Already Have Account?{" "}
//               <Link
//                 to="/login"
//                 className="hover:text-red-600 cursor-pointer underline"
//               >
//                 Log in
//               </Link>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default SignupText;

// import React from 'react'
// import { Link } from 'react-router-dom';
// import  {useformik } from 'formik'

// const initialValues = {
//   name:"",
//   email:"",
//   password:""

// }
// function SignupText() {

// const { values, error, handleBlur , handleChange, handleSubmit} =  useformik({
//     initialValues : initialValues,
//     onsubmit: (values) =>{

//     }
//   });
//   // console.log(
//   //   Formik
//   // )
//   return (
//     <>
//       <div className="lg:mt-[9rem] mt-[5rem] mx-auto flex flex-col lg:justify-start justify-center items-center lg:items-start" onSubmit={handleSubmit}>
//         <div className="text-[36px]">Create an account</div>
//         <div className="text-[16px]">Enter your details below</div>
//         <div>
//           <input
//             type="name"
//             name="name"
//             placeholder="name..."
//             value={values.name}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className="mt-[30px] w-[300px] border-solid border-b-2 border-black p-2 "
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             value={values.email}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             placeholder="Email or Phone Number"
//             className="mt-[30px] w-[300px] border-solid border-b-2 border-black p-2"
//           />
//         </div>
//         <div>
//           <input
//             className="mt-[30px] w-[300px] border-solid border-b-2 border-black p-2"
//             type="password"
//             value={values.password}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             name="password"
//             placeholder="Password"
//           />
//         </div>
//         <div className="flex flex-col justify-between mt-[3rem] w-[300px] items-center">
//           <div>
//             <button className="text-white  bg-red-600 rounded-[10px] hover:bg-white font-bold hover:text-black hover:border-2 hover:border-sky-500 w-[300px] py-3">
//               Create Account
//             </button>
//             <div className="flex justify-center items-center gap-5 py-2 w-[300px] border-2 border-gray-500 mt-[20px] text-center rounded-[10px]">
//               <div>
//                 <img src={require("../components/images/google.png")} alt="" />
//               </div>
//               <div>Sign up with Google</div>
//             </div>
//           </div>
//           <div className="mt-[20px]">
//             Already Have Account ?{" "}
//             <Link
//               to="/login"
//               className="hover:text-red-600 cursor-pointer underline"
//             >
//               Log in
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignupText;
