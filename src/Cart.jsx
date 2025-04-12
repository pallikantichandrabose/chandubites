import { useDispatch, useSelector } from "react-redux";
import { addPurchaseDetails, clearCart, decreament, increament, remove } from "./store";
import { useState } from "react";
import "./Cart.css";

function Cart() {
  let cartItems = useSelector(state => state.cart);
  let dispatch = useDispatch();

  let [showDiscount, setShowDiscount] = useState(false);
  let [couponCode, setCouponCode] = useState('');
  let [couponcodeDiscountPer, setCouponcodeDiscountPer] = useState(0);
  let [selectedEMIMonths, setSelectedEMIMonths] = useState(0);

  let handlingCouponPer = () => {
    switch (couponCode.toUpperCase()) {
      case 'AMAZON 10': setCouponcodeDiscountPer(10); break;
      case 'AMAZON 20': setCouponcodeDiscountPer(20); break;
      case 'AMAZON 30': setCouponcodeDiscountPer(30); break;
      case 'AMAZON 40': setCouponcodeDiscountPer(40); break;
      default:
        alert('Invalid coupon code');
        setCouponcodeDiscountPer(0);
    }
  };

  // purchase handling function
  let handlePurchaseDetails = () => {
    let purchaseDate = new Date().toLocaleDateString();
    let total = totalPrice - couponDiscountAmount;
    let purchaseDetails = {
      items: [...cartItems],
      totalAmount: total,
      date: purchaseDate
    };
    dispatch(addPurchaseDetails(purchaseDetails));
    dispatch(clearCart());
  };

  // Rendering cart items
  let finalItems = cartItems.map((item, index) => (
    <li key={index} className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />
      <span className="cart-item-name">{item.name}</span> - ₹{item.price}
      <div className="cart-item-controls">
        <button className="incre" onClick={() => dispatch(increament(item))}>+</button>
        <button className="decre" onClick={() => dispatch(decreament(item))}>-</button>
        Quantity: {item.quantity}
        <button className="remove" onClick={() => dispatch(remove(item))}>Remove</button>
      </div>
    </li>
  ));

  // Calculating the total price
  let totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  // State for discount percentage
  let [discountPercentage, setDiscountPercentage] = useState(0);

  // Calculating discount amount and final price
  let discountAmount = totalPrice * discountPercentage / 100;
  let finalAmount = totalPrice - discountAmount;

  // Adding coupon discount
  let couponDiscountAmount = totalPrice * couponcodeDiscountPer / 100;
  let finalAmountWithCoupon = finalAmount - couponDiscountAmount;

  // EMI Calculation
  let calculateEMI = (months) => {
    return (finalAmountWithCoupon / months).toFixed(2);
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="cart-container">
          <h2>Shopping Cart</h2>
          <ul>{finalItems}</ul>
          <p>Total price: ₹{totalPrice}</p>

          {showDiscount && (
            <>
              <p>Discount Applied: {discountPercentage}%</p>
              <p>Discount Amount: ₹{discountAmount}</p>
            </>
          )}

          {couponcodeDiscountPer > 0 && (
            <>
              <p>Coupon Applied: {couponCode}</p>
              <p>Coupon Discount: ₹{couponDiscountAmount}</p>
            </>
          )}

          <p>Your net amount to pay: ₹{finalAmountWithCoupon}</p>

          <div className="discount-buttons">
            <button className="button3" onClick={() => { setDiscountPercentage(10); setShowDiscount(true); }}>
              Apply 10% Discount
            </button>
            <button className="button2" onClick={() => { setDiscountPercentage(20); setShowDiscount(true); }}>
              Apply 20% Discount
            </button>
            <button className="button1" onClick={() => { setDiscountPercentage(30); setShowDiscount(true); }}>
              Apply 30% Discount
            </button>
          </div>

          <p>
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter your coupon code"
            />
          </p>

          <button className="apply" onClick={() => handlingCouponPer()}> Apply Coupon </button>

          <p>Your coupon code Applied: {couponCode}</p>
          <p>Your coupon code Discount Applied: ₹{couponDiscountAmount}</p>

          {/* EMI Calculator with Slider - Only show if total is greater than 1000 */}
          {finalAmountWithCoupon > 1000 && (
            <div className="emi-calculator">
              <h2>EMI Options Available:</h2>
              <input
                type="range"
                min="3"
                max="12"
                step="3"
                value={selectedEMIMonths}
                onChange={(e) => setSelectedEMIMonths(Number(e.target.value))}
              />
              <p>Selected EMI Duration: {selectedEMIMonths} Months</p>
              {selectedEMIMonths > 0 && (
                <p>EMI for {selectedEMIMonths} Months: ₹{calculateEMI(selectedEMIMonths)}/month</p>
              )}
            </div>
          )}

          <button className="complete" onClick={handlePurchaseDetails}> Complete Purchase</button>
        </div>
      ) : (
        <center>
          <h1 style={{ color: "orangered" }}>Your cart is empty!</h1>
        </center>
      )}
    </>
  );
}

export default Cart;
