import React from "react";
import { useState, useEffect } from "react";
import Placa from './placas/Placa'
import PlacasForm from './PlacasForm'
import { IoIosRefresh } from "react-icons/io"; 
import { usePlaca } from "../context/PlacasContext";

function PlacasGrid() {
  const { getPlacas, placas } = usePlaca();
  const [componente, setComponente] = useState(1);

  const handleButtons = (n) => {
    setComponente(n);
  };

  useEffect(() => {
    getPlacas();
    console.log(getPlacas())
    console.log(placas)
  }, []);



  return (
    <>
      <div className="bg-gray-100">
        <div className=" bg-white rounded-lg shadow-lg p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">
            {componente === 1 && "Lista de Placas"}
            {componente === 2 &&  "Placas listos"}
            {componente === 3 && "Placas pendientes"}
          </h1>

          <div className="grid grid-cols-3 gap-4 justify-center">
            <button
              onClick={() => handleButtons(3)}
              className="whitespace-nowrap bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center"
              type="button"
            >
              Pendientes
            </button>
            <button
              onClick={() => handleButtons(1)}
              className="whitespace-nowrap bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Todas
            </button>
            <button
              onClick={() => handleButtons(2)}
              className="whitespace-nowrap bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Listas
            </button>
          </div>

          <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg  max-h-96 mt-10 mb-10 overflow-y-auto">
            <div className="max-w-full mx-auto bg-white border border-black p-5 rounded-lg max-h-fit items-center justify-center">
              {componente === 1 &&
                placas.map((placa) => (
                  <Placa
                    key={placa._id} 
                    color={placa.color}
                    ancho={placa.ancho}
                    largo={placa.largo}
                    alto={placa.alto}
                    densidad={placa.densidad}
                    masa={placa.masa}
                    estado={placa.estado}
                  />
                ))}

              {componente === 2 &&
                placas.map((placa) => {
                  if (placa.terminado) {
                    return (
                      <Placa
                        key={placa._id}
         
                        color={placa.color}
                        ancho={placa.ancho}
                        largo={placa.largo}
                        alto={placa.alto}
                        densidad={placa.densidad}
                        masa={placa.masa}
                        estado={placa.estado}
                      />
                    );
                  }
                })}
              {componente === 3 &&
                placas.map((placa) => {
                  if (!placa.terminado) {
                    return (
                      <Placa
                      key={placa._id} 
                      color={placa.color}
                      ancho={placa.ancho}
                      largo={placa.largo}
                      alto={placa.alto}
                      densidad={placa.densidad}
                      masa={placa.masa}
                      estado={placa.estado}

                      />
                    );
                  }
                })}
            </div>
          </div>
          <div className=" flex flex-row gap-5 justify-center">
            <PlacasForm />
            <form className=" flex flex-row gap-5 justify-center ">
              <button type="submit" className="px-3"><IoIosRefresh/></button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlacasGrid;
