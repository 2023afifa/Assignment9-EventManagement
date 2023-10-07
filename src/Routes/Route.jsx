import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("/eventdata.json"),
        },
        {
            path: "/event/:id",
            element: <EventDetails></EventDetails>,
            loader: () => fetch("/eventdata.json"),
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        }
      ]
    },
  ]);


export default router;