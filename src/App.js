import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Navber from "./Pages/Shared/Navbar/Navber";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Pages/Shared/Footer/Footer";
import Sign from "./Pages/Auth/Sign/Sign";
import RequireAuth from "./Pages/Auth/RequireAuth/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Sign></Sign>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
