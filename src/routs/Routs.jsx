import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AllArtAndCraft from "../pages/AllArtAndCraft/AllArtAndCraft";
import AddCraftItems from "../pages/addCraftItems/AddCraftItems";
import MyArtAndCrafts from "../pages/MyArtAndCraft/MyArtAndCrafts";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import ErrorPage from "../pages/eroorPage/ErrorPage";
import CraftDetails from "../pages/craftDetails/CraftDetails";
import UpdateCraft from "../pages/MyArtAndCraft/UpdateCraft";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: '/',
                element: <Home></Home>,

            },

            {
                path: '/craft/:id',
                element: <CraftDetails></CraftDetails>,


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
                path: '/update/:id',
                element: <UpdateCraft></UpdateCraft>,
                loader:  ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
                


            },

            {
                path: '/myArtAndCraft',
                element: <MyArtAndCrafts></MyArtAndCrafts>,

            }
        ]
    },
]);
export default router;  