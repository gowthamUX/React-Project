import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";

const Grocery = lazy( () => import("./components/Grocery"));

const AppLayout = () => {
    return (
        <div className="app">

            <Header/>

            <Outlet />
          
        </div>
    )
}

const AppRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement: <Error />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <ContactUs />
            },
            {
                path: "/restaurantmenu/:id",
                element: <RestaurantMenu />
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            }
        ]
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
