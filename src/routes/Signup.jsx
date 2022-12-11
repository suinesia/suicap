import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const { signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        alert("Passwords must match!");
        return;
      } else {
        await signUp(email, password);
        navigate("/");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className="max-w-[500px] mx-auto min-h-[600px] px-10 py-20 mt-10 border border-secondary rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor="email_input">Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="email"
                name="email"
                id="email_input"
                placeholder="Enter your email"
              />
              <AiOutlineMail
                size={20}
                className="absolute right-4 top-3 text-gray-400"
              />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="password_input">Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="password"
                name="password"
                id="password_input"
                placeholder="Password"
              />
              <AiFillLock
                size={20}
                className="absolute right-4 top-3 text-gray-400"
              />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="password_confirm_input">Confirm Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="password"
                name="password"
                id="password_confirm_input"
                placeholder="Confirm password"
              />
              <AiFillLock
                size={20}
                className="absolute right-4 top-3 text-gray-400"
              />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl hover:shadow-2xl">
            Sign up
          </button>
        </form>
        <p className="py-4">
          Already have an account?{" "}
          <Link className="text-accent underline" to="/signin">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
