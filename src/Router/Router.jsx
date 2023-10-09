import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Servics from "../pages/Servics/Servics";
import Blog from "../pages/Our Blog/Our Blog";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/servics",
                element: <Servics></Servics>
            },
            {
                path:"/blog",
                element: <Blog></Blog>
            }
        ]
    }
])

export default myCreatedRoute;