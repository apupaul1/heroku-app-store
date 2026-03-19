import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Loader from "../components/shared/Loader/Loader";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                hydrateFallbackElement: <Loader></Loader>,
                loader: () => fetch('/apps.json'),
                Component: Home
            },
            {
                path: '/apps',
                hydrateFallbackElement: <Loader></Loader>,
                loader: () => fetch('/apps.json'),
                Component: Apps
            },
            {
                path: '/apps/:id',
                hydrateFallbackElement: <Loader></Loader>,
                loader: () => fetch('/apps.json'),
                Component: AppDetails,
                errorElement: <h1>Not Found</h1>
            }
        ]
    },
    {
        path: '*',
        element: <h1>Not Found</h1>
    }
])