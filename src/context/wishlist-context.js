import { createContext, useContext, useState, useEffect } from "react";
import { useCart } from "./cart-context";
import { addItem } from "../services/addItem";
import { removeItem } from "../services/removeItem";
import { useAuth } from "./auth-context";

const WishlistContext = createContext();
const initialState = {
  items: [],
  totalQuantity: 0,
  error: null,
  loading: false,
};
const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(initialState);
  const {token} = useAuth()

  const setLoading = () =>
    setWishlist((prev) => ({ ...prev, error: "", loading: true }));
  const setError = (error) => {
    setWishlist((prev) => ({ ...prev, error, loading: false }));
  };
  const updateWishlist = (updatedWishlist) => {
    setWishlist((prev) => ({
      ...prev,
      items: [...updatedWishlist],
      totalQuantity: [...updatedWishlist].length,
      error: "",
      loading: false,
    }));
  };

  const addToWishlist = async (product) => {
    try {
      setLoading();
      const response = await addItem({ source: "wishlist", product, token });
      if (response.status === 201) {
        updateWishlist(response.data.wishlist);
      } else setError("wishlist: couldn't add item");
    } catch (error) {
      setError(error);
      console.log(error);
      const keys = Object.keys(error);
      keys.map((key) => console.log(`wishlist ${key}:`, error[key]));
    }
  };
  const removeFromWishlist = async (product) => {
    try {
      const response = await removeItem({
        source: "wishlist",
        productId: product["_id"],
        token
      });
      if (response.status === 200) {
        updateWishlist(response.data.wishlist);
      } else setError("wishlist: Couldn't remove item");
    } catch (error) {
      setError(error);
      console.log(error);
      const keys = Object.keys(error);
      keys.map((key) => console.log(`wishlist ${key}:`, error[key]));
    }
  };
  const { addToCart } = useCart();
  const moveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product);
  };
  const clearWishlist = () => {
    Promise.all([...wishlist.items].map((item) => removeFromWishlist(item)))
      .then(() => {
        setWishlist(initialState);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
        const keys = Object.keys(error);
        keys.map((key) => console.log(`wishlist ${key}:`, error[key]));
      });
  };
  const setWishlistToInitialState = () => setWishlist(initialState);

  useEffect(() => {
    const token =
      localStorage.getItem("token") ?? sessionStorage.getItem("token") ?? "";
    if (token && token.trim().length > 0) {
      setLoading();
      fetch("/api/user/wishlist", {
        headers: {
          authorization: token,
        },
      })
        .then((response) =>
          response.json().then((data) => {
            if (response.status === 200) updateWishlist(data.wishlist);
            else {
              setError("couldn't load wishlist data");
              console.log(error);
              const keys = Object.keys(error);
              keys.map((key) => console.log(`wishlist ${key}:`, error[key]));
            }
          })
        )
        .catch((error) => {
          setError(error);
          console.log(error);
          const keys = Object.keys(error);
          keys.map((key) => console.log(`wishlist ${key}:`, error[key]));
        });
    }
  }, []);
  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        moveToCart,
        setWishlistToInitialState,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
