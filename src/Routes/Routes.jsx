import { createBrowserRouter } from "react-router-dom";
import Mailayout from "../Layout/Mailayout";
import Home from "../Pages/Home/Home";

const mycreatedroute =createBrowserRouter([
    {
        path:"/",
        element:<Mailayout></Mailayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])

export default mycreatedroute;