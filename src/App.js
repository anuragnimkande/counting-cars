import "./App.css";
import MyNavbar from "./MyNavbar";
import ImageSlider from "./ImageSlider";
import Brands from "./Brands";
import About from "./About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Contact from "./Contact";

function Layout() {
  return (
    <>
      <MyNavbar title="COUNTING CARS" />
      <div>
        <Outlet />
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ImageSlider />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/brands",
        element: <Brands />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
