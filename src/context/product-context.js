import { createContext } from "react";
import { useReducer } from "react";

const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [productState, productsDispatch] = useReducer(productsReducer,[] );
  useEffect(
    () =>
      (async () => {
        try {
          const response = await axios.get("/api/products");
          setProducts(response.data.products);
          
          console.log(response.data.products);
        } catch (err) {
          setProducts([]);
          console.log(err);
        }
      })(),
    []
  );
  return(
    <ProductContext.Provider value={{}}>
      {children}
    </ProductContext.Provider>
  )
}