import React from 'react'
import {Link} from 'react-router-dom'
import {Hearts, Seacrh, Shopping, Users} from './utils/Icons'

function HomeNavBar() {
      function toggler() {
        var a = document.getElementById("link-1");
        a.style.display = "flex";
        var b = document.getElementById("open");
        b.style.display = "none";
        var c = document.getElementById("close");
        c.style.display = "flex";
      }
      function close() {
        var a = document.getElementById("link-1");
        a.style.display = "none";
        var b = document.getElementById("open");
        b.style.display = "flex";
        var c = document.getElementById("close");
        c.style.display = "none";
      }
  return (
    <>
      <nav className="flex justify-between px-10 py-6 border-solid border-2 items-center">
        <div className="text-[30px] font-bold">Exclusive</div>
        <ul className="lg:flex hidden space-x-[4rem]">
          <Link
            to="/home"
            className="font-bold hover:text-red-500 cursor-pointer  hover:border-b-2 hover:border-sky-500"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="font-bold hover:text-red-500 cursor-pointer hover:border-b-2 hover:border-sky-500"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="font-bold hover:text-red-500 cursor-pointer hover:border-b-2 hover:border-sky-500"
          >
            About
          </Link>
          <Link
            to="/"
            className="font-bold hover:text-red-500 cursor-pointer hover:border-b-2 hover:border-sky-500"
          >
            Sign Up
          </Link>
        </ul>
        <div className="lg:flex items-center  hidden">
          <input
            type="search"
            name=""
            className="rounded-[6px] border-transparent py-2 ps-3 bg-gray-200 w-[250px] relative"
            placeholder="what are you looking for ?"
          />
          <Seacrh />
          <div className="flex space-x-4 items-center">
            <Link to="/wish">
              {" "}
              <Hearts />{" "}
            </Link>
            <Link to='/shopping'>
              {" "}
              <Shopping />
            </Link>
            <div className="w-[40px] h-[40px] rounded-[50%] bg-red-600 flex justify-center items-center">
              <Users />
            </div>
          </div>
        </div>
        <div className="lg:hidden flex">
          <i
            className="fa-solid fa-bars text-[30px] font-bold"
            onClick={toggler}
            id="open"
          ></i>
          <i
            className="fa-solid fa-xmark text-[30px] font-bold"
            onClick={close}
            id="close"
          ></i>
        </div>
      </nav>

      <div id="link-1" className="flex flex-col">
        <ul className="flex-col lg:hidden lg:space-x-[4rem] ps-[3rem] space-y-5">
          <Link
            to="/home"
            className="font-bold hover:text-red-500 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="font-bold hover:text-red-500 cursor-pointer hover:underline  hover:border-b-2 hover:border-sky-500"
          >
            Contact
          </Link>
          <li className="font-bold hover:text-red-500 cursor-pointer">About</li>
          <li className="font-bold hover:text-red-500 cursor-pointer">
            Sign Up
          </li>
        </ul>
        <div className="flex  items-center ps-[3rem] mt-5 lg:hidden">
          <input
            type="search"
            name=""
            className="rounded-[6px] border-transparent py-2 ps-3 bg-gray-200 w-[250px] relative"
            placeholder="what are you looking for ?"
          />
          <Seacrh />
          <div className="flex space-x-4">
            <Hearts />
            <Shopping />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeNavBar;
