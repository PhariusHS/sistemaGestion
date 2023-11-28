import { createContext, useContext, useState } from "react";
import {createPlacasRequest} from '../api/placas'

const PlacaContext = createContext();

export const usePlaca = () => {
    const context = useContext(PlacaContext);
  
    if (!context) {
      throw new Error("usePlaca must be used within in a provider");
    }
  
    return context;
  };

  export function PlacasProvider({children}) {
    const [placas, setPlacas] = useState([]);
  
    const createPlaca = async (placa) =>{
      const res =  await createPlacasRequest(placa)
      console.log(res)
  
    }  
    return (
        <PlacaContext.Provider
          value={{
            placas,
            createPlaca,
            
          }}
        >
          {children}
        </PlacaContext.Provider>
      );}