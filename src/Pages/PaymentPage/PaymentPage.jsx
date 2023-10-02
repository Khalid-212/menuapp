import React, { useState } from "react";
import "./PaymentPage.css";
import Header from "../../Components/Header/Header";

function PaymentPage() {
  const [amount, setAmount] = useState("");
  const ispaying = localStorage.getItem("ispaying");

  const refgen = () => {
    const ref = Math.random().toString(36).substring(7);
    return ref + "-negade";
  };

  const ref = refgen();
  return (
    <div>
          <Header />

          <form
            className="paymentForm"
            method="POST"
            action="https://api.chapa.co/v1/hosted/pay"
          >
            <label>Amount:</label>
            <input
              className="input"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <br />
            <input
              type="hidden"
              name="public_key"
              value={process.env.REACT_APP_CHAPA_PUBLIC_KEY}
            />
            <input className="input" type="hidden" name="tx_ref" value={ref} />
            <input
              className="input"
              type="hidden"
              name="amount"
              value={amount}
            />
            <input
              className="input"
              type="hidden"
              name="currency"
              value="ETB"
            />
            <input
              type="hidden"
              name="description"
              value="Paying with Confidence with cha"
              className="input"
            />
            <input
              type="hidden"
              name="logo"
              value="https://chapa.link/asset/images/chapa_swirl.svg"
            />
            <input
              type="hidden"
              name="callback_url"
              value="https://menuapp-21667.web.app/thankyou"
            />

            <input
              type="hidden"
              name="return_url"
              value="https://menuapp-21667.web.app/thankyou"
            />
            <input type="hidden" name="meta[title]" value="test" />
            <button className="btnSubmit" type="submit">
              Pay Now
            </button>
          </form>
        </div>
  );
}

export default PaymentPage;
