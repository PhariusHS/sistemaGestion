import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import TaskPage from './pages/TaskPage';
import { AuthProvider } from './context/AuthContext';
import {ProtectedRoute} from './protectedRoutes'
import Navbar from './components/navbar';
import Pedidos from './pages/Pedidos'
import PedidosListos from './pages/PedidosListos'
import PedidosPendientes from './pages/PedidosPendientes'

import PlacasListas from './pages/PlacasListas'
import PlacasPendientes from './pages/PlacasPendientes'

function App() {

  return (

    <AuthProvider>
    <BrowserRouter>

    <Navbar/>
          <Routes>      
                <Route path='/login' element={<LoginPage/>}></Route>
                <Route path='/register' element={<RegisterPage/>}></Route>
                <Route element = {<ProtectedRoute/>}>
                  <Route path='/home' element={<TaskPage/>}></Route>
                  <Route path='/pedidos' element={<Pedidos/>}></Route>
                  <Route path='/pedidos-listos' element={<PedidosListos/>}></Route>
                  <Route path='/pedidos-pendientes' element={<PedidosPendientes/>}></Route>
                  <Route path='/placas-listas' element={<PlacasListas/>}></Route>
                  <Route path='/placas-pendientes' element={<PlacasPendientes/>}></Route>
                  <Route path='/usuarios' element={<></>}></Route></Route>                

          </Routes>

    </BrowserRouter>
    </AuthProvider>
    
  )
}

export default App
