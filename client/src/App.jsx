import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import { AuthProvider } from './context/AuthContext';
import {ProtectedRoute} from './protectedRoutes'

function App() {

  return (

    <AuthProvider>
    <BrowserRouter>
          <Routes>
                
                <Route path='/login' element={<LoginPage/>}></Route>
                <Route path='/register' element={<RegisterPage/>}></Route>
                <Route element = {<ProtectedRoute/>}>
                  <Route path='/home' element={<Home/>}></Route>
                  <Route path='/pedidos' element={<></>}></Route>
                  <Route path='/pedidos-listos' element={<></>}></Route>
                  <Route path='/pedidos-pendientes' element={<></>}></Route>
                  <Route path='/placas-listas' element={<></>}></Route>
                  <Route path='/placas-pendientes' element={<></>}></Route>
                  <Route path='/usuarios' element={<></>}></Route>
                </Route>                
          </Routes>
    </BrowserRouter>
    </AuthProvider>

  )
}

export default App
