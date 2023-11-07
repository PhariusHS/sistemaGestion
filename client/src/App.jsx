import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
function App() {

  return (

    <BrowserRouter>
          <Routes>
                <Route path='/' element={<></>}></Route>
                <Route path='/login' element={<LoginPage></LoginPage>}></Route>
                <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
                <Route path='/pedidos-listos' element={<></>}></Route>
                <Route path='/pedidos-pendientes' element={<></>}></Route>
                <Route path='/placas-listas' element={<></>}></Route>
                <Route path='/placas-pendientes' element={<></>}></Route>
                <Route path='/usuarios' element={<></>}></Route>

          </Routes>
    </BrowserRouter>

  )
}

export default App
