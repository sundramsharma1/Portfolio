import React from "react";
import { FaRegUser, FaLaptopCode } from "react-icons/fa";
import { PiNotepad } from "react-icons/pi";
import { TiContacts } from "react-icons/ti";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = ({ bgcolor, darkmode }) => {
  const commonStyle = {
    color: bgcolor === "white" ? "black" : "#A6A6A6",
    background: bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"
  };

  return (
    <>
      <nav className="lg:block sm:block h-full"> 
        <div className={`w-24 rounded-lg ${darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`} p-5 flex flex-col items-center gap-2 me-5`}>
          <NavLink to="/" className="nav-link">
            <div className="w-16 rounded-lg flex flex-col justify-center items-center p-2 bg-slate-100" style={commonStyle}>
              <FaRegUser className="text-2xl" />
              <h1 className="text-sm">About</h1>
            </div>
          </NavLink>

          <NavLink to="/Resume" className="nav-link">
            <div className="w-16 rounded-lg flex flex-col items-center p-2" style={commonStyle}>
              <PiNotepad className="text-2xl" />
              <h1 className="text-sm">Resume</h1>
            </div>
          </NavLink>

          <NavLink to="/Projects" className="nav-link">
            <div className="w-16 rounded-lg flex flex-col justify-center items-center p-2" style={commonStyle}>
              <FaLaptopCode className="text-2xl" />
              <h1 className="text-sm">Projects</h1>
            </div>
          </NavLink>

          <NavLink to="/Certify" className="nav-link">
            <div className="w-16 rounded-lg flex flex-col justify-center items-center p-2" style={commonStyle}>
              <AiOutlineSafetyCertificate className="text-2xl" />
              <h1 className="text-sm p-1">Skills</h1>
            </div>
          </NavLink>

          <NavLink to="/Contact" className="nav-link">
            <div className="w-16 rounded-lg flex flex-col justify-center items-center p-2" style={commonStyle}>
              <TiContacts className="text-2xl" />
              <h1 className="text-sm">Contacts</h1>
            </div>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
