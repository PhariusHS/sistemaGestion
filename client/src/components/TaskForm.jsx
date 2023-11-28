import { useForm } from "react-hook-form";
import { useState } from "react";
import { Modal } from "@mui/material";
import { usePedido } from "../context/PedidosContext";

function TaskForm() {
  const { register, handleSubmit } = useForm();


  const {createPedido} = usePedido();



  const [open, setOpen] = useState(false);

  const modalOpen = () => {
    setOpen(true);
  };
  const modalClose = () => {
    setOpen(false);
  };

  const onSubmit = handleSubmit((data) => {
    createPedido(data)
  })

  

  return (
    <div>
      <button onClick={modalOpen} className="bg-slate-400 rounded-lg px-4 py-2 my-2">Agregar placa</button>
      <Modal
      
        open={open}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-slate-100 m-8 p-12">
        <form onSubmit={onSubmit}>
          <h1>PEDIDO {}</h1>

          <label htmlFor=""> COLOR: </label>
          <select
            name="COLOR PEDIDO"
            id=""
            className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-full"
          
            {...register("color")}
          >
            <option value="-">-</option>
            <option value="A"> A</option>
            <option value="B"> B</option>
            <option value="C"> C</option>
            <option value="D"> D</option>
            <option value="E"> E</option>
            <option value="F"> F</option>
          </select>
          
          <label>Alto[mm]: </label>
          <input
            type="number"
            name=""
            id=""
            className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-fit"
            placeholder="10"
            {...register("alto")}

          />

          <label>Largo[mm]: </label>
          <input
            type="number"
            name=""
            id="" 
            className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-fit"
            placeholder="10"
            {...register("largo")}
          />

          <label>Grosor[mm]: </label>
          <input
            type="number"
            name=""
            id=""
            className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-fit"
            placeholder="10"
            {...register("ancho")}
          />

          <button className="bg-slate-400 rounded-lg px-4 py-2 my-2">
            SAVE
          </button>
        </form>
        </div>
      </Modal>
    </div>
  );
}

export default TaskForm;
