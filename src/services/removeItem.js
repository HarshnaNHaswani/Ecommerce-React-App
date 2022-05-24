import axios from "axios";
const encodedToken =
  localStorage.getItem("token") ?? sessionStorage.getItem("token") ?? "";

export const removeItem = async ({ source, productId }) =>
  await axios.delete(`/api/user/${source}/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
