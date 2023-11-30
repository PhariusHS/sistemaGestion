import { useForm } from "react-hook-form";
import { useState } from "react";
import { Modal } from "@mui/material";
import { usePedido } from "../context/PedidosContext";
import PlacasForm from '../components/PlacasForm'

function PedidosForm() {
  const { register, handleSubmit } = useForm();

  const { createPedido } = usePedido();

  const [open, setOpen] = useState(false);

  const modalOpen = () => {
    setOpen(true);
  };
  const modalClose = () => {
    setOpen(false);
  };

  const onSubmit = handleSubmit((data) => {
    createPedido(data);
    modalClose()
  });

  return (
    <div>
      <button
        onClick={modalOpen}
        className="bg-slate-400 rounded-lg px-4 py-2 my-2"
      >
        Agregar pedido
      </button>
      <Modal
        open={open}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-slate-100 m-8 p-12">
          <form onSubmit={onSubmit}>
            <h1>PEDIDO {}</h1>
            <input type="text" name="" id="" placeholder="cliente" {...register("cliente")}/>

            <input type="text" placeholder="RESPONSABLE" {...register("responsable")}/>

            <button className="bg-slate-400 rounded-lg px-4 py-2 my-2" >
              SAVE
            </button>
          </form>
          <PlacasForm/>
        </div>
      </Modal>
    </div>
  );
}

export default PedidosForm;