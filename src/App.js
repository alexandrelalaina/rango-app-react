import "./App.css";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
          <>
              <Header />
              <h2>Rango em Construcao...</h2>
              <Routes>
              <Route path="/" element={<Home />} />
              </Routes>
              <Footer />
          </>
  );
}

export default App;
