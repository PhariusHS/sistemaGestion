import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
function RegisterPage() {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/pedidos-listos");
  }, [isAuthenticated]);

  const submit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <section className="flex h-[calc(100vh-100px)] items-center justify-center ">
      <div className="bg-zinc-700 rounded-md max-w-md p-10">
        {registerErrors.map((error, i) => (
             <div className="bg-red-500 text-white text-center" key={i}>{error}</div>
        ))    
        }
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Nombre"
            {...register("username", { required: true })}
            className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-full  "
          />
          {errors.username && (<p className="text-red-500">Se requiere un nombre de usuario</p>)}
          <input
            type="email"
            placeholder="E-mail"
            {...register("email", { required: true })}
            className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-full "
          />
           {errors.email && (<p className="text-red-500">Se requiere un e-mail</p>)}
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
            className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-full"
          />
           {errors.password && (<p className="text-red-500">Se requiere una contraseña</p>)}
          <button
            type="submit"
            className="bg-slate-400 rounded-lg px-4 py-2 my-2"
          >
            Registrarse
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">¿Ya tenes tu cuenta?    <Link to="/login" className=" text-sky-500">Ingresa</Link></p>

      </div>
    </section>
  );
}
export default RegisterPage;
