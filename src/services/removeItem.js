import axios from "axios";

export const removeItem = async ({ source, productId }) => {
  const encodedToken =
     sessionStorage.getItem("token") ?? "";
  return await axios.delete(`/api/user/${source}/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
}