import {useEffect} from "react";
import Loading from "assets/loading.gif";
import wishlistIconFilled from "assets/wishlist-filled.png";
import wishlistIcon from "assets/wishlist.png";
import { Card } from "components";
import { useAlert, useCart, useWishlist } from "context";
import "./wishlist.css";

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
  useEffect(() => {
    if(error) {
      showAlert({ text: "An Error Occurred", status: "error" })
    }
    window.scrollTo(0,0)
  }, [])
  return (
    <>
      <h2 className="heading gutter-y-xl">Your Wishlist</h2>
      {loading && <img src={Loading} alt="loading..."/>}
      {!error && !loading && <>
        <button onClick={clearWishlist} className="btn btn-clear outline-secondary position-right">
          Clear Wishlist
        </button>
        <div className="wishlist grid-fit">
          {items.map((item) => (
            <Card product={item} childClass="grid-child" key={item["_id"]}>
              <button className={`btn bg-secondary ${!item.inStock && "disableElement"}`} onClick={() => moveToCartHandler(item)}>
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
                  loading="lazy"
                />
              </button>
            </Card>
          ))}
        </div>
      </>
      }
    </>
  );
};
