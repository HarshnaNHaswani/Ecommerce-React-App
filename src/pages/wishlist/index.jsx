import React from "react";
import { Card } from "../../components/Card/Card";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import wishlistIconFilled from "../../assets/wishlist-filled.png";
import wishlistIcon from "../../assets/wishlist.png";
import "./wishlist.css";
import { useAlert } from "../../context/alert-context";
import Loading from "../../assets/loading.gif";

export const Wishlist = () => {
  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    moveToCart,
    clearWishlist,
  } = useWishlist();

  const {showAlert} = useAlert();
  const { items, error, loading } = wishlist;

  const isInWishlist =(id) => [...items].filter((item) => item["_id"] === id).length > 0
  const likeButtonClickHandler = (product) => {
      isInWishlist(product["_id"])
      ? removeFromWishlist(product)
      : addToWishlist(product);
  };
  const { cart: cartState } = useCart();
  const { items: cart } = cartState;
  const moveToCartHandler = (item) => {
    cart.length > 0
      ? cart.filter((curr) => curr["_id"] === item["_id"]).length <= 0
        ? moveToCart(item)
        : removeFromWishlist(item)
      : moveToCart(item);
  };
  return (
    <>
      {error && showAlert({text:"An Error Occurred", status: "error"})}
      {loading && <img src={Loading} alt="loading..."/>}
      <h2 className="heading gutter-y-xl">Your Wishlist</h2>
      <button onClick={clearWishlist} className="btn btn-clear outline-secondary position-right">
        Clear Wishlist
      </button>
      <div className="wishlist grid-fit">
        {items.map((item) => (
          <Card product={item} childClass="grid-child" key={item["_id"]}>
            <button className="btn bg-secondary" onClick={() => moveToCartHandler(item)}>
              Move to Cart
            </button>

            <button
              className="btn btn-float img-round wishlist-btn"
              title="like"
              onClick={() => likeButtonClickHandler(item)}
            >
              <img
                src={
                  isInWishlist(item["_id"])
                    ? wishlistIconFilled
                    : wishlistIcon
                }
                alt="like"
                className="img-responsive"
              />
            </button>
          </Card>
        ))}
      </div>
    </>
  );
};
