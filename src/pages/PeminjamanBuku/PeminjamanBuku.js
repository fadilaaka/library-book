import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import loginImg from "../../assets/login.png";
import coverImg from "../../assets/cover-dune.jpg";
import axios from "axios";

export const PeminjamanBuku = () => {
  const { idBook } = useParams();

  const today = new Date().toISOString().split("T")[0];
  const addDays = (str, days) => {
    const myDate = new Date(str);
    myDate.setDate(myDate.getDate() + parseInt(days));
    return myDate;
  };
  const endDate = addDays(new Date().toISOString().split("T")[0], 7);
  console.log(endDate.toISOString().split("T")[0]);
  console.log(today);

  const [dataBuku, setDataBuku] = useState([]);
  const [pengembalian, setPengembalian] = useState();
  const [idAnggota, setIdUser] = useState();

  const url = "https://frightful-phantom-89997.herokuapp.com";

  const getDetailBuku = async (id) => {
    try {
      const res = await axios.get(`${url}/v1/api/peminjaman/${id}`);
      await setDataBuku(res.data.book);
    } catch (error) {
      console.log(error);
    }
  };

  const tombolPinjamBuku = (e) => {
    e.preventDefault();
    axios
      .post(`${url}/v1/api/peminjaman/${idBook}/${idAnggota}/pinjam`, {
        tanggalPengembalian: pengembalian,
      })
      .then((res) => {
        alert(res);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  useEffect(() => {
    getDetailBuku(idBook);
    if (localStorage.getItem("user-info") !== null) {
      const userId = JSON.parse(localStorage.getItem("user-info"));
      console.log("masih di useeffect : ", userId._id);
      setIdUser(userId._id);
    }
  }, []);

  console.log("ini id buku; ", idBook);

  console.log(dataBuku);
  console.log("Ini id user", idAnggota);

  return (
    <>
      <div className="bg-zinc-100 h-screen w-screen">
        <Link to="/dashboard">
          <button
            type="button"
            className="m-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Back
          </button>
        </Link>

        <div className="flex flex-row">
          <div className="w-2/6 p-10">
            <img
              src={`https://frightful-phantom-89997.herokuapp.com/${dataBuku.imageUrl}`}
              className="w-48 h-auto float-right"
            ></img>
          </div>
          <div className="w-4/6 p-10">
            <h6 className="text-4xl py-2">{dataBuku.title}</h6>
            <h6 className="text-2xl text-gray-600 py-2">{dataBuku.author}</h6>
            <p className="py-2">{dataBuku.description}</p>
          </div>
        </div>

        <div className="text-center">
          <input
            type="date"
            name="tanggalPengembalian"
            onChange={(e) => setPengembalian(e.target.value)}
            min={today}
            max={endDate.toISOString().split("T")[0]}
          />
          <input
            type="text"
            name="idAnggota"
            value={idAnggota}
            onChange={(e) => e.target.value}
            hidden
          />
          <input
            type="text"
            name="idBook"
            value={idBook}
            onChange={(e) => e.target.value}
            hidden
          />
          {localStorage.getItem("user-info") === null ? (
            <span className="m-10 text-white bg-slate-900 font-medium rounded-full text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-slate-400">
              Login First
            </span>
          ) : (
            <button
              type="button"
              onClick={tombolPinjamBuku}
              className="m-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Pinjam Buku
            </button>
          )}
        </div>
      </div>
    </>
  );
};
