import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Rooms from "../Pages/Rooms";
import MyBooking from "../Pages/MyBooking";
import Login from "../CreateUser/Login";
import Register from "../CreateUser/Register";
import Details from "../Components/Details/Details";
import PrivateRoute from "../Private/PrivateRoute";
import UpdateDate from "../Update/UpdateDate";
import ReviewCard from "../review/ReviewCard";
import FeatureRoom from "../Components/FeatureRoom/FeatureRoom";
import NotFound from "../Error/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "rooms",
        element: <Rooms />,
        loader: () => fetch("https://assignmant-11-server.vercel.app/rooms"),
      },
      {
        path: "details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`https://assignmant-11-server.vercel.app/rooms/${params.id}`),
      },
      {
        path: "mybooking",
        element: (
          <PrivateRoute>
            <MyBooking />
          </PrivateRoute>
        ),
      },
      {
        path: "updatedate/:id",
        element: <UpdateDate />,
        loader: ({ params }) =>
          fetch(`https://assignmant-11-server.vercel.app/mybooking/${params.id}`),
      },
      {
        path: "reviewcard/:id",
        element: <ReviewCard />,
        loader: ({ params }) =>
          fetch(`https://assignmant-11-server.vercel.app/review/${params.id}`),
      },
      {
        path: "featureroom",
        element: <FeatureRoom />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
