import React from 'react'
import Header from '../components/Header';
import HomeNavBar from '../components/HomeNavBar';
import ThreeLink from '../components/ThreeLink';
import Items from '../components/Items';
import Cards from '../components/Cards';
import image1 from '../components/images/remote.png';
import image7 from '../components/images/star.png';
import image2 from '../components/images/key.png';
import image3 from '../components/images/led.png';
import image4 from '../components/images/cher.png';
import image5 from '../components/images/Vect.png';
import image6 from '../components/images/star-half.png'
import Footer from '../components/Footer';
import Download from '../components/Download';
import Account from '../components/Account';
import Support from '../components/Support';
import Exclu from '../components/Exclu';
import AddImg from '../components/AddImg';
import remote1 from '../components/images/one.png';
import remote2 from '../components/images/twos.png';
import remote3 from '../components/images/six.png';
import remote4 from '../components/images/four.png';
import MainAddImg from '../components/MainAddImg';
import AddToCard from '../components/AddToCard';

function ShoppingPage() {
  return (
    <>
      <Header />
      <HomeNavBar />
      <ThreeLink />
  
      <div className="lg:flex  space-x-[4rem] lg:w-[1170px] w-[full] mx-auto mt-[6rem]">
        {/* <div className="flex flex-col space-y-10">
          <div className=" w-[120px] flex justify-center items-center  bg-gray-200 hover:bg-gray-400">
            {" "}
            <AddImg oneimg={remote1} />
          </div>
          <div className=" w-[120px] flex justify-center items-center  bg-gray-200 hover:bg-gray-400">
            <AddImg oneimg={remote2} />
          </div>
          <div className=" w-[120px] flex justify-center items-center  bg-gray-200 hover:bg-gray-400">
            {" "}
            <AddImg oneimg={remote3} />
          </div>
          <div className=" w-[120px] flex justify-center items-center  bg-gray-200 hover:bg-gray-400">
            <AddImg oneimg={remote4} />
          </div>
        </div> */}
        {/* <div className='w-[520px] flex justify-center items-center bg-gray-200 hover:bg-gray-400'>
          {" "}
          <MainAddImg />{" "}
        </div> */}
        <AddToCard/>
      </div>
    <Items />
      <div className="lg:flex  lg:w-[1170px] w-[full] mx-auto mt-[6rem] justify-between">
        <div className="md:flex lg:space-x-4 md:justify-around md:ps-0 ps-10">
          <Cards
            side="-40%"
            text="HAVIT HV-G92 Gamepad"
            dolor="$120"
            dolort="$160"
            num="(88)"
            pimage={image1}
            star={image7}
            id1="addp"
          />
          <Cards
            side="-35%"
            text="AK-900 Wired Keyboard"
            dolor="$960"
            dolort="$1120"
            num="(76)"
            pimage={image2}
            star={image5}
            id1="addp2"
          />
        </div>
        <div className="md:flex lg:space-x-4 md:justify-around  md:ps-0 ps-10 lg:mt-0 mt-10">
          <Cards
            side="-30%"
            text="IPS LCD Gaming Monitor"
            dolor="$370"
            dolort="$420"
            num="(99)"
            pimage={image3}
            star={image7}
            id1="addp3"
          />
          <Cards
            side="-25%"
            text="S-Series Comfort Chair"
            dolor="$560"
            dolort="$760"
            num="(89)"
            pimage={image4}
            star={image6}
            id1="addp4"
          />
        </div>
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

export default ShoppingPage;
