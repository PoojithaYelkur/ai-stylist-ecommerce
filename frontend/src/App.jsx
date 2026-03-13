import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;