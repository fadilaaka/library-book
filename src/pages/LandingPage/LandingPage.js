import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userImg from "../../assets/user.png";
import bookImg from "../../assets/book.jpg";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "../../components/Sidebar";

export const LandingPage = () => {
  const navigate = useNavigate();

  const [dataJenis, setDataJenis] = useState([]);
  const [dataKategori, setDataKategori] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [loading, setLoading] = useState(false);

  // const url = "http://localhost:5000";
  const url = "https://incredible-complete-soybean.glitch.me";

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
    setLoading(true);
    try {
      const res = await axios.get(`${url}/v1/api/homepage`);
      console.log("ini datanya : ", res);
      setLoading(false);
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
  console.log("Ini data user : ", dataUser);

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
          {dataUser && dataUser.imageUrl !== "" ? (
            <div className="flex flex-wrap justify-center my-2">
              <div className="w-50 px-4">
                <img
                  src={`${url}/${dataUser && dataUser.imageUrl}`}
                  alt="..."
                  className="shadow rounded-full max-w-full h-auto align-middle border-none"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center my-2">
              <div className="w-50 px-4">
                <img
                  src={userImg}
                  className="shadow max-w-full rounded-full h-auto align-middle border-none"
                  alt="profil anonim"
                />
              </div>
            </div>
          )}
          <div className="text-center">
            <span className="text-xl font-semibold whitespace-nowrap dark:text-white">
              {dataUser && dataUser.name}
            </span>
          </div>
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
                <Sidebar key={index} jenis={jenis} />
              ))}
          </ul>
          <ul className="text-start pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <Link
                to="/listPeminjamanBuku"
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
            <div className="w-1/6">
              {!localStorage.getItem("user-info") && (
                <Link to="/login">
                  <button
                    type="button"
                    className="block px-6 py-4 ml-2 text-sm text-gray-900 bg-gray-50 hover:bg-gray-800 hover:text-white rounded-full border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="w-full p-7 flex flex-row">
            <div className="flex flex-col items-center rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-300 dark:border-gray-700 bg-gray-50 dark:hover:bg-gray-700">
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
            </div>
          </div>
          {loading && (
            <div className="text-center">
              <div role="status">
                <svg
                  class="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}

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
                      <a href={`/peminjamanBuku/${buku._id}`}>
                        <img
                          className="rounded-t-lg"
                          src={`${url}/${buku.imageUrl}`}
                          alt=""
                        />
                      </a>
                      <div className="p-2 text-center">
                        <a
                          href={`/peminjamanBuku/${buku._id}`}
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
