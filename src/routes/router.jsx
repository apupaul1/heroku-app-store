import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Loader from "../components/shared/Loader/Loader";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [{
            index: true,
            hydrateFallbackElement: <Loader></Loader>,
            loader: () => fetch('/apps.json'),
            Component: Home
        }]
    }
])