import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import imagenes from "../assets/imagenes";

export function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
  <nav className="max-w-full mx-auto bg-white rounded-lg shadow-lg p-4">
    {isAuthenticated && (
      <div className="flex justify-end">
        <Link to="/login" onClick={() => logout()}>
          <button className="whitespace-nowrap bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Logout
          </button>
        </Link>
      </div>
      )}
    <h1 className="flex justify-center items-center mb-4">
      <Link to={isAuthenticated ? "/placas" : "/login"}>
        <img src={imagenes.img1} className="w-48 h-20 mx-auto mr-2" alt="Logo Tresol" />
      </Link>
      
    </h1>
    <ul className="flex justify-center flex-col sm:flex-row">
      {isAuthenticated ? (
        <>
          <li className="flex justify-center mb-2 mx-1">
            <Link to="/pedidos">
              <button className="w-80 whitespace-nowrap bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Pedidos
              </button>
            </Link>
          </li>
          <li className="flex justify-center mb-2 mx-1">
            <Link to="/placas">
              <button className="w-80 whitespace-nowrap bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Placas
              </button>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="flex justify-center mb-2 mx-auto">
            <Link to="/login">
              <button className="whitespace-nowrap bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Login
              </button>
            </Link>
          </li>
          <li className="flex justify-center mx-auto">
            <Link to="/register">
              <button className="whitespace-nowrap bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Register
              </button>
            </Link>
          </li>
        </>
      )}
    </ul>
  </nav>
  
  );
}

export default Navbar;
