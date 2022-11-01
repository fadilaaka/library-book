import { Route, Routes, useNavigate } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { About } from "./pages/About/About";
import { Registrasi } from "./pages/Registrasi/Registrasi";
import { Login } from "./pages/Login/Login";
import { Test } from "./pages/Test/Test";
import { PeminjamanBuku } from "./pages/PeminjamanBuku/PeminjamanBuku";
import { useEffect } from "react";

function App() {
  const isLoggedIn = localStorage.getItem("user-info");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isLoggedIn ? <LandingPage /> : <Login />} />
        <Route path="/dashboard" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/registrasi" element={<Registrasi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/peminjaman-buku" element={<PeminjamanBuku />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
