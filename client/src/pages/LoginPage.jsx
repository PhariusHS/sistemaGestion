import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import {Link} from 'react-router-dom'
function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {signin, errors: signinErrors} = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  return (
    <section className="flex h-[calc(100vh-100px)] items-center justify-center ">
      <div className="bg-zinc-700 rounded-md max-w-md p-10">

      {signinErrors.map((error, i) => (
             <div className="bg-red-500 text-white text-center" key={i}>{error}</div>
        ))    
        }
        <h1 className="text-2xl font-bold">Ingreso</h1>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            {...register("email", { required: true })}
            className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-full "
          />
          {errors.email && (
            <p className="text-red-500">Se requiere un e-mail</p>
          )}
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
            className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-full"
          />
          {errors.password && (
            <p className="text-red-500">Se requiere una contraseña</p>
          )}
          <button
            type="submit"
            className="bg-slate-400 rounded-lg px-4 py-2 my-2"
          >
            Ingresar
          </button>
        </form>

        <p className="flex gap-x-2 justify-between">¿No tenes cuenta?    <Link to="/register" className=" text-sky-500">Registrarse</Link></p>
      </div>
    </section>
  );
}

export default LoginPage;
