import axios from "axios";


export const addItem = async ({ source, product, token: encodedToken }) =>
  await axios.post(
    `/api/user/${source}`,
    { product },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );