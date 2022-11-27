import React, { useState } from "react";
import CreditCardInput from "react-credit-card-input";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState(null);
  const [expiry, setExpiry] = useState(null);
  const [cvc, setCVV] = useState(null);
  const handleCardCVCChange = (e) => {
    setCVV(e.target.value);
  };
  const handleCardExpiryChange = (e) => {
    setExpiry(e.target.value);
  };
  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };
  return (
    <div className="payment-container">
      <div className="left-pane">
        <div className="left-heading">Complete Payment</div>
        <div className="left-subheading">
          {" "}
          Enter your credit card details below
        </div>
        <div className="cardinput">
          <CreditCardInput
            className="cardinput"
            cardNumberInputProps={{
              value: cardNumber,
              onChange: handleCardNumberChange,
            }}
            cardExpiryInputProps={{
              value: expiry,
              onChange: handleCardExpiryChange,
            }}
            cardCVCInputProps={{ value: cvc, onChange: handleCardCVCChange }}
            fieldClassName="input"
          />
        </div>
        <div
          className="submit-btn"
          onClick={() => {
            window.location.href = "/status";
          }}
        >
          Confirm Payment
        </div>
      </div>
      <div className="right-pane">
        <div className="heading">Order Summary</div>
        <div className="text-box">
          <div className="text-val">Plan Name</div>
          <div className="text-val">Mobile</div>
        </div>
        <div className="text-box">
          <div className="text-val">Billing Cycle</div>
          <div className="text-val">200rs</div>
        </div>
        <div className="text-box">
          <div className="text-val">Plan Price</div>
          <div className="text-val">200rs/mon</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PaymentPage;
