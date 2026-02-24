// import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import { Home } from "./pages/Home.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="checkout" element={<div>test checkout</div>} />
      </Routes>
  );
}

export default App;
