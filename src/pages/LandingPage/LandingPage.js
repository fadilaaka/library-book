import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userImg from '../../assets/user.png'
import bookImg from '../../assets/book.jpg'
import coverImg from '../../assets/cover-dune.jpg'
import axios from 'axios'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import {Collapse} from 'react-collapse';

export const LandingPage = () => {
  const [isOpened, setIsOpened] = useState(false)

  const triggerOpen = () => {
    isOpened === false ? setIsOpened(true) : setIsOpened(false)
  }

  const [dataJenis, setDataJenis] = useState([])
  const [dataKategori, setDataKategori] = useState([])

  const url = "https://frightful-phantom-89997.herokuapp.com";

  const getJenis = async () => {
    try {
      const res = await axios.get(`${url}/v1/api/homepage`);
      console.log("ini datanya : ",res);
      await setDataJenis(res.data.jenis)
    } catch (error) {
      console.log(error)
    }
  }

  const getKategori = async () => {
    try {
      const res = await axios.get(`${url}/v1/api/homepage`);
      console.log("ini datanya : ",res);
      await setDataKategori(res.data.kategori)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getJenis()
    getKategori()
  }, [])
  
  console.log(dataJenis)
  console.log(dataKategori)

  return (
    
      <div className='bg-zinc-100 h-screen w-screen'>
        <section className="flex">
          <div className="overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800 min-h-screen w-72">
            <a href="" className="flex flex-col items-center pl-2.5 mb-5">
              <img src={userImg} className="mr-3 h-24 p-2" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">User</span>
            </a>
            <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
              <li>
                  <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <FontAwesomeIcon icon={faHouse} />
                    <span className="ml-3">Home</span>
                  </a>
              </li>
            </ul>
            <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"> 
              {
                dataJenis.map((item,index) => (
                  <>
                  <li key={index}>
                    <button onClick={triggerOpen} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <FontAwesomeIcon icon={faBookOpen} />
                      <span className="flex-1 ml-3 whitespace-nowrap">{item.title}</span>
                    </button>
                    <Collapse isOpened={isOpened}>
                      {dataKategori.map((kategori, key) => (
                        <>
                        <ul>
                          <li>
                            {
                              item._id === kategori.idJenis._id ? (
                                <a>{kategori.title}</a>
                              ) : (
                                ''
                              )
                            }
                          </li>
                        </ul>
                        </>
                      ))}
                    </Collapse>
                  </li>    
                  </>
                ))
              }     
              </ul> 
            <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">  
              <li>
                  <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <FontAwesomeIcon icon={faCalendarDays} />
                    <span className="flex-1 ml-3 whitespace-nowrap">Peminjaman</span>
                  </a>
              </li>
            </ul>        
            <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">  
            <li>
                  <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                  </a>
              </li>
            </ul>
          </div>
          
          <div className="text-xl text-gray-900 font-semibold bg-gray-200 w-full">

            <div className="w-full m-7 flex flex-row">
              <div className="w-5/6">
                <form>   
                      <div className="relative">                         
                          <input type="search" id="default-search" className="rounded-full block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Cari buku berdasarkan judul, author, genre..." required />
                          <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gray-200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                          </button>
                      </div>
                  </form>
              </div>
   
              <div className="w-1/6">
                <Link to="/login">
                <button type="button" className="rounded-full block px-6 py-4 ml-2 text-sm text-gray-900 bg-gray-50 hover:bg-gray-800 hover:text-white rounded-full border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Login</button>
                </Link>
              </div>
            </div>

            <div className="w-full p-7 flex flex-row">
              <a href="#" className="flex flex-col items-center rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={bookImg} alt=""/>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Selamat Datang</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </div>
              </a>
            </div>

            <div className="w-full p-5 flex flex-row">        
              <div className="w-48 m-2 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img className="rounded-t-lg" src={coverImg} alt=""/>
                  </a>
                  <div className="p-2 text-center">
                      <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-900  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Selengkapnya
                          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </a>
                  </div>
              </div>
              <div className="w-48 m-3 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img className="rounded-t-lg" src={coverImg} alt=""/>
                  </a>
                  <div className="p-2 text-center">
                      <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Selengkapnya
                          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </a>
                  </div>
              </div>
              <div className="w-48 m-3 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img className="rounded-t-lg" src={coverImg} alt=""/>
                  </a>
                  <div className="p-2 text-center">
                      <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-900  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Selengkapnya
                          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </a>
                  </div>
              </div>
              <div className="w-48 m-3 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img className="rounded-t-lg" src={coverImg} alt=""/>
                  </a>
                  <div className="p-2 text-center">
                      <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Selengkapnya
                          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </a>
                  </div>
              </div>
              <div className="w-48 m-3 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img className="rounded-t-lg" src={coverImg} alt=""/>
                  </a>
                  <div className="p-2 text-center">
                      <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-900  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Selengkapnya
                          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </a>
                  </div>
              </div>
            </div>

            <div className="w-full h-24 text-center m-5">
              
              <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px">
                  <li>
                    <a href="#" className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                  </li>
                  <li>
                    <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                  </li>
                  <li>
                    <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                  </li>
                  <li>
                    <a href="#" aria-current="page" className="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                  </li>
                  <li>
                    <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                  </li>
                  <li>
                    <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                  </li>
                  <li>
                    <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                  </li>
                </ul>
              </nav>

            </div>



            
            

            

          </div>

        </section>
        


      </div>
  );
};
