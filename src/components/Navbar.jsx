import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  if (nav) {
    window.document.documentElement.style.overflowY = "hidden";
  } else {
    window.document.documentElement.style.overflowY = "scroll";
  }

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
      setNav(!nav);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="rounded-div flex items-center justify-between h-24 font-bold">
      <Link to="/">
        <h1 className="text-2xl">CoinHangar</h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>

      {user?.email ? (
        <Link to="/account">
          <div className="flex items-center space-x-2 bg-button text-btnText px-4 py-2 rounded-2xl">
            <p>Account</p>
            <BsFillPersonFill className="text-lg" />
          </div>
        </Link>
      ) : (
        <div className="hidden md:block">
          <Link to="/signin" className="p-4 hover:text-accent">
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
          >
            Sign Up
          </Link>
        </div>
      )}

      {/* Menu Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer z-10">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-150 z-10"
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-150"
        }
      >
        <ul className="w-full py-4 px-8">
          <li onClick={handleNav} className="border-b py-6">
            <Link to="/">Home</Link>
          </li>
          <li onClick={handleNav} className="border-b py-6">
            <Link to="/account">Account</Link>
          </li>
          <li className="py-6">
            <ThemeToggle />
          </li>
        </ul>
        {user?.email ? (
          <div className="p-8 w-full">
            <button
              onClick={handleSignOut}
              className="bg-button text-btnText p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl"
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="flex flex-col w-full p-4">
            <Link to="/signin">
              <button
                onClick={handleNav}
                className="w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-2xl"
              >
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button
                onClick={handleNav}
                className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl"
              >
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
