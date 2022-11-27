import { Typography } from "@material-ui/core";
import React, { useState } from "react";

const PricingComponent = () => {
  const [subscriptionType, changeSubscription] = useState("Monthly");
  const [currentSelected, changeType] = useState(0);
  const handleClick = (e, id) => {
    changeType(id);
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        height: "700px",
        width: "1000px",
        borderRadius: "20px",
      }}
    >
      <div className="pheading">Choose your Plan</div>
      <div className="blocks-t1">
        <div className="toggle">
          <div
            className={
              subscriptionType == "Monthly"
                ? "option active"
                : "option inactive"
            }
            onClick={() => {
              changeSubscription("Monthly");
            }}
          >
            Monthly
          </div>
          <div
            onClick={() => {
              changeSubscription("Yearly");
            }}
            className={
              subscriptionType == "Yearly" ? "option active" : "option inactive"
            }
          >
            Yearly
          </div>
        </div>
      </div>
      <div
        className="blocks-t2"
        onClick={(e) => {
          handleClick(e, 0);
        }}
      >
        <div
          className={
            currentSelected == 0
              ? "inner-box innerbox-active"
              : "inner-box innerbox-inactive"
          }
        >
          <div
            className={
              currentSelected == 0 ? "arrow-box-active" : "arrow-box-inactive"
            }
          ></div>
          <div className="innerbox-text">Mobile</div>
        </div>
      </div>
      <div
        className="blocks-t2"
        onClick={(e) => {
          handleClick(e, 1);
        }}
      >
        <div
          className={
            currentSelected == 1
              ? "inner-box innerbox-active"
              : "inner-box innerbox-inactive"
          }
        >
          <div
            className={
              currentSelected == 1 ? "arrow-box-active" : "arrow-box-inactive"
            }
          ></div>
          <div className="innerbox-text">Basic</div>
        </div>
      </div>
      <div
        className="blocks-t2"
        onClick={(e) => {
          handleClick(e, 2);
        }}
      >
        <div
          className={
            currentSelected == 2
              ? "inner-box innerbox-active"
              : "inner-box innerbox-inactive"
          }
        >
          <div
            className={
              currentSelected == 2 ? "arrow-box-active" : "arrow-box-inactive"
            }
          ></div>
          <div className="innerbox-text">Standard</div>
        </div>
      </div>
      <div
        className="blocks-t2"
        onClick={(e) => {
          handleClick(e, 3);
        }}
      >
        <div
          className={
            currentSelected == 3
              ? "inner-box innerbox-active"
              : "inner-box innerbox-inactive"
          }
        >
          <div
            className={
              currentSelected == 3 ? "arrow-box-active" : "arrow-box-inactive"
            }
          ></div>
          <div className="innerbox-text">Premium</div>
        </div>
      </div>

      <div className="blocks-t3">Monthly Price</div>
      <div
        className={
          currentSelected == 0
            ? "blocks-t4 innertext-active"
            : "blocks-t4 innertext-inactive"
        }
      >
        {subscriptionType == "Monthly" ? 100 : 1000}
      </div>
      <div
        className={
          currentSelected == 1
            ? "blocks-t4 innertext-active"
            : "blocks-t4 innertext-inactive"
        }
      >
        {subscriptionType == "Monthly" ? 200 : 2000}
      </div>
      <div
        className={
          currentSelected == 2
            ? "blocks-t4 innertext-active"
            : "blocks-t4 innertext-inactive"
        }
      >
        {subscriptionType == "Monthly" ? 500 : 5000}
      </div>
      <div
        className={
          currentSelected == 3
            ? "blocks-t4 innertext-active"
            : "blocks-t4 innertext-inactive"
        }
      >
        {subscriptionType == "Monthly" ? 700 : 7000}
      </div>

      <div className="blocks-t3">Video Quality</div>
      <div
        className={
          currentSelected == 0
            ? "blocks-t4 innertext-active"
            : "blocks-t4 innertext-inactive"
        }
      >
        Good
      </div>
      <div
        className={
          currentSelected == 1
            ? "blocks-t4 innertext-active"
            : "blocks-t4 innertext-inactive"
        }
      >
        Good
      </div>
      <div
        className={
          currentSelected == 2
            ? "blocks-t4 innertext-active"
            : "blocks-t4 innertext-inactive"
        }
      >
        Better
      </div>
      <div
        className={
          currentSelected == 3
            ? "blocks-t4 innertext-active"
            : "blocks-t4 innertext-inactive"
        }
      >
        Best
      </div>

      <div className="blocks-t3">Resolution</div>
      <div
        className={
          currentSelected == 0
            ? "blocks-t4 innertext-active"
            : "blocks-t4 innertext-inactive"
        }
      >
        480p
      </div>
      <div
        className={
          currentSelected == 1
            ? "blocks-t4 innertext-active"
            : "blocks-t4 innertext-inactive"
        }
      >
        480p
      </div>
      <div
        className={
          currentSelected == 2
            ? "blocks-t4 innertext-active"
            : "blocks-t4 innertext-inactive"
        }
      >
        1080p
      </div>
      <div
        className={
          currentSelected == 3
            ? "blocks-t4 innertext-active"
            : "blocks-t4 innertext-inactive"
        }
      >
        4K+HDR
      </div>

      <div className="blocks-t5">Devices you can use to watch</div>
      <div
        className={
          currentSelected == 0
            ? "blocks-t6 innertext-active"
            : "blocks-t6 innertext-inactive"
        }
      >
        <div className="innertext-box">Phone</div>
        <div className="innertext-box">Tablet</div>
      </div>
      <div
        className={
          currentSelected == 1
            ? "blocks-t6 innertext-active"
            : "blocks-t6 innertext-inactive"
        }
      >
        <div className="innertext-box">Phone</div>
        <div className="innertext-box">Tablet</div>
        <div className="innertext-box">PC</div>
        <div className="innertext-box">TV</div>
      </div>
      <div
        className={
          currentSelected == 2
            ? "blocks-t6 innertext-active"
            : "blocks-t6 innertext-inactive"
        }
      >
        <div className="innertext-box">Phone</div>
        <div className="innertext-box">Tablet</div>
        <div className="innertext-box">PC</div>
        <div className="innertext-box">TV</div>
      </div>
      <div
        className={
          currentSelected == 3
            ? "blocks-t6 innertext-active"
            : "blocks-t6 innertext-inactive"
        }
      >
        <div className="innertext-box">Phone</div>
        <div className="innertext-box">Tablet</div>
        <div className="innertext-box">PC</div>
        <div className="innertext-box">TV</div>
      </div>
      <div
        className="btn"
        onClick={() => {
          window.location.href = "/payment";
        }}
      >
        Next
      </div>
      {/* <div className="blocks"></div>
      <div className="blocks"></div>
      <div className="blocks"></div>
      <div className="blocks"></div>
      <div className="blocks"></div>
      <div className="blocks"></div> */}
    </div>
  );
};

export default PricingComponent;
