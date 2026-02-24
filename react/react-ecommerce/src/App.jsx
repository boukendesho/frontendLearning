// import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Header } from "./pages/Header";
import { Footer } from "./pages/Footer";


function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
