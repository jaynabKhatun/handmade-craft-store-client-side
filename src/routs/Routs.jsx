import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AllArtAndCraft from "../pages/AllArtAndCraft/AllArtAndCraft";
import AddCraftItems from "../pages/addCraftItems/AddCraftItems";
import MyArtAndCrafts from "../pages/MyArtAndCraft/MyArtAndCrafts";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,

        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            },

            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },

            {
                path: '/allArtAndCraft',
                element: <AllArtAndCraft></AllArtAndCraft>
            },

            {
                path: '/addCraftItems',
                element: <AddCraftItems></AddCraftItems>
            },
            {
                path: '/myArtAndCraft',
                element: <MyArtAndCrafts></MyArtAndCrafts>
            }
        ]
    },
]);
export default router;  