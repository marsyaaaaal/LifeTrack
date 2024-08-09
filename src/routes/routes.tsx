import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/loading";
import LogIn from "../components/login_form";
import Sign from "../components/sign_form";
import Home from "../pages/home";
import NoPage from "../pages/nopage";

export default createBrowserRouter([
  {
    path: "/",
    element: <Loading />,
    errorElement: <NoPage />,
  },
  {
    path: "/home",
    element: <Home />,
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
