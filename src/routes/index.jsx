import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
// import ProfileEdit from "../Component/ProfilEdit";

axios.defaults.baseURL = "http://18.143.118.96:8000";
function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/proedit" element={<ProfileEdit />} /> */}
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
