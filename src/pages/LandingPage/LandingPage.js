import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userImg from "../../assets/user.png";
import bookImg from "../../assets/book.jpg";
import axios from "axios";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "react-collapse";

export const LandingPage = () => {
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);

  const triggerOpen = () => {
    isOpened === false ? setIsOpened(true) : setIsOpened(false);
  };

  const [dataJenis, setDataJenis] = useState([]);
  const [dataKategori, setDataKategori] = useState([]);
  const [dataUser, setDataUser] = useState([]);

  const url = "http://localhost:5000";

  const getJenis = async () => {
    try {
      const res = await axios.get(`${url}/v1/api/homepage`);
      console.log(res);
      await setDataJenis(res.data.jenis);
    } catch (error) {
      console.log(error);
    }
  };

  const getKategori = async () => {
    try {
      const res = await axios.get(`${url}/v1/api/homepage`);
      console.log("ini datanya : ", res);
      await setDataKategori(res.data.kategori);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataUser = async () => {
    try {
      const data = await localStorage.getItem("user-info");
      await setDataUser(JSON.parse(data));
    } catch (error) {}
  };

  useEffect(() => {
    getJenis();
    getKategori();
    getDataUser();
  }, []);

  console.log(dataJenis);
  console.log("ini kategori : ", dataKategori);
  console.log(dataUser);

  const logoutAkun = async (e) => {
    localStorage.removeItem("user-info");
    navigate("/login");
  };

  return (
    <div className="bg-zinc-100 h-screen w-screen">
      <a
        href="#top"
        type="button"
        className="inline-block p-3 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5 fixed"
      >
        <FontAwesomeIcon icon={faAngleDoubleUp} />
      </a>
      <section className="flex">
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800 min-h-screen w-72">
          <img src={userImg} className="mr-3 h-24 p-2" alt="" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            {dataUser && dataUser.name}
          </span>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FontAwesomeIcon icon={faHouse} />
                <span className="ml-3">Home</span>
              </a>
            </li>
          </ul>

          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            {dataJenis &&
              dataJenis.map((jenis, index) => (
                <li key={index}>
                  <button
                    onClick={triggerOpen}
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FontAwesomeIcon icon={faBookOpen} />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      {jenis.title}
                    </span>
                  </button>
                  <Collapse isOpened={isOpened}>
                    {dataKategori &&
                      dataKategori.map((kategori, index) => (
                        <ul key={index}>
                          <li>
                            {jenis._id == kategori.idJenis._id ? (
                              <a
                                href={`#${kategori.title}`}
                                className="text-slate-500"
                              >
                                {kategori.title}
                              </a>
                            ) : (
                              ""
                            )}
                          </li>
                        </ul>
                      ))}
                  </Collapse>
                </li>
              ))}
          </ul>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <Link
                to="/list-peminjaman"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FontAwesomeIcon icon={faCalendarDays} />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Peminjaman
                </span>
              </Link>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <button
                onClick={logoutAkun}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
              </button>
            </li>
          </ul>
        </div>

        <div
          id="top"
          className="text-xl text-gray-900 font-semibold bg-gray-200 w-full"
        >
          <div className="w-full m-7 flex flex-row">
            <div className="w-5/6">
              <form>
                <div className="relative">
                  <input
                    type="search"
                    id="default-search"
                    className="rounded-full block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                    placeholder="Cari buku berdasarkan judul, author, genre..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-gray-200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <div className="w-1/6">
              {!localStorage.getItem("user-info") && (
                <Link to="/login">
                  <button
                    type="button"
                    className="rounded-full block px-6 py-4 ml-2 text-sm text-gray-900 bg-gray-50 hover:bg-gray-800 hover:text-white rounded-full border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="w-full p-7 flex flex-row">
            <a className="flex flex-col items-center rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-300 dark:border-gray-700 bg-gray-50 dark:hover:bg-gray-700">
              <img
                className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={bookImg}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-600">
                  Selamat Datang
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Welcome to Library Buddy
                </p>
              </div>
            </a>
          </div>

          <div className="w-full p-5 flex flex-col">
            {dataKategori.map((kategori, index) => (
              <div key={index}>
                <div>
                  <h5
                    id={kategori.title}
                    className="mb-2 text-2xl font-bold tracking-tight text-white bg-gray-600 px-4 py-2 rounded-xl"
                  >
                    {kategori.title}
                  </h5>
                </div>
                <div className="w-full grid grid-cols-4 grid-flow-row gap-4 auto-rows-min">
                  {kategori.books.map((buku, index) => (
                    <div
                      key={index}
                      className="w-48 m-2 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                    >
                      <a href={`/peminjaman/${buku._id}`}>
                        <img
                          className="rounded-t-lg"
                          src={`http://localhost:5000/${buku.imageUrl}`}
                          alt=""
                        />
                      </a>
                      <div className="p-2 text-center">
                        <a
                          href={`/peminjaman/${buku._id}`}
                          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-900  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Selengkapnya
                          <svg
                            aria-hidden="true"
                            className="ml-2 -mr-1 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
