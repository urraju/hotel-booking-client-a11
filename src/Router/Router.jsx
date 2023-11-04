import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Rooms from "../Pages/Rooms";
import MyBooking from "../Pages/MyBooking";
import Login from "../CreateUser/Login";
import Register from "../CreateUser/Register";

 
 const router = createBrowserRouter([
     {
          path : '/',
          element : <Root/>,
          children : [
               {
                    path : '/',
                    element : <Home/>
               },
               {
                    path : 'rooms',
                    element : <Rooms/>
               },
               {
                    path : 'mybooking',
                    element : <MyBooking/>
               },
               {
                    path : 'login',
                    element : <Login/>
               },
               {
                    path : 'register',
                    element : <Register/>
               }
          ]
     },
      
 ])

 export default router;