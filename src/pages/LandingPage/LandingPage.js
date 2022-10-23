import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <div>
        <span className="font-bold">Ini Halaman Landing Page</span>
      </div>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};
