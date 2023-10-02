import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./Admin/Pages/AdminDashboard";
import MenuTile from "./Pages/Menus/MenuTile/MenuTile";
import MenuList from "./Pages/Menus/MenuList/MenuList";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import HomePage from "./Pages/HomePage/HomePage";
import { useSelector } from "react-redux";
import SuperAdmin from "./Admin/Pages/SuperAdmin/SuperAdmin";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";

function App() {
  const Loggding = useSelector((state) => state.user.user);
  const payment = useSelector((state) => state.payment.payment);
  console.log("payment: "+payment)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={Loggding ? <AdminDashboard /> : <LoginPage />}
        />
        <Route
          path="/loginn"
          element={Loggding ? <SuperAdmin /> : <LoginPage />}
        />
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        <Route
          path="/admin"
          element={Loggding ? <AdminDashboard /> : <LoginPage />}
        />
        <Route
          path="/thankyou"
          element={ "Thank You"}
        />
        <Route
          path="/payment"
          element={<PaymentPage />}
        />
        <Route path="/listmenu:id" element={<MenuList />} />
        <Route path="/menu/:id" element={<MenuTile />} />{" "}
        {/* Use :id as a parameter */}
        <Route path="*" element={"Page Not Found"} />
      </Routes>
    </div>
  );
}

export default App;
