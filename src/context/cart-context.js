import { createContext, useContext, useState, useEffect } from "react";
import { addItem } from "../services/addItem";
import { removeItem } from "../services/removeItem";
import { updateCartItem } from "../services/updateCartItem";
import { v4 as uuid } from "uuid";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    totalQuantity: 0,
    cartTotal: 0,
    totalDiscount: 0,
    fastDeliveryCharge: 0,
    items: [
      {
        _id: uuid(),
        title: "Caramalized White Chocolate",
        price: "500",
        categories: ["chocolate", "eggless"],
        subCategories: ["white", "caramalized"],
        rating: "3",
        reviewers: "1050",
        inStock: true,
        featured: false,
        media:
          "https://res.cloudinary.com/harshna/image/upload/v1652722538/ecomm/images/chocolates/caramalized-white-chocolate_agzx3k.jpg",
        qty: 2,
        discount: 20,
        fastDelivery: true,
      },
      {
        _id: uuid(),
        title: "assorted chocolates 1",
        price: "1000",
        categories: ["chocolate", "eggless"],
        subCategories: ["white", "dark", "milk", "ruby"],
        rating: "4",
        reviewers: "725",
        inStock: true,
        featured: false,
        media:
          "https://res.cloudinary.com/harshna/image/upload/v1652722539/ecomm/images/chocolates/assorted_xjof7a.png",
        qty: 3,
        discount: 0,
        fastDelivery: true,
      },
      {
        _id: uuid(),
        title: "Dark Chocolate",
        price: "250",
        categories: ["chocolate", "eggless"],
        subCategories: ["dark"],
        rating: "4.5",
        reviewers: "725",
        inStock: false,
        featured: false,
        media:
          "https://res.cloudinary.com/harshna/image/upload/v1652722539/ecomm/images/chocolates/dark-chocolate_smansh.jpg",
        qty: 1,
        discount: 0,
        fastDelivery: false,
      },
    ],
    error: null,
    loading: false,
  };
  const [cart, setCart] = useState(initialState);
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
    findCartTotal();
  };
  const clearCart = () => {
    Promise.all([...cart.items].map((item) => removeFromCart(item)))
      .then(() => {
        setCart(initialState);
      })
      .catch((error) => {
        setError(error);
      });
  };
  const addToCart = async (product) => {
    try {
      setLoading();
      const response = await addItem({ source: "cart", product });
      if (response.status === 201) {
        updateCart(response.data.cart);
      } else setError("cart: couldn't add item");
    } catch (error) {
      setError(error);
    }
  };
  const removeFromCart = async (product) => {
    try {
      const response = await removeItem({
        source: "cart",
        productId: product["_id"],
      });
      if (response.status === 200) {
        updateCart(response.data.cart);
      } else setError("cart: Couldn't remove item");
    } catch (error) {
      setError(error);
    }
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
      });
      if (response.status === 200) {
        updateCart(response.data.cart);
      } else setError("cart: couldn't update item");
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => findCartTotal(), []);
  // useEffect(() => {
  //   const token =
  //     localStorage.getItem("token") ?? sessionStorage.getItem("token") ?? "";
  //   if (token && token.trim().length > 0) {
  //     fetch("/api/user/cart", {
  //       headers: {
  //         authorization: token,
  //       },
  //     })
  //       .then((response) =>
  //         response.json().then((data) => {
  //           response.status === 200
  //             ? updateCart(data.cart)
  //             : setError("couldn't load cart data");
  //         })
  //       )
  //       .catch((error) => {
  //         setError(error);
  //       });
  //   }
  // }, []);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, useCart };
