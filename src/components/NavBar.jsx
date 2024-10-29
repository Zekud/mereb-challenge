import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="w-full bg-gray-800 h-16 shadow-md">
        <ul className="flex items-center justify-around h-full list-none p-0 m-0">
          <li className="flex-1 h-full">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center justify-center h-full text-white transition duration-300 ${
                  isActive ? "bg-blue-700" : "hover:bg-[#4a5568]"
                }`
              }
            >
              Tab 1
            </NavLink>
          </li>
          <li className="flex-1 h-full">
            <NavLink
              to="/tab2"
              className={({ isActive }) =>
                `flex items-center justify-center h-full text-white transition duration-300 ${
                  isActive ? "bg-blue-700" : "hover:bg-[#4a5568]"
                }`
              }
            >
              Tab 2
            </NavLink>
          </li>
          <li className="flex-1 h-full">
            <NavLink
              to="/tab3"
              className={({ isActive }) =>
                `flex items-center justify-center h-full text-white transition duration-300 ${
                  isActive ? "bg-blue-700" : "hover:bg-[#4a5568]"
                }`
              }
            >
              Tab 3
            </NavLink>
          </li>
          <li className="flex-1 h-full">
            <NavLink
              to="/tab4"
              className={({ isActive }) =>
                `flex items-center justify-center h-full text-white transition duration-300 ${
                  isActive ? "bg-blue-700" : "hover:bg-[#4a5568]"
                }`
              }
            >
              Tab 4
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
