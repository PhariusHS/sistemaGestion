import React from 'react'
import {useForm} from 'react-hook-form'
function RegisterPage() {

    const {register, handleSubmit} = useForm()

  return (
    <section className='bg-zinc-700 max-w-md p-10 rounded-md'>
   <form onSubmit={handleSubmit((values) => {
    console.log(values)
   })}>
    <input type="text" placeholder='Nombre'{... register("username", {required: true})} className='bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-full'/>
    <input type="email" placeholder='E-mail'{... register("email", {required: true})} className='bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-full'/>
    <input type="password" placeholder='Contraseña'{... register("password", {required: true})} className='bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-full'/>
    <button type='submit' className='bg-slate-400 rounded-lg px-4 py-2 my-2'>Register</button>

   </form>
   </section>
  )
}
export default RegisterPage