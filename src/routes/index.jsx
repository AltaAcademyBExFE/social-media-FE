import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../Component/Navbar";
import Homepage from "../pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
