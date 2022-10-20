import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../Component/Navbar";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Register from "../pages/Register";

axios.defaults.baseURL =
  "https://virtserver.swaggerhub.com/ALTA-Sosmed/openapi-alta-sosmed/1.0.0/";
function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
