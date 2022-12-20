import React, { useState, useRef } from "react";
import axios from "axios";
import Loading from "../../components/Loading";

export const Registrasi = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [telp, setTelp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [file, setFile] = useState();

  const fileRef = useRef(null);

  const url = "http://localhost:5000";

  const [successRegistration, setSuccessRegistration] = useState();
  const [loading, setLoading] = useState(false);

  const registerAkun = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("name", name);
    formData.append("telp", telp);
    formData.append("alamat", alamat);
    axios
      .post(`${url}/v1/api/registration`, formData)
      .then((res) => {
        console.log(res);
        setSuccessRegistration(res.status);
        setLoading(false);
        setUsername("");
        setPassword("");
        setName("");
        setTelp("");
        setAlamat("");
        fileRef.current.value = null;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fileImageSelected = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  return (
    <>
      <div className="bg-zinc-100 h-screen w-screen">
        {successRegistration === 201 ? (
          <div
            className="p-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            role="alert"
          >
            <span className="font-medium">Registrasi Berhasil!</span>
            <p className="font-normal">
              Silahkan lanjutkan ke{" "}
              <a href={"/login"} className="font-bold hover:underline">
                login disini
              </a>
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="bg-gray-700 flex flex-row w-5/6 h-5/6 lg:h-100 rounded-3xl">
            <form
              className="max-w-[650px] w-full h-4/5 mx-auto px-8 py-2 lg:py-3 rounded-lg"
              onSubmit={(e) => registerAkun(e)}
              encType="multipart/form-data"
            >
              <h2 className="text-2xl lg:text-4xl text-white font-bold text-center p-1 mt-2 lg:p-5">
                SIGN UP
              </h2>

              <div className="flex flex-col lg:flex-row">
                <div className="basis-full lg:basis-1/2 flex flex-col text-gray-400 py-2 mx-1">
                  <label className="text-sm">
                    Nama Lengkap<sup className="font-bold text-red-500">*</sup>
                  </label>
                  <input
                    className="text-xs lg:text-base rounded-lg bg-gray-900 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="basis-full lg:basis-1/2 flex flex-col text-gray-400 py-2 mx-1">
                  <label className="text-sm">
                    Nomor Telepon<sup className="font-bold text-red-500">*</sup>
                  </label>
                  <input
                    className="text-xs lg:text-base rounded-lg bg-gray-900 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                    type="text"
                    telp="telp"
                    value={telp}
                    onChange={(e) => setTelp(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-row">
                <div className="basis-full flex flex-col text-gray-400 py-2 mx-1">
                  <label className="text-sm">
                    Alamat<sup className="font-bold text-red-500">*</sup>
                  </label>
                  <textarea
                    className="text-xs lg:text-base rounded-lg bg-gray-900 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                    type="text"
                    alamat="alamat"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row">
                <div className="basis-full lg:basis-1/2 flex flex-col text-gray-400 py-2 mx-1">
                  <label className="text-sm">
                    Username<sup className="font-bold text-red-500">*</sup>
                  </label>
                  <input
                    className="text-xs lg:text-base rounded-lg bg-gray-900 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                    type="text"
                    username="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="basis-full lg:basis-1/2 flex flex-col text-gray-400 py-2 mx-1">
                  <label className="text-sm">
                    Password<sup className="font-bold text-red-500">*</sup>
                  </label>
                  <input
                    className="text-xs lg:text-base rounded-lg bg-gray-900 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                    type="password"
                    password="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="basis-full lg:basis-1/2 flex flex-col text-gray-400 py-2 mx-1">
                <label className="text-sm mb-1">Upload Foto</label>
                <input
                  className="block text-xs lg:text-base rounded-lg bg-gray-900 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  file="file"
                  type={"file"}
                  accept={".png, .jpg"}
                  onChange={(e) => fileImageSelected(e)}
                  ref={fileRef}
                ></input>
              </div>

              <div className="text-center py-0 mx-1 lg:py-2">
                {loading ? (
                  <button className="w-full my-4 lg:my-5 py-2 bg-slate-300 shadow-lg shadow-grey-500/50 font-semibold rounded-lg pointer-events-none select-none">
                    <div className="flex flex-row items-center mx-auto text-center justify-center">
                      <Loading />
                      <p className="m-2">Processing...</p>
                    </div>
                  </button>
                ) : (
                  <button className="w-full my-4 lg:my-2 py-2 bg-zinc-200 shadow-lg shadow-grey-500/50 hover:bg-zinc-300 hover:shadow-gray-500/70 font-semibold rounded-lg">
                    Daftar
                  </button>
                )}
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
