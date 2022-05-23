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
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import DefaultDash from "./Pages/Dashboard/DefaultDash/DefaultDash";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import AllOrders from "./Pages/Dashboard/AllOrders/AllOrders";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";

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
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<DefaultDash />} />
          <Route path="review" element={<AddReview />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="add-products" element={<AddProduct />} />
          <Route path="all-orders" element={<AllOrders />} />
          <Route path="make-admin" element={<MakeAdmin />} />

        </Route>
        <Route path="/login" element={<Sign></Sign>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
