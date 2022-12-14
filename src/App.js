import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Registrasi } from "./pages/Registrasi/Registrasi";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<LandingPage />} />
        <Route path="/registrasi" element={<Registrasi />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
