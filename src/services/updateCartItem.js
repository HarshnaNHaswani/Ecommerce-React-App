import axios from "axios";

export const updateCartItem = async ({ updateType, productId, token: encodedToken }) =>
  await axios.post(
    `/api/user/cart/${productId}`,
    { action: { type: updateType } },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
