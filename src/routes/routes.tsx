import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/loading";
import NoPage from "../pages/nopage";
import LogIn from "../components/login_form";
import Sign from "../components/sign_form";
import Home from "../pages/home";

export default createBrowserRouter([
  {
    path: "/",
    element: <Loading />,
    errorElement: <NoPage />,
  },
  {
    path: "/home",
    element: <LogIn />,
    errorElement: <NoPage />,
  },
  {
    path: "/login",
    element: <LogIn />,
    errorElement: <NoPage />,
  },
  {
    path: "/signup",
    element: <Sign />,
    errorElement: <NoPage />,
  },
]);
