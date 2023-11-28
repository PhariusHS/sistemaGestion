import { useForm } from "react-hook-form";
import { useState } from "react";
import { Modal } from "@mui/material";
import { usePlaca } from "../context/PlacasContext";

function PlacasForm() {
  const { register, handleSubmit } = useForm();

  const { createPlaca } = usePlaca();

  const [open, setOpen] = useState(false);

  const modalPlacasOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const modalPlacasClose = () => {

    setOpen(false);
  };

  const onSubmit = handleSubmit((data) => {
    modalPlacasClose();
    createPlaca(data);
  });

  return (
    <div>
      <button
        onClick={modalPlacasOpen}
        className="bg-slate-400 rounded-lg px-4 py-2 my-2"
      >
        Agregar placa
      </button>

      <Modal
        open={open}
        onClose={modalPlacasClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-slate-100 m-8 p-12">
          <form onSubmit={onSubmit}>
            <h1>Placa {}</h1>

            <label htmlFor=""> COLOR: </label>
            <select
              name="COLOR Placa"
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

            <select
              name="ESTADO"
              id=""
              className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-full"
              {...register("estado")}
            >
              <option value="CORTADO">CORTADO</option>
              <option value="LIJADO">LIJADO</option>
              <option value="EMBALADO">EMBALADO</option>
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

            <input
              type="number"
              placeholder="masa"
              {...register("masa")}
              className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-fit"
            />

            <input
              type="number"
              placeholder="densidad"
              {...register("densidad")}
              className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-fit"
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

export default PlacasForm;
