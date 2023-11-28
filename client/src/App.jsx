import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./protectedRoutes";
import Navbar from "./components/navbar";
import Pedidos from "./pages/Pedidos";
import Placas from './pages/Placas'
import { PedidosProvider } from "./context/PedidosContext";
import { PlacasProvider } from "./context/PlacasContext";


function App() {
 
  return (
    <AuthProvider>

      <PedidosProvider>
        <PlacasProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginPage></LoginPage>}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/pedidos" element={<Pedidos />}></Route>
              <Route path="/placas" element={<Placas />}></Route>
              <Route path="/usuarios" element={<></>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        </PlacasProvider>
      </PedidosProvider>
    </AuthProvider>
  );
}

export default App;
