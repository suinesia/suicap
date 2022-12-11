import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className="max-w-[500px] mx-auto min-h-[600px] px-10 py-20 mt-10 border border-secondary rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold">Sign In</h1>
        {error ? (
          <p className="bg-red-300 p-3 my-2 text-xs md:text-sm">{error}</p>
        ) : null}
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
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl hover:shadow-2xl">
            Sign in
          </button>
        </form>
        <p className="py-4">
          Don't have an account?{" "}
          <Link className="text-accent underline" to="/signup">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
