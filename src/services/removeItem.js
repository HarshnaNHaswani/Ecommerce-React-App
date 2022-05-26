import axios from "axios";

export const removeItem = async ({ source, productId, token: encodedToken }) =>
  await axios.delete(`/api/user/${source}/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
