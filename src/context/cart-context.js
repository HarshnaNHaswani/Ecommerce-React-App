import { createContext, useContext, useState, useEffect } from "react";
import { addItem } from "../services/addItem";
import { removeItem } from "../services/removeItem";
import { updateCartItem } from "../services/updateCartItem";
import { useAuth } from "./auth-context";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    totalQuantity: 0,
    cartTotal: 0,
    totalDiscount: 0,
    fastDeliveryCharge: 0,
    items: [],
    error: null,
    loading: false,
  };
  const [cart, setCart] = useState(initialState);
  const { token } = useAuth();
  const findCartTotal = () => {
    const { total, quantity, discount, fastDeliveryCharge } = [
      ...cart.items,
    ].reduce(
      (acc, item) => ({
        ...acc,
        total: acc.total + item.price * item.qty,
        quantity: acc.quantity + item.qty,
        discount: acc.discount + item.qty * item.discount,
        fastDeliveryCharge: item.fastDelivery
          ? acc.fastDeliveryCharge + 20
          : acc.fastDeliveryCharge,
      }),
      { total: 0, quantity: 0, discount: 0, fastDeliveryCharge: 0 }
    );
    setCart((prev) => ({
      ...prev,
      totalQuantity: quantity,
      cartTotal: total,
      totalDiscount: discount,
      fastDeliveryCharge: fastDeliveryCharge > 100 ? 100 : fastDeliveryCharge,
    }));
  };
  const setLoading = () =>
    setCart((prev) => ({ ...prev, error: "", loading: true }));
  const setError = (error) => {
    setCart((prev) => ({ ...prev, error, loading: false }));
  };
  const updateCart = (updatedCart) => {
    setCart((prev) => ({
      ...prev,
      items: [...updatedCart],
      error: "",
      loading: false,
    }));
  };
  useEffect(() => {
    findCartTotal();
  }, [cart.items]);

  const addToCart = async (product) => {
    try {
      setLoading();
      const response = await addItem({ source: "cart", product, token });
      console.log(response);
      if (response.status === 201) {
        updateCart(response.data.cart);
      } else setError("cart: couldn't add item");
    } catch (error) {
      setError(error);
      console.log(error);
      const keys = Object.keys(error);
      keys.map((key) => console.log(`cart ${key}:`, error[key]));
    }
  };
  const removeFromCart = async (product) => {
    try {
      console.log("in removeFromCart");
      console.log(product, product._id, product["_id"]);
      const response = await removeItem({
        source: "cart",
        productId: product["_id"],
        token,
      });
      console.log(response);
      if (response.status === 200) {
        console.log("inside if");
        updateCart(response.data.cart);
      } else setError("cart: Couldn't remove item");
    } catch (error) {
      setError(error);
      console.log(error);
      const keys = Object.keys(error);
      keys.map((key) => console.log(`cart ${key}:`, error[key]));
    }
  };
  const clearCart = () => {
    Promise.all([...cart.items].map((item) => removeFromCart(item)))
      .then(() => {
        setCart(initialState);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
        const keys = Object.keys(error);
        keys.map((key) => console.log(`cart ${key}:`, error[key]));
      });
  };

  const updateQuantity = async ({ type, product }) => {
    const [itemInCart] = [...cart.items].filter(
      (item) => item["_id"] === product["_id"]
    );
    const validItem = Object.keys(itemInCart).length > 0;
    if (validItem && itemInCart.qty - 1 <= 0 && type === "decrement") {
      removeFromCart(product);
      return;
    }
    try {
      setLoading();
      const response = await updateCartItem({
        updateType: type,
        productId: product["_id"],
        token,
      });
      console.log(response);
      if (response.status === 200) {
        updateCart(response.data.cart);
      } else setError("cart: couldn't update item");
    } catch (error) {
      setError(error);
      console.log(error);
      const keys = Object.keys(error);
      keys.map((key) => console.log(`cart ${key}:`, error[key]));
    }
  };
  const setCartToInitialState = () => setCart(initialState);

  useEffect(() => {
    if (token && token.trim().length > 0) {
      fetch("/api/user/cart", {
        headers: {
          authorization: token,
        },
      })
        .then((response) =>
          response.json().then((data) => {
            console.log(response);
            response.status === 200
              ? updateCart(data.cart)
              : setError("couldn't load cart data");
          })
        )
        .catch((error) => {
          setError(error);
          console.log(error);
          const keys = Object.keys(error);
          keys.map((key) => console.log(`cart ${key}:`, error[key]));
        });
    }
  }, []);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        setCartToInitialState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, useCart };
