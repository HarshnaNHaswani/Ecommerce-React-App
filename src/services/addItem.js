import axios from "axios";
export const addItem = async ({ source, product }) => {
     const encodedToken =
       sessionStorage.getItem("token") ?? "";
     return await axios.post(
      `/api/user/${source}`,
      { product },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
  }