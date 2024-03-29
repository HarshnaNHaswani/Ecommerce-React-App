import Loading from "assets/loading.gif";
import wishlistIconFilled from "assets/wishlist-filled.png";
import wishlistIcon from "assets/wishlist.png";
import { Card, SortAndFilter } from "components";
import { useAlert, useAuth, useCart, useProductListing, useWindowDimension, useWishlist } from "context";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doArraysHaveCommonElement, numSort, useWindowDimensions } from "utils";
import { isInArray } from "../../utils/isInArray";
import "./products.css";
export const ProductListing = () => {

  const { cart: cartState, addToCart } = useCart();
  const {
    wishlist: wishlistState,
    addToWishlist,
    removeFromWishlist,
  } = useWishlist();
  const { items: cart, error: cartError } = cartState;
  const { items: wishlist, error: wishlistError } = wishlistState;

  const { productsListingState } = useProductListing();
  const {
    products,
    productListingError,
    isInStockFilter,
    isFeaturedFilter,
    hasFastDelivery,
    hasRating,
    hasCategories,
    hasSubCategories,
    minPrice,
    sortByPrice,
  } = productsListingState;

  const { showAlert } = useAlert();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const location = useLocation();
  const isNotAuth = ({ type, product }) => {
    const redirectProduct = {
      type,
      product,
    };
    localStorage.setItem("productRedirect", JSON.stringify(redirectProduct));
    navigate("/login", { replace: true, state: { from: location } });
  };
  const likeButtonClickHandler = (id, product) => {
    isLoggedIn
      ? isInArray(wishlist, id)
        ? removeFromWishlist(product)
        : addToWishlist(product)
      : isNotAuth({ type: "wishlist", product });
  };
  const cartClickHandler = (id, product) => {
    isLoggedIn
      ? isInArray(cart, id)
        ? navigate("/cart")
        : addToCart(product)
      : isNotAuth({ type: "cart", product });
  };

  useEffect(() => {
    const productRedirect =
      JSON.parse(localStorage.getItem("productRedirect")) ?? {};

    if (Object.keys(productRedirect).length > 0) {
      const { type, product } = productRedirect;
      switch (type) {
        case "cart":
          cartClickHandler(product._id, product);
          break;
        case "wishlist":
          likeButtonClickHandler(product._id, product);
          break;
        default:
          break;
      }
      localStorage.removeItem("productRedirect");
    }
    window.scrollTo(0,0)
  }, []);

  const getSortedData = (products) => {
    if (sortByPrice) {
      return sortByPrice === "SORT_PRICE_LOW_TO_HIGH"
        ? numSort("ascending", products, "price")
        : sortByPrice && sortByPrice === "SORT_PRICE_HIGH_TO_LOW"
        ? numSort("descending", products, "price")
        : products;
    } else return products;
  };

  const getFilteredData = (products) => {
    return products
      .filter(({ price }) => Number(price) >= minPrice)
      .filter(({ rating }) => (hasRating ? rating >= hasRating : true))
      .filter(({ inStock }) => (isInStockFilter ? inStock : true))
      .filter(({ featured, inStock }) =>
        isFeaturedFilter ? featured && inStock : true
      )
      .filter(({ fastDelivery, inStock }) =>
        hasFastDelivery ? fastDelivery && inStock : true
      )
      .filter(({ categories }) =>
        hasCategories.length > 0
          ? categories && doArraysHaveCommonElement(categories, hasCategories)
          : true
      )
      .filter(({ subCategories }) =>
        hasSubCategories.length > 0
          ? subCategories &&
            doArraysHaveCommonElement(subCategories, hasSubCategories)
          : true
      );
  };

  const filteredData = getFilteredData(getSortedData(products));

  const [displayFilters, setDisplayFilters] = useState(false);
  const { windowDimension } = useWindowDimension();
  const {width} = useWindowDimensions();
  const toggleFiltersHandler = () => {
    setDisplayFilters((prev) => !prev);
    if (width > 1350) setDisplayFilters(false);
  };
  return (
    <>
      {productListingError.serverError &&
        showAlert({ status: "error", text: "Server Error!" })}
      {productListingError.clientError &&
        showAlert({ status: "error", text: "Client Error! Try Again!" })}
      {productListingError.loading && <img src={Loading} alt="loading..." />}
      <h2 className="heading gutter-y-xl">Our Products</h2>
      {width < 1350 && (
        <div className="filter-type-toggle">
          <button className="btn bg-secondary" onClick={toggleFiltersHandler}>
            View Filters
          </button>
          {displayFilters && <div className="filter">{<SortAndFilter />}</div>}
        </div>
      )}

      <div className={"product-listing"}>
        {width > 1350 && (
          <aside className="filter gutter-xy-sm">{<SortAndFilter />}</aside>
        )}

        <section
          className={`products card-shadow  ${
            width > 960 ? "padding-xy-md" : ""
          }`}
        >
          {filteredData.map((product) => (
            <Card product={product} key={product["_id"]}>
              <button
                className="btn btn-float img-round wishlist-btn"
                title="like"
                onClick={() => likeButtonClickHandler(product["_id"], product)}
              >
                <img
                  src={
                    isInArray(wishlist, product["_id"])
                      ? wishlistIconFilled
                      : wishlistIcon
                  }
                  alt="like"
                  className="img-responsive"
                />
              </button>
              <button
                className={`btn ${
                  isInArray(cart, product["_id"]) ? "bg-accent" : "bg-default"
                } ${!product.inStock && "disableElement"}`}
                title="Purchase Item"
                onClick={() => cartClickHandler(product["_id"], product)}
              >
                {isInArray(cart, product["_id"])
                  ? " Go to Cart"
                  : "Add to Cart"}
              </button>
            </Card>
          ))}
        </section>
      </div>
    </>
  );
};
