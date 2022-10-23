import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <div>
        <span className="font-bold text-slate-300">Ini Halaman About</span>
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};
