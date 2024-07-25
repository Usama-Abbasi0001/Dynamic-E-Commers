import React from 'react'
import Header from '../components/Header';
import HomeNavBar from '../components/HomeNavBar';
import HomAbt from '../components/HomAbt';
import ActiveCard from '../components/ActiveCard';
import card1 from '../components/images/cacke.png';
import card2 from '../components/images/dollar.png';
import card3 from '../components/images/pers.png';
import card4 from '../components/images/monybug.png'
import ThreeCard from '../components/ThreeCard';
import sallar1 from '../components/images/sallar.png';
import sallar2 from '../components/images/manager.png';
import sallar3 from '../components/images/assistent.png'
import Delivery from '../components/Delivery';
import black1 from '../components/images/carblack.png';
import black2 from '../components/images/carblack.png';
import black3 from '../components/images/carblack.png';
import Exclu from '../components/Exclu';
import Support from '../components/Support';
import Account from '../components/Account';
import Download from '../components/Download';
import Footer from '../components/Footer';
import Story from '../components/Story';
import OneImage from '../components/OneImage';
function AboutPage() {
  return (
    <>
      <Header />
      <HomeNavBar />
      <HomAbt />
      <div className="lg:flex justify-between ms-auto lg:w-[1180px] w-full md:mt-[3rem] mt-[1rem]">
        <Story />
        <OneImage />
      </div>
      <div className="lg:flex  lg:w-[1180px] w-full mx-auto mt-[10rem] lg:space-x-[2rem]">
        <div className="md:flex lg:space-x-[3rem] md:space-y-0 space-y-6 md:justify-around md:ps-0 ps-10">
          <ActiveCard
            chang={card1}
            number="10.5k"
            lines="Sallers active our site"
          />
          <ActiveCard
            chang={card2}
            number="33k"
            lines="Mopnthly Produduct Sale"
          />
        </div>
        <div className="md:flex lg:space-x-[3rem] md:space-y-0 space-y-6 md:justify-around  md:ps-0 ps-10 lg:mt-0 mt-10">
          <ActiveCard
            chang={card3}
            number="45.5k"
            lines="Customer active in our site"
          />
          <ActiveCard
            chang={card4}
            number="25k"
            lines="Anual gross sale in our site"
          />
        </div>
      </div>
      <div className="lg:flex  lg:w-[1180px] w-full mx-auto mt-[10rem] lg:space-x-[3rem]">
        <div className="md:flex lg:space-x-[3rem] md:space-y-0 space-y-6 md:justify-around md:ps-0 ps-10">
          <ThreeCard
            assits={sallar1}
            tom="Tom Cruise"
            founder="Founder & Chairman"
          />
          <ThreeCard
            assits={sallar2}
            tom="Emma Watson"
            founder="Managing Director"
          />
        </div>
        <div className="md:flex lg:space-x-[3rem] md:space-y-0 space-y-6 md:justify-around  md:ps-0 ps-10 lg:mt-0 mt-10">
          <ThreeCard
            assits={sallar3}
            tom="Will Smith"
            founder="Product Designer"
          />
        </div>
      </div>
      <div className="lg:flex   lg:w-[1250px] w-[full] mx-auto mt-[10rem] lg:justify-evenly  lg:ps-0 md:ps-[15rem] ps-[4rem]">
        <Delivery
          free="FREE AND FAST DELIVERY"
          order="Free delivery for all orders over $140"
          thar={black1}
        />
        <Delivery
          free="24/7 CUSTOMER SERVICE"
          order="Friendly 24/7 customer support"
          thar={black2}
        />
        <Delivery
          free="MONEY BACK GUARANTEE"
          order="We reurn money within 30 days"
          thar={black3}
        />
      </div>
      <div className="w-full bg-black p-16 text-white mt-8 lg:flex justify-between">
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

export default AboutPage;
