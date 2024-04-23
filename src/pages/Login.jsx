"use client";
import React, { useState } from "react";
import logo1 from "../components/assets/google.png";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleFormSubmit(e) {
    e.preventDefault();
    
    const data = {
      email,
      password
    }
    try{
      const res = await axios.post("http://localhost:5500/user/auth/login",data);
      console.log(res.data)
      if(res.data.isVerified === true){
        localStorage.setItem('token',res.data.accessToken);
        alert("Login successful...");
        navigate("/");

      }
    }catch(err){
      console.log("Error: ",err.response.data.msg);
      alert(err.response.data.msg);
    }

  }

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-slate-200 shadow-md rounded-lg px-10 py-10 mt-10 mb-10 max-w-md w-full">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-6">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                type="text"
                placeholder="enter your username"
                id="username"
                name="username"
                required
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                autoComplete="username"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password:
              </label>
              <input
                type="password"
                placeholder="enter your password"
                id="password"
                name="password"
                required
                className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                autoComplete="current-password"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Login
              </button>
            </div>
            <br />
            <p className="flex items-center justify-center">Or</p>
            <br />
            <button
              type="button"
              className="bg-white text-black font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline w-full flex gap-6 items-center justify-center"
            >
              <img src={logo1} alt="google" width={30} height={30} />
              Login with Google
            </button>
            <div className="flex items-center justify-center my-4">
              <p className="mr-2">Do not have an account ?</p>
              <a className="underline text-blue-600 font-semibold" href={'/SignUp'}>
                Create Account
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}