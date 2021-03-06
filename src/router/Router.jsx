import MockmanEs from "mockman-js";
import { useRoutes } from "react-router-dom";
import {
  Home,
  ProductListing,
  Cart,
  Wishlist,
  Login,
  SignUp,
  ForgotPassword,
  NotFound,
} from "../pages";
import { MainLayout, AuthLayout } from "../components/layouts";
import { RequiresAuth } from "../components/RequiresAuth";
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
