import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Contact from "../pages/Contact"
import NotFound from "../pages/Not-Found";

export default function Router() {
    const router = createBrowserRouter([
        {
            path : "*",
            element : <NotFound/>
        },
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "/Profile",
            element : <Profile/>
        },
        {
            path : "/Contact",
            element : <Contact/>
        }
    ]);

    return <RouterProvider router = {router}/>

}