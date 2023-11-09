import React from 'react'

function Home() {
    return (
        <div className="bg-red-100 p-4 max-h-1000">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4">
                <h1 className="text-2xl font-bold mb-4 text-center">Estado de Pedidos y Placas</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                    <button className="whitespace-nowrap bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Pedidos Pendientes</button>
                    <button className="whitespace-nowrap bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Pedidos Listos</button>
                    <button className="whitespace-nowrap bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Placas Pendientes</button>
                    <button className="whitespace-nowrap bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Placas Listas</button>
                </div>
                </div>
                <div class="mt-4 flex">
                    <div class="w-3/4 bg-white rounded-lg shadow-lg p-4">
                        <h2 class="text-2xl font-bold mb-4 text-center">Planilla general de pedidos</h2>
                       
                        <div class="flex ">
                            <div class="w-1/5 bg-red-300 pr-4">
                                <table class="w-full ">
                                <thead>
                                    <tr>
                                    <th class="text-2xl font-bold mb-4 text-center">N° de pedido</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <h1 class="text-center">xxxxxxxxxxxxxxx</h1>
                                </tbody>
                                </table>
                            </div>
                                <div class="w-1/100 pl-4">
                                </div>
                            <div class="w-4/5 bg-red-300 pl-4">
                                <table class="w-full ">
                                <thead>
                                    <tr>
                                    <th class="text-2xl font-bold mb-4 text-center">Descripción de pedido</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <h1 class="text-center">xxxxxxxxxxxxxxx</h1>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/5 bg-white rounded-lg shadow-lg p-4">
                    <h2 class="text-2xl font-bold mb-4 text-center">SUS</h2> 
                        <div class="bg-red-300 rounded-lg shadow-lg p-4">
                            <h2 class="text-2xl font-bold mb-4 text-center">a1</h2> 
                        </div>
                        <br>
                        </br>
                        <div class="bg-red-300 rounded-lg shadow-lg p-4">
                            <h2 class="text-2xl font-bold mb-4 text-center">a2</h2> 
                        </div>
                        <br>
                        </br>
                        <div class="bg-red-300 rounded-lg shadow-lg p-4">
                            <h2 class="text-2xl font-bold mb-4 text-center">a3</h2> 
                        </div>
                    </div>
                    </div>

        </div>
    );
  }
  
  export default Home;
