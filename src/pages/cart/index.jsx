import { useEffect } from "react";
import wishlistIconFilled from "assets/wishlist-filled.png";
import wishlistIcon from "assets/wishlist.png";
import Loading from "assets/loading.gif";
import "./cart.css";
import { OrderDetails } from "./OrderDetails";
import { Card } from "components";
import { useAlert, useCart, useWishlist } from "context";
import { useWindowDimensions } from "utils";
export const Cart = () => {
  const { width } = useWindowDimensions();
  const {
    wishlist: wishlistState,
    addToWishlist,
    removeFromWishlist,
  } = useWishlist();
  const { items: wishlist } = wishlistState;
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const isInArray = (array, id) =>
    array.filter((item) => item["_id"] === id).length ? true : false;
  const likeButtonClickHandler = (id, product) => {
    isInArray(wishlist, id)
      ? removeFromWishlist(product)
      : addToWishlist(product);
  };
  const increaseQuantityHandler = (product) =>
    updateQuantity({ type: "increment", product });
  const decreaseQuantityHandler = (product) =>
    updateQuantity({ type: "decrement", product });
  const { items, error, loading } = cart;
  const { showAlert } = useAlert();
  useEffect(() => {
    if(error) {
      showAlert({ text: "An Error Occurred", status: "error" })
    }
    window.scrollTo(0,0)
  }, [])
  return (
    <>
      <h2 className="heading gutter-y-xl">Your Cart</h2>
      {loading && <img src={Loading} alt="loading..." />}

      {!loading && !error && 
      <>
      <button onClick={clearCart} className="btn btn-clear outline-secondary position-right">
        Clear Cart
      </button>
      <div className="cart grid-container">
        <OrderDetails />
        <section
          className={`cart-items card-shadow ${
            width > 960 ? "padding-xy-md" : ""
          }`}
        >
          {items.map((item) => (
            <Card product={item} key={item["_id"]}>
              <div className="quantity">
                <button
                  className="btn round"
                  onClick={() => {
                    decreaseQuantityHandler(item);
                  }}
                >
                  -
                </button>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="form-input quantity-input"
                  value={item.qty}
                  readOnly
                />
                <button
                  className="btn round"
                  onClick={() => {
                    increaseQuantityHandler(item);
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="btn bg-secondary"
                onClick={() => removeFromCart(item)}
              >
                Remove from Cart
              </button>

              <button
                className="btn btn-float img-round wishlist-btn"
                title="like"
                onClick={() => likeButtonClickHandler(item["_id"], item)}
              >
                <img
                  src={
                    isInArray(wishlist, item["_id"])
                      ? wishlistIconFilled
                      : wishlistIcon
                  }
                  alt="like"
                  className="img-responsive"
                  loading="lazy"
                />
              </button>
            </Card>
          ))}
        </section>
      </div>
      </>
      }
    </>
  );
};
