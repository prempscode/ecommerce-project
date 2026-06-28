import { Link } from "react-router";
import "./CheckoutHeader.css";
const CheckoutHeader = () => {
  return (
    <>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="index.html">
              <img clasName="logo" src="images/" />
              <img className="mobile-logo" src="images/" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="index.html">
              3 items
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutHeader;
