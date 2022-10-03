import axios from "axios";

export const updateCartItem = async ({ updateType, productId }) => {
  const encodedToken =
     sessionStorage.getItem("token") ?? "";
  
  return await axios.post(
    `/api/user/cart/${productId}`,
    { action: { type: updateType } },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
}