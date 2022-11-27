import "./App.css";
import SignInOutContainer from "./container";
import PricingComponent from "./pricingComp";
import PaymentPage from "./paymentPage";
import ActivePage from "./activePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignInOutContainer />} />
          <Route exact path="/payment" element={<PaymentPage />} />
          <Route exact path="/pricing" element={<PricingComponent />} />
          <Route exact path="/status" element={<ActivePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
