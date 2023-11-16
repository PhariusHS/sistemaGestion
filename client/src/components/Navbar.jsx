import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();
    console.log(isAuthenticated, user)
  
    return (
      <nav className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4">
        <h1 className="text-2xl font-bold">
          <Link to={isAuthenticated ? "/home" : "/login"}>home</Link>
        </h1>
        <ul className="flex gap-x-2">
          {isAuthenticated ? (
            <>
              <li className="whitespace-nowrap bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link to="/pedidos-listos">Pedidos Listos</Link>
              </li>
              <li className="whitespace-nowrap bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link to="/pedidos-pendientes">Pedidos Pendientes</Link>
              </li>
              <li className="whitespace-nowrap bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link to="/placas-listas">placas Listas</Link>
              </li>
              <li className="whitespace-nowrap bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link to="/placas-pendientes">Placas Pendientes</Link>
              </li>
              

            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  }

export default Navbar