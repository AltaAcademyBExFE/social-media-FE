import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../Component/Navbar";
import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
