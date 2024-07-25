import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Sideimg from '../components/Sideimg';
import LoginText from "../components/LoginText";
import Exclu from "../components/Exclu";
import Support from "../components/Support";
import Account from '../components/Account';
import Download from "../components/Download";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Header />
      <NavBar />
      <div className="flex items-center lg:flex-row flex-col-reverse">
        <Sideimg />
        <LoginText />
      </div>
      <div className="w-[full] bg-black p-16 text-white mt-[6rem] lg:flex justify-between">
        <div className="md:flex lg:space-x-20 md:space-x-10  md:space-y-0 space-y-10">
          <Exclu />
          <Support />
          <Account
            one="Account"
            two="My Account"
            three="Login / Register"
            four="Cart"
            five="Wishlist"
            six="Shop"
          />
        </div>
        <div className="md:flex md:space-x-20 ">
          <Account
            one="Quick Link"
            two="Privacy Policy"
            three="Terms Of Use"
            four="FAQ"
            five="contact"
          />
          <Download/>
        </div>
      </div>
      <div className="w-[full] bg-black text-center">
        <Footer/>
      </div>
    </>
  );
}

export default Login;
