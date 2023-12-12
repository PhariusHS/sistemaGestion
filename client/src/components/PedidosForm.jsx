import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { usePedido } from "../context/PedidosContext";
import PlacasForm from "../components/PlacasForm";
import { Navigate, useParams } from "react-router-dom";

function PedidosForm() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const params = useParams();
  const { createPedido, updatePedido, getPedido } = usePedido();
  const [open, setOpen] = useState(false);
  const checked = false;
  const modalOpen = () => {
    setOpen(true);
  };
  const modalClose = () => {
    setOpen(false);
  };

  const idP = params.id;

  useEffect(() => {
    console.log(params.id);
  }, []);

  const onSubmit = handleSubmit((data) => {
    try {
      if (params.id) {
        updatePedido(idP, data);
      } else {
        createPedido(data);
        modalClose();
      }
    } catch (error) {
      console.log(error);
    }
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
        aria-labelledby="modal-modal-cliente"
        aria-describedby="modal-modal-responsable"
      >
        <div className="bg-slate-100 m-8 p-12">
          <form onSubmit={onSubmit}>
            <h1>PEDIDO {}</h1>
            <input type="text" placeholder="cliente" {...register("cliente")} />

            <input
              type="text"
              placeholder="RESPONSABLE"
              {...register("responsable")}
            />

            <input
              type="hidden"
              {...register("terminado", { value: checked })}
            />

            <button
              type="submit"
              className="bg-slate-400 rounded-lg px-4 py-2 my-2"
            >
              SAVE
            </button>
          </form>
          <PlacasForm />
        </div>
      </Modal>
    </div>
  );
}

export default PedidosForm;
