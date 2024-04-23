import "./App.css";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
          <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
          </>
  );
}

export default App;
