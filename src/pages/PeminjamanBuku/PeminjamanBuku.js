import React from "react";
import { Link } from "react-router-dom";
import loginImg from '../../assets/login.png'
import coverImg from '../../assets/cover-dune.jpg'

export const PeminjamanBuku = () => {
    const today = new Date().toISOString().split('T')[0]
    const addDays = (str, days) => {
        const myDate = new Date(str);
        myDate.setDate(myDate.getDate() + parseInt(days));
        return myDate;
      }
      
    const endDate = addDays(new Date().toISOString().split('T')[0], 7);
    console.log(endDate.toISOString().split('T')[0]);
    console.log(today);
    return (

    <>
      <div className='bg-zinc-100 h-screen w-screen'>
        <button type="button" className="m-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Back</button>

        <div className="flex flex-row">
            <div className="w-2/6 p-10">
                <img src={coverImg} className="w-48 h-auto float-right"></img>
            </div>
            <div className="w-4/6 p-10">
                <h6 className="text-4xl py-2">Dune</h6>
                <h6 className="text-2xl text-gray-600 py-2">Frank Herbert</h6>
                <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Eu feugiat pretium nibh ipsum consequat nisl vel. Sapien nec sagittis aliquam malesuada bibendum arcu. Faucibus ornare suspendisse sed nisi lacus. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Eu feugiat pretium nibh ipsum consequat nisl vel. Sapien nec sagittis aliquam malesuada bibendum arcu. Faucibus ornare suspendisse sed nisi lacus.</p>
            </div>
        </div>

        <div className="text-center">
            <input type="date" min={today} max={endDate.toISOString().split('T')[0]}/>
            <button type="button" class="m-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Pinjam Buku</button>
        </div>

      </div>
    </>
  );
};
