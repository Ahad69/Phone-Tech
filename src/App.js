import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Navber from "./Pages/Shared/Navbar/Navber";
import { useEffect, useState } from "react";
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
import NotFound from "./Pages/NotFound/NotFound";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import RequireAdmin from "./Pages/Auth/RequireAdmin/RequireAdmin";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Portfolio from "./Pages/Porfolio/Portfolio";
import Blogs from "./Pages/Blogs/Blogs";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
       {loading ? (
        <div className="loader pt-20 bg-black pb-40 ">
          <div className="bg-black pt-80 pb-80">
            <svg style={{borderRadius:"50%"  , borderTop:"15px solid red" ,borderBottom:"15px solid red" , margin: 'auto'}} className="animate-spin h-20 w-20  bg-transparent  border-orange-600 ..."> </svg>
        </div>
        </div>
      ) : (
        <>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<AboutUs />} />
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
          <Route path="payment/:id" element={<Payment></Payment>} />
          <Route index element={<DefaultDash />} />
          <Route path="review" element={<AddReview />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="add-products" element={<RequireAdmin><AddProduct /></RequireAdmin>} />
          <Route path="manage-products" element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
          <Route path="all-orders" element={<RequireAdmin><AllOrders /></RequireAdmin>} />
          <Route path="make-admin" element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
          
          

        </Route>
        <Route path="/login" element={<Sign></Sign>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      </>)}
    </div>

  );
}

export default App;
