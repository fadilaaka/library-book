import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/login.png";
import axios from "axios";

export const Registrasi = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [telp, setTelp] = useState("");
  const [alamat, setAlamat] = useState("");

  const url = "http://localhost:5000";

  const registerAkun = (e) => {
    e.preventDefault();
    axios
      .post(`${url}/v1/api/registration`, {
        username: username,
        password: password,
        name: name,
        telp: telp,
        alamat: alamat,
      })
      .then((res) => {
        alert(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="bg-zinc-100 h-screen w-screen">
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="bg-gray-700 flex flex-row w-5/6 h-5/6 lg:h-3/4 rounded-3xl">
            <form className="max-w-[650px] w-full h-4/5 mx-auto px-8 py-2 lg:py-3 rounded-lg">
              <h2 className="text-2xl lg:text-4xl text-white font-bold text-center lg:p-5">
                SIGN UP
              </h2>
              <div className="flex flex-col lg:flex-row">
                <div className="basis-full lg:basis-1/2 flex flex-col text-gray-400 py-2 mx-1">
                  <label className="text-sm">Nama Lengkap</label>
                  <input
                    className="text-xs lg:text-base rounded-lg bg-gray-900 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="basis-full lg:basis-1/2 flex flex-col text-gray-400 py-2 mx-1">
                  <label className="text-sm">Nomor Telepon</label>
                  <input
                    className="text-xs lg:text-base rounded-lg bg-gray-900 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                    type="text"
                    telp="telp"
                    value={telp}
                    onChange={(e) => setTelp(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-row">
                <div className="basis-full flex flex-col text-gray-400 py-2 mx-1">
                  <label className="text-sm">Alamat</label>
                  <textarea
                    className="text-xs lg:text-base rounded-lg bg-gray-900 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                    type="text"
                    alamat="alamat"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row">
                <div className="basis-full lg:basis-1/2 flex flex-col text-gray-400 py-2 mx-1">
                  <label className="text-sm">Username</label>
                  <input
                    className="text-xs lg:text-base rounded-lg bg-gray-900 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                    type="text"
                    username="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="basis-full lg:basis-1/2 flex flex-col text-gray-400 py-2 mx-1">
                  <label className="text-sm">Password</label>
                  <input
                    className="text-xs lg:text-base rounded-lg bg-gray-900 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                    type="password"
                    password="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="text-center py-0 mx-1 lg:py-2">
                <button
                  className="w-full my-4 lg:my-3 py-2 bg-zinc-200 shadow-lg shadow-grey-500/50 hover:bg-zinc-300 hover:shadow-gray-500/70 font-semibold rounded-lg"
                  onClick={registerAkun}
                >
                  Daftar
                </button>
                <p className="text-gray-400">
                  Sudah mempunyai akun?
                  <a href="../login" className="ml-1 underline">
                    Login.
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
