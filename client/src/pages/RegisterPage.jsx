import React from "react";
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

function RegisterPage() {

  const { register, handleSubmit } = useForm();

  const submit = handleSubmit(async (values) => {
    console.log(values);
    const res = await registerRequest(values); //fetch-post hecho con axios en auth.js
    console.log(res);
  });
  


  return (
    <section className="flex h-[calc(100vh-100px)] items-center justify-center ">
      <div className="bg-zinc-700 rounded-md max-w-md p-10">
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Nombre"
          {...register("username", { required: true })}
          className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-full  "
        />
        <input
          type="email"
          placeholder="E-mail"
          {...register("email", { required: true })}
          className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-full "
        />
        <input
          type="password"
          placeholder="Contraseña"
          {...register("password", { required: true })}
          className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-full"
        />
        <button
          type="submit"
          className="bg-slate-400 rounded-lg px-4 py-2 my-2"
        >
          Register
        </button>
      </form>
      </div>
    </section>
  );
}
export default RegisterPage;
