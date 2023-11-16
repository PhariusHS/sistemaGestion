import {useForm} from 'react-hook-form'



function TaskForm() {

    const {register, handleSubmit} = useForm()

  return (
    <div>
            <form action="">
                <h1>Pedido n* </h1>
                <label htmlFor=""> COLOR: </label>
                <select name="COLOR PEDIDO" id="" className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-full">
                     <option value="-"> -</option>
                     <option value="A"> A</option>
                     <option value="B"> B</option>
                     <option value="C"> C</option>
                     <option value="D"> D</option>
                     <option value="E"> E</option>
                     <option value="F"> F</option>
                     </select>
                     <label>Ancho[mm]: </label>
                    <input type="number" name="" id="" className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-2/3"/>

                    <label>Alto[mm]: </label>
                    <input type="number" name="" id="" className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-2/3"/>

                    <label>Grosor[mm]: </label>
                    <input type="number" name="" id="" className="bg-zinc-500 text-white px-4 rounded-md py-2 my-2 w-2/3"/>
                <button className="bg-slate-400 rounded-lg px-4 py-2 my-2">SAVE</button>
            </form>



    </div>
  )
}

export default TaskForm