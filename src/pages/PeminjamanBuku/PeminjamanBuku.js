import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const PeminjamanBuku = () => {

  const { idBook } = useParams();

  const [pengembalian, setPengembalian] = useState();
  const [idAnggota, setIdUser] = useState("");
  const [dataBuku, setDataBuku] = useState();
  const [cekPost, setCekPost] = useState("");

  const url = "http://localhost:5000";

  const getDetailBuku = async (id) => {
    try {
      const res = await axios.get(`${url}/v1/api/peminjaman/${id}`);
      await setDataBuku(res.data.book);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailBuku(idBook);
    if (localStorage.getItem("user-info") !== null) {
      const userId = JSON.parse(localStorage.getItem("user-info"));
      console.log("masih di useeffect : ", userId._id);
      setIdUser(userId._id);
    }
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const addDays = (str, days) => {
    const myDate = new Date(str);
    myDate.setDate(myDate.getDate() + parseInt(days));
    return myDate;
  };
  const endDate = addDays(new Date().toISOString().split("T")[0], 7);
  console.log(endDate.toISOString().split("T")[0]);
  console.log(today);

  console.log(dataBuku);

  const tombolPinjamBuku = () => {
    axios
      .post(`${url}/v1/api/peminjaman/${idBook}/${idAnggota}/pinjam`, {
        tanggalPengembalian: pengembalian,
      })
      .then((res) => {
        setCekPost(res.status);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(cekPost);


    return (
      <>
        <div className="App h-screen bg-slate-900 p-20">
          <div className="card flex block bg-white rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="left-section w-2/6 max-h-[500px] rounded-l-lg">
              <img className="h-full rounded-l-lg" src={`http://localhost:5000/${dataBuku && dataBuku.imageUrl}`} alt="cover-book"></img>
            </div>
            <div className="right-section w-4/6 max-h-[500px] ">
              <div className="close-button float-right p-5">
                <a href="../"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg></a>
              </div>
              <div className="book-description px-12 pt-3 pb-12 mr-10">
                <h3 className="title text-3xl py-2 mt-5">{dataBuku && dataBuku.title}</h3>
                <h3 className="author text-xl py-2">{dataBuku && dataBuku.author}</h3>
                <h4 className="publish-date text-md py-1">{dataBuku && dataBuku.isbn}</h4>
                <h4 className="publish-date text-md py-1">Penerbit       : {dataBuku && dataBuku.publisher}</h4>
                <h4 className="publish-date text-md py-1">Tanggal Terbit : {dataBuku && dataBuku.publishDate.split("T")[0]}</h4>
                <p className="sinopsis py-2 pb-4">{dataBuku && dataBuku.description}</p>
                <div className="date-section flex flex-row py-2">
                <h3 className="mr-2">Tanggal Pengembalian :</h3>
                <input
                  type="date"
                  name="tanggalPengembalian"
                  onChange={(e) => setPengembalian(e.target.value)}
                  min={today}
                  max={endDate.toISOString().split("T")[0]}
                />
              </div>
              {idAnggota !== "" ? 
                (<button onClick={tombolPinjamBuku} className="rounded-full p-2 mt-5 mb-3 bg-slate-800 text-white w-full">Pinjam Buku</button> )
                : (<a href="../login"><button className="rounded-full p-2 mt-5 mb-3 bg-slate-500 hover:bg-slate-600 text-white w-full pointer-events-none">Login </button></a>)
              }
              
              {cekPost === 201 ? (
                <div class="p-2 mb-4 text-center text-sm text-cyan-900 border bg-blue-100 rounded-full dark:bg-blue-200 dark:text-blue-800" role="alert">
                  <span class="font-medium">Berhasil Meminjam</span>
                </div>
              ) : ""
              }

              

              </div>
              
            </div>
          </div>
        </div>
      </>
    )
  }