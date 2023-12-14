import { createBrowserRouter } from "react-router-dom";
import Mailayout from "../Layout/Mailayout";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/Home/ContactUs";

const mycreatedroute =createBrowserRouter([
    {
        path:"/",
        element:<Mailayout></Mailayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                
            },
            {
                path:"/contactus",
                element:<ContactUs></ContactUs>
            }
        ]
    }
])

export default mycreatedroute;