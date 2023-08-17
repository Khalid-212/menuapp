import React, { useState } from "react";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Header from "../../../Components/Header/Header";
import {
  getQRCodeOrders,
  getRestaurantById,
  updateQRCodeOrderStatus,
} from "../../../supabase";
import "./SuperAdmin.css";

function SuperAdmin() {
  const [restaurant, setRestaurant] = useState([]);
  const [orders, setOrders] = useState([]);
  const fetchorders = async () => {
    await getQRCodeOrders().then((res) => {
      setOrders(res);
      console.log(res);
    });
  };

  useEffect(() => {
    fetchorders();
  }, []);

  //   update order status
  const updateOrderStatus = async (id, status) => {
    await updateQRCodeOrderStatus(id, status).then((res) => {
      console.log(res);
      fetchorders();
    });
  };

  return (
    <div>
      <>
        <ToastContainer
          position="top-right"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="colored"
        />
        <Header pageTitle={"Super Admin"} />
        <div className="admin-dashboard">
          <div className="order-list">
            <h1 className="center">Qrcode Orders</h1>
            <br />
            {orders.map((order) => (
              <div className="howItWorks-step">
                <div className="status">
                  {order.RestaurantName}
                  <br />
                  <p>{order.order_status}</p>
                </div>
                {/* {order.RestaurantID} */}
                <br />
                <button
                  className="card-button"
                  onClick={() => updateOrderStatus(order.id, "accepted")}
                >
                  Done
                </button>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
}

export default SuperAdmin;
