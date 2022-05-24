import axios from "axios";
const encodedToken =
  localStorage.getItem("token") ?? sessionStorage.getItem("token") ?? "";

export const addItem = async ({ source, product }) =>
  await axios.post(
    `/api/user/${source}`,
    { product },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );