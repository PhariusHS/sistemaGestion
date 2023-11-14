import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import cookies from 'js-cookie'
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deberia estar dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user); //fetch-post hecho con axios en auth.js
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error.response);
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      setIsAuthenticated(true)
      setUser(res.data)
    } catch (error) {
      if (Array.isArray(error.response.data)){
        return  setErrors(error.response.data);
      }
      setErrors([error.response.data])
     


    }
  };

  useEffect(() =>{
    if(errors.length>0){
    const timer =  setTimeout(()=>{
        setErrors([])
      }, 10000)

      return () => clearTimeout(timer)
    }

  }, [errors])

  useEffect(()=>{
    function checkLogin () {
      const cookies = Cookies.get();

      if (cookies.token) {
        try {
          const res = verifyTokenRequest(cookies.token)
          if (!res.data) return setIsAuthenticated(false)
          
          setIsAuthenticated(true)
          setUser(res.data)
        } catch (error) {
          setIsAuthenticated(false)
          setUser(null)
        }
        
      }
    }
    checkLogin()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
