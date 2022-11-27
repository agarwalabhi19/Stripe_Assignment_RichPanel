import React from "react";

const ActivePage = () => {
  return (
    <div className="summary-container">
      <div className="summary-heading">
        <div className="summary-main">Current Plan Details</div>
        <div className="summary-secondary">Active</div>
        <div className="summary-btn">Cancel</div>
      </div>
      <div className="plan-details">Basic Plan</div>
      <div className="price-details">200rs/month</div>
      <div className="plan-btn">Change Plan</div>
      <div className="bottom-text">
        Your subscription has started on 28-11-2022 and will auto renew on
        28-12-2022
      </div>
    </div>
  );
};

export default ActivePage;
