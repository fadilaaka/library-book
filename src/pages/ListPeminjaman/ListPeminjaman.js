import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { GoSignOut } from "react-icons/go"
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ListPeminjaman = () => {
  const menus = [
    {name: "Home", link:'/', icon: AiOutlineHome},
    {name: "User", link:'/', icon: AiOutlineUser},
    {name: "Jenis", link:'/', icon: FaBookReader, margin:true},
    {name: "Peminjaman", link:'/', icon: GiBookshelf, margin:true},
    {name: "Sign Out", link:'/', icon: GoSignOut},
  ]
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);
  const triggerOpen = () => {
    isOpened === false ? setIsOpened(true) : setIsOpened(false);
  };

  const url = "https://frightful-phantom-89997.herokuapp.com";

  const [idAnggota, setIdUser] = useState();
  const [dataBuku, setDataBuku] = useState([]);

  const getPeminjamanBuku = async (id) => {
    try {
      const res = await axios.get(`${url}/v1/api/list-peminjaman/${id}`);
      console.log(res);
      await setDataBuku(res.data.anggota);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user-info") !== null) {
      const userId = JSON.parse(localStorage.getItem("user-info"));
      console.log("masih di useeffect : ", userId._id);
      setIdUser(userId._id);
      getPeminjamanBuku(userId._id);
    }
  }, []);

  console.log(idAnggota);
  console.log(dataBuku);

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

          <div className="m-2 w-full pt-10 flex flex-col lg:flex-row"> 
            <a href="#" className="my-10 flex flex-col bg-zinc-100 items-center rounded-md shadow-md md:flex-row w-1/2 h-64 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mr-2">
            <img
              src={`https://frightful-phantom-89997.herokuapp.com/${dataBuku.imageUrl}`}
              className="w-48 h-auto float-right"
            ></img>
                <div className="flex flex-col text-justify p-4 ml-5 leading-normal w-full mr-3">
                    <h5 className="mb-2 text-2xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">Harry Potter and the Sorcerer Stone (2001)</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">J. K. Rowling</p>
                    <p className="text-sm">Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own.</p>
                </div>
            </a> 
          </div>

          <div className="m-2 w-full mx-auto ">
            <h3>Tanggal Peminjaman   :  {`https://frightful-phantom-89997.herokuapp.com/${dataBuku.imageUrl}`}
            </h3>
            <h3>Tanggal Pengembalian : </h3>
          </div>


        </div>
      </section>
    </>
  );
};
