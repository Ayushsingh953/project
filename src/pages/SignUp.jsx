"use client";
import React,{useState} from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const navigate = useNavigate();

  async function handleFormSubmit(e) {

    e.preventDefault();

    const data = {
      name:`${firstname} ${lastname}`,
      email,
      password
    }

    // here we're just POSTing up the formdata to the corresponding route handler in the api dir.
    try{
      const res = await axios.post("http://localhost:5500/user/auth/register",data);
      console.log(res.data)
      if(res.data.isVerified === true){
        localStorage.setItem('token',res.data.accessToken);
        alert("Registration successful...");
        navigate("/");

      }
    }catch(err){
      console.log("Error registering user",err.response.data.msg);
      alert(err.response.data.msg);
    }

  }

  return (
    <>
    <div className="flex justify-center items-center">
      <div className="bg-slate-200 shadow-md rounded-lg px-8 py-10 mt-10 mb-10 max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-6 text-center">Welcome</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-6">
            <label htmlFor="firstname" className="block text-gray-700 text-sm font-bold mb-2">First name:</label>
            <input type="text" placeholder="enter your first name" id="firstname" name="firstname" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                value={firstname}
                onChange={(ev) => setfirstname(ev.target.value)}/>
          </div>
          <div className="mb-6">
            <label htmlFor="lastname" className="block text-gray-700 text-sm font-bold mb-2">Last name:</label>
            <input type="text" placeholder="enter your last name" id="lastname" name="lastname" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                value={lastname}
                onChange={(ev) => setlastname(ev.target.value)}/>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input type="string" placeholder="enter your email" id="email" name="email" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                value={email}
                onChange={(ev) => setemail(ev.target.value)}/>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input type="password" placeholder="enter your password" id="password" name="password" className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                value={password}
                onChange={(ev) => setpassword(ev.target.value)}
                autoComplete="current-password"/>
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline w-full">Create Account</button>
          </div>
          <div className='flex items-center justify-center my-4'>
            <p className='mr-2'>Already have an account ?</p>
            <a className='underline text-blue-600 font-semibold' href={'/Login'} >Login here &raquo;</a>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}
