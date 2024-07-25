import React from 'react';
import Header from '../components/Header';
import HomeNavBar from '../components/HomeNavBar';
import HomCon from '../components/HomCon';
import Write from '../components/Write';
import Details from '../components/Details';
import Exclu from '../components/Exclu';
import Support from '../components/Support';
import Footer from '../components/Footer';
import Download from '../components/Download';
import Account from '../components/Account';
function ContactPage() {
  return (
    <>
      <Header />
      <HomeNavBar />
      <HomCon />
      <div className="lg:flex  lg:w-[1200px] pe-10 w-[full] mx-auto mt-[4rem] lg:justify-between md:justify-center">
        <Write />
        <Details />
      </div>
      <div className="w-[full] bg-black p-16 text-white mt-8 lg:flex justify-between">
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
          <Download />
        </div>
      </div>
      <div className="w-[full] bg-black text-center">
        <Footer />
      </div>
    </>
  );
}

export default ContactPage
