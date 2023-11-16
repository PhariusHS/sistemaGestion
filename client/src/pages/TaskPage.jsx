import React from "react";
import TaskForm from "../components/TaskForm";

function TaskPage() {
  return (
    <>
    <main className="bg-red-100 p-4 h-full">
      <header className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Estado de Pedidos y Placas
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
          <button
            className="whitespace-nowrap bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Pedidos Pendientes
          </button>
          <button
            className="whitespace-nowrap bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Pedidos Listos
          </button>
          <button
            className="whitespace-nowrap bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Placas Pendientes
          </button>
          <button
            className="whitespace-nowrap bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Placas Listas
          </button>
        </div>
      </header>


    </main>
          <section className="mt-4 flex ">

          <div className="rounded-md whitespace-nowrap  w-9/12">
                  <div className="bg-slate-500">PEDIDO 1</div>


          </div>


      <article className="rounded-md whitespace-nowrap bg-neutral-400 w-3/12">
        FUNCIONES
      </article>

</section>

<div className="my-10">
<TaskForm/>
</div>




</>


  );
}

export default TaskPage;
