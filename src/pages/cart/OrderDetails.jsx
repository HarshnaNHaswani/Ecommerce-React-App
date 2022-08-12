import React from "react";
import { useState } from "react";
import { useCart } from "../../context/cart-context";
import "./cart.css";
export const OrderDetails = () => {
  const { cart } = useCart();
  const { totalQuantity, cartTotal, totalDiscount, fastDeliveryCharge } = cart;
  let grandTotal;
  const [getFastDelivery, setGetFastDelivery] = useState(false);
  const toggleGetFastDelivery = () => setGetFastDelivery((prev) => !prev);
  fastDeliveryCharge > 0
    ? (grandTotal = cartTotal - totalDiscount + fastDeliveryCharge)
    : (grandTotal = cartTotal - totalDiscount + 20);
  return (
    <div className="order-details">
      <table>
        <caption className="heading heading-xs">
          Order Details{" "}
          <small className="total-items"> {totalQuantity}item(s)</small>
        </caption>
        <tbody>
          <tr className="sub-total">
            <th>Sub-total:</th>
            <td className="number">{cartTotal}</td>
          </tr>
          <tr className="discount">
            <th>Discount</th>
            <td className="number discount-amt">- ₹ {totalDiscount}</td>
          </tr>
          <tr className="delivery">
            <th>Delivery Charges</th>
            <td className="number">
              + ₹ {!getFastDelivery || fastDeliveryCharge <= 0 ? 20 : 0}
            </td>
          </tr>
          <tr className="delivery">
            <th>Fast Delivery Charges</th>
            <td className="number">
              + ₹{" "}
              {getFastDelivery && fastDeliveryCharge > 0
                ? fastDeliveryCharge
                : 0}
            </td>
          </tr>
          <tr className="total bg-secondary">
            <th>Total</th>
            <td className="number total-amt">
              <strong> ₹ {grandTotal}</strong>
            </td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
      <p>
        You saved{" "}
        <span className="bg-secondary number"> ₹ {totalDiscount} </span> on this
        order
      </p>
      <input
        type="checkbox"
        name="get-fast-delivery"
        id="get-fast-delivery"
        checked={getFastDelivery}
        onChange={toggleGetFastDelivery}
      />
      <label htmlFor="get-fast-delivery">Get Fast Delivery</label>
      <button className="btn bg-accent">Place Order!</button>
    </div>
  );
};
