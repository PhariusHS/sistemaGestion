import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();

  
    return (
      <nav className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 ">
        <h1 className="text-2xl font-bold flex justify-center items-center">
          <Link to={isAuthenticated ? "/home" : "/login"}>HOME</Link>
        </h1>
        <ul className="grid  grid-cols-1  sm:grid-cols-NavBar">
          {isAuthenticated ? (
            <>
              <li className="  bg-green-500  py-2 px-4  m-2 w-auto max-w-xs rounded focus:outline-none focus:shadow-outline hover:bg-green-700 text-white font-bold">
                <Link to="/pedidos-listos">Pedidos Listos</Link>
              </li>
              <li className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-2 rounded w-auto max-w-xs  focus:outline-none focus:shadow-outline ">
                <Link to="/pedidos-pendientes">Pedidos Pendientes</Link>
              </li>
              <li className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-2 w-auto max-w-xs  rounded focus:outline-none focus:shadow-outline">
                <Link to="/placas-listas">Placas Listas</Link>
              </li>
              <li className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4  m-2 w-auto max-w-xs  rounded focus:outline-none focus:shadow-outline">
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