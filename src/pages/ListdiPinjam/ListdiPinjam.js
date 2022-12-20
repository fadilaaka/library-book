import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import axios from "axios";
import { Result } from "postcss";


const ListdiPinjam = () => {
  const [DataPeminjaman, setDataPeminjaman] = useState([])
  const  getDataPeminjaman = (userid) => {
    axios.get(`http://localhost:5000/v1/api/list-peminjaman/${userid}`)
    .then(result=>{
      console.log(result)
      setDataPeminjaman(result.data.anggota)
    })
  }
  useEffect(()=>{
    if (localStorage.getItem("user-info")!== null){
      const idAnggota = JSON.parse(localStorage.getItem("user-info"))
      console.log(idAnggota)

      getDataPeminjaman(idAnggota._id)
    }
  },[])
  console.log("Ini data peminjaman: ",DataPeminjaman)
    return (
        <>
        <h1 style={{fontSize:40}} className="underline p-[10px]"> List Peminjaman Buku</h1>
        
<div className="flex flex-col">
  <Link to={"/"} className="self-start ml-5 bg-sky-700 text-white px-5 py-2 rounded-md">
    Back
  </Link>
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center">
          <thead className="border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                No.
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Cover Buku
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Judul Buku
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Penulis
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Tanggal Peminjaman
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Tanggal Pengembalian 
              </th>
            </tr>
          </thead>
          <tbody>
            
              {DataPeminjaman.peminjaman && DataPeminjaman.peminjaman.map((result, index)=>{
                return(
              
             <tr key={index} className="border-b bg-white-50 border-gray-200">
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                {index+1}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <img className="bg-auto mx-auto" height={50} width={100} src={`http://localhost:5000/${result.book.imageUrl}`}/>
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {result.book.title}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {result.book.author}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {result.tanggalPeminjaman.split("T")[0]}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {result.tanggalPengembalian.split("T")[0]}
              </td>
              </tr>
      
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default ListdiPinjam