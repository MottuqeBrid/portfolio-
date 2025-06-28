import { createBrowserRouter } from "react-router";
import HomePage from "../Home/HomePage/HomePage";
import RootLayout from "./../Layout/RootLayout/RootLayout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default route;
