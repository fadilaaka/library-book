import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { GoSignOut } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ListPeminjaman = () => {
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);

  const url = "https://frightful-phantom-89997.herokuapp.com";

  const [idAnggota, setIdUser] = useState();
  const [dataBuku, setDataBuku] = useState([]);
  const [dataDetailBuku, setDataDetailBuku] = useState([]);

  const arraySementara = [];
  const getDetailBuku = async (id) => {
    try {
      const res = await axios.get(`${url}/v1/api/peminjaman/${id}`);
      console.log("Ini buat detail : ", res);
      arraySementara.push(res.data.book);
      console.log("ini data detail : ", arraySementara);
      await setDataDetailBuku(arraySementara);
    } catch (error) {
      console.log(error);
    }
  };

  const getPeminjamanBuku = async (id) => {
    try {
      const res = await axios.get(`${url}/v1/api/list-peminjaman/${id}`);
      console.log(res);
      await setDataBuku(res.data.anggota);
      for (let i = 0; i < res.data.anggota.books.length; i++) {
        getDetailBuku(res.data.anggota.books[i]._id);
      }
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
  console.log("Ini data : ", dataBuku);

  console.log("Ini data detail buku : ", dataDetailBuku);

  return (
    <>
      <section className="flex">
        <div className="text-xl text-gray-900 font-semibold bg-zinc-300 w-full p-10">
          <Link to="/dashboard">
            <button
              type="button"
              className="m-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Back
            </button>
          </Link>
          <div className="m-2 w-full pt-10 flex flex-col">
            {dataDetailBuku &&
              dataDetailBuku.map((buku, index) => (
                <div key={index}>
                  <div className="my-10 flex flex-col bg-zinc-100 items-center rounded-md shadow-md md:flex-row w-1/2 h-64 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mr-2">
                    <img
                      src={`https://frightful-phantom-89997.herokuapp.com/${buku.imageUrl}`}
                      className="w-48 h-auto float-right"
                    />
                    <div className="flex flex-col text-justify p-4 ml-5 leading-normal w-full mr-3">
                      <h5 className="mb-2 text-2xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {buku.title}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {buku.author}
                      </p>
                      <p className="text-sm">{buku.description}</p>
                    </div>
                  </div>
                  {dataBuku.peminjaman &&
                    dataBuku.peminjaman.map((tanggal, index) => (
                      <div key={index} className="m-2 w-full mx-auto ">
                        {buku._id === tanggal.book ? (
                          <>
                            <h3>
                              Tanggal Peminjaman :{" "}
                              {tanggal.tanggalPeminjaman.split("T")[0]}
                            </h3>
                            <h3>
                              Tanggal Pengembalian :{" "}
                              {tanggal.tanggalPengembalian.split("T")[0]}
                            </h3>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    ))}
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};
