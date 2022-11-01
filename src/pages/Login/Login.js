import React from "react";
import { Link } from "react-router-dom";
import loginImg from '../../assets/login.png'

export const Login = () => {
  return (
    <>
      <div className='bg-zinc-100 h-screen w-screen'>
        <div className='w-screen h-screen flex justify-center items-center'>
          <div className="bg-gray-700 flex flex-col lg:flex-row w-5/6 h-5/6 lg:h-3/4 rounded-3xl">
            <img className='h-40 lg:h-96 inline-flex items-center m-5 mt-5 m-auto lg:m-14' src={loginImg} alt="" />
            <form className='max-w-[400px] w-full h-4/5 my-auto mx-auto p-8 px-8 rounded-lg'>
                <h2 className='text-2xl lg:text-4xl text-white font-bold text-center mb-3 lg:mb-5'>SIGN IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                  <label>Username</label>
                  <input className='rounded-lg bg-gray-900 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2 '>
                  <label>Password</label>
                  <input className='rounded-lg bg-gray-900 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <button className="w-full my-5 py-2 bg-zinc-200 shadow-lg  shadow-grey-500/50 hover:bg-zinc-300 hover:shadow-gray-500/70 font-semibold rounded-lg">Login</button>
                <div className='text-gray-400 py-0 lg:py-2 text-center'>
                  <p className="">Belum mempunyai akun?<a href="../registrasi" className="ml-1 underline">Registrasi.</a></p>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
