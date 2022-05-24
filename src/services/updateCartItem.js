import axios from "axios";
const encodedToken =
  localStorage.getItem("token") ?? sessionStorage.getItem("token") ?? "";

export const updateCartItem = async ({ updateType, productId }) =>
  await axios.post(
    `/api/user/cart/${productId}`,
    { action: { type: updateType } },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
