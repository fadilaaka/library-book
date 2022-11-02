import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login.png";
import axios from "axios";

export const Login = () => {
  const url = "https://frightful-phantom-89997.herokuapp.com";

  const [error, setError] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, []);

  const loginAkun = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(`${url}/v1/api/login`, {
        username: username,
        password: password,
      });
      console.log(res);
      await localStorage.setItem("user-info", JSON.stringify(res.data.anggota));
      navigate("/dashboard");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <div className="bg-zinc-100 h-screen w-screen">
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="bg-gray-700 flex flex-col lg:flex-row w-5/6 h-5/6 lg:h-3/4 rounded-3xl">
            <img
              className="h-40 lg:h-96 inline-flex items-center m-5 mt-5 m-auto lg:m-14"
              src={loginImg}
              alt=""
            />
            <form className="max-w-[400px] w-full h-4/5 my-auto mx-auto p-4 px-4 rounded-lg">
              {error && (
                <div
                  className="bg-red-100 rounded-lg py-5 px-6 text-base text-red-700 mt-[-40px]"
                  role="alert"
                >
                  {error}
                </div>
              )}
              <h2 className="text-2xl lg:text-4xl text-white font-bold text-center mb-3 lg:mb-5">
                SIGN IN
              </h2>
              <div className="flex flex-col text-gray-400 py-2">
                <label>Username</label>
                <input
                  className="rounded-lg bg-gray-900 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col text-gray-400 py-2 ">
                <label>Password</label>
                <input
                  className="rounded-lg bg-gray-900 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <button
                onClick={loginAkun}
                className="w-full my-5 py-2 bg-zinc-200 shadow-lg  shadow-grey-500/50 hover:bg-zinc-300 hover:shadow-gray-500/70 font-semibold rounded-lg"
              >
                Login
              </button>
              <div className="text-gray-400 py-0 lg:py-2 text-center">
                <p className="">
                  Belum mempunyai akun?
                  <a href="../registrasi" className="ml-1 underline">
                    Registrasi.
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
