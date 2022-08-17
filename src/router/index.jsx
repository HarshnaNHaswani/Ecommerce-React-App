import { AuthLayout, MainLayout, RequiresAuth } from "components";
import MockmanEs from "mockman-js";
import {
  Cart, ForgotPassword, Home, Login, NotFound, ProductListing, SignUp, Wishlist
} from "pages";
import { useRoutes } from "react-router-dom";
export function Router() {
  let element = useRoutes([
    {
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
        { path: "forgot-password", element: <ForgotPassword /> },
      ],
    },
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "product-listing",
          element: (
              <ProductListing />
          ),
        },
        {
          path: "wishlist",
          element: (
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          ),
        },
        {
          path: "cart",
          element: (
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          ),
        },
      ],
    },
    {
      path: "mock",
      element: <MockmanEs />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return element;
}
