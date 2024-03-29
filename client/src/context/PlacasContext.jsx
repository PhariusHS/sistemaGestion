import { createContext, useContext, useState } from "react";
import {createPlacasRequest, getPlacasRequest, deletePlacasRequest, updatePlacasRequest} from '../api/placas'

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

    const getPlacas = async () => {
      try {
        const res = await getPlacasRequest();
        setPlacas(res.data);
      } catch {
        console.error(error);
      }
    };
  
    const createPlaca = async (placa) =>{
      const res =  await createPlacasRequest(placa)
      console.log(res)
  
    }  

    const deletePlaca = async (id) => {
      try {
        const res = await deletePlacasRequest(id);
        if (res.status === 204)
          setPlacas(placas.filter((placa) => placa._id !== id));
      } catch (error) {
        console.log(error);
      }
    };
  
    const updatePlaca = async (id, placa) => {
      try {
        await updatePlacasRequest(id, placa);
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <PlacaContext.Provider
          value={{
            placas,
            createPlaca,
            getPlacas,
            deletePlaca,
            updatePlaca

            
          }}
        >
          {children}
        </PlacaContext.Provider>
      );}