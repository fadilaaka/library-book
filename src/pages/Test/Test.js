import React from "react";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { GoSignOut } from "react-icons/go"
import { Link } from "react-router-dom";
import coverImg from '../../assets/cover-harpot.jpg';
import coverImg2 from '../../assets/cover-harpot2.png';

export const Test = () => {
  const menus = [
    {name: "Home", link:'/', icon: AiOutlineHome},
    {name: "User", link:'/', icon: AiOutlineUser},
    {name: "Jenis", link:'/', icon: FaBookReader, margin:true},
    {name: "Peminjaman", link:'/', icon: GiBookshelf, margin:true},
    {name: "Sign Out", link:'/', icon: GoSignOut},
  ]
  const [open, setOpen] = useState(true);
  return (
    <>
      <section className="flex">
        <div className={`bg-[#0e0e0e] min-h-screen ${open ? 'w-72':'w-16'} duration-500
         text-gray-100 px-4`}>
          <div className="py-3 flex justify-end ">
            <HiMenuAlt3 
              size={26} 
              className="cursor-pointer" 
              onClick={()=>setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {
              menus?.map((menu,i)=>(
            
            <Link 
              to={"menu?.link"} 
              key={i} 
              className={`${menu?.margin && 'mt-5'
            } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2 
                style={{
                  transitionDelay:`${i + 3}00ms`
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}>{menu?.name}
              </h2>
              <h2 
              className={`${open && 'hidden'
                } absolute left-48 bg-white font-seminold whitespace-pre text-gray-900 
                rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-1 
                group-hover:py-1 group-hover:left-14 group-hover:duration-300 
                group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </Link>
              ))
          }  

          </div>
        </div>
        <div className="text-xl text-gray-900 font-semibold bg-zinc-300 w-full p-10">
          
          <div className="w-full flex flex-row">
            <div className="basis-5/6">
              <form>   
                    <div className="relative">                         
                        <input type="search" id="default-search" className="rounded-full block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Cari buku berdasarkan judul, author, genre..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gray-200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </div>
                </form>
            </div>
  
            <div className="basis-1/6">
              <Link to="/login">
              <button type="button" className="rounded-full block px-6 py-4 ml-5 text-sm text-gray-900 bg-gray-50 hover:bg-gray-800 hover:text-white rounded-full border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Login</button>
              </Link>
            </div>
          </div>


          <div className="m-2 w-full pt-10 flex flex-row"> 
            <a href="#" className="my-10 flex flex-col bg-zinc-100 items-center rounded-md shadow-md md:flex-row w-1/2 h-64 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mr-2">
                <img className="relative w-1/2 -translate-y-0 translate-x-0 inline lg:-translate-y-10 lg:translate-x-5 lg:inline-block rounded-md md:h-auto md:w-48 md:rounded-l-lg" src={coverImg} alt=""/>
                <div className="flex flex-col text-justify p-4 ml-5 leading-normal w-full mr-3">
                    <h5 className="mb-2 text-2xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">Harry Potter and the Sorcerer Stone (2001)</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">J. K. Rowling</p>
                    <p className="text-sm">Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own.</p>
                </div>
            </a> 
            <a href="#" className="my-10 flex flex-col bg-zinc-100 items-center rounded-md shadow-md md:flex-row w-1/2 h-64 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mr-2">
                <img className="relative w-1/2 -translate-y-0 translate-x-0 inline lg:-translate-y-10 lg:translate-x-5 lg:inline-block rounded-md md:h-auto md:w-48 md:rounded-l-lg" src={coverImg2} alt=""/>
                <div className="flex flex-col text-justify p-4 ml-5 leading-normal w-full mr-3">
                    <h5 className="mb-2 text-2xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">Harry Potter and the Prisoner of Azkaban (2004)</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">J. K. Rowling</p>
                    <p className="text-sm">The second book follows Harry's third year at Hogwarts and his quest to uncover the truth about his past, including the connection recently-escaped Azkaban prisoner Sirius Black has to Harry and his late parents. </p>
                </div>
            </a> 
          </div>

          <div className="w-full flex flex-row p-2">            
            <div className="text-center w-48 bg-white shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img className="" src={coverImg} alt=""/>
              </a>
              <div className="">
                <a href="#">
                    <h5 className="p-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Harry Potter (2001)</h5>
                </a>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">J. K. Rowling</p>
                <a href="#" className="block items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-800 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Detail
                </a>
              </div>
            </div>
            <div className="text-center w-48 bg-white shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img className="" src={coverImg} alt=""/>
              </a>
              <div className="">
                <a href="#">
                    <h5 className="p-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Harry Potter (2001)</h5>
                </a>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">J. K. Rowling</p>
                <a href="#" className="block items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-800 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Detail
                </a>
              </div>
            </div>
            <div className="text-center w-48 bg-white shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img className="" src={coverImg} alt=""/>
              </a>
              <div className="">
                <a href="#">
                    <h5 className="p-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Harry Potter (2001)</h5>
                </a>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">J. K. Rowling</p>
                <a href="#" className="block items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-800 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Detail
                </a>
              </div>
            </div>
            <div className="text-center w-48 bg-white shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img className="" src={coverImg} alt=""/>
              </a>
              <div className="">
                <a href="#">
                    <h5 className="p-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Harry Potter (2001)</h5>
                </a>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">J. K. Rowling</p>
                <a href="#" className="block items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-800 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Detail
                </a>
              </div>
            </div>
            <div className="text-center w-48 bg-white shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img className="" src={coverImg} alt=""/>
              </a>
              <div className="">
                <a href="#">
                    <h5 className="p-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Harry Potter (2001)</h5>
                </a>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">J. K. Rowling</p>
                <a href="#" className="block items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-800 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Detail
                </a>
              </div>  
            </div>
            <div className="text-center w-48 bg-white shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img className="" src={coverImg} alt=""/>
              </a>
              <div className="">
                <a href="#">
                    <h5 className="p-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Harry Potter (2001)</h5>
                </a>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">J. K. Rowling</p>
                <a href="#" className="block items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-800 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Detail
                </a>
              </div>
            </div>  
          </div>    

        </div>
      </section>
    </>
  );
};
