import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import SelectedCatrgory from "../Pages/Category/SelectedCatrgory";
import Details from "../Pages/Details";
import AddBooks from "../Pages/AddBooks";
import AllBooks from "../Pages/AllBooks";
import Update from "../Pages/Update";
import PrivateRoute from "../Providers/PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:category',
                element:<SelectedCatrgory></SelectedCatrgory>
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>
            },
            {
                path:'/update/:id',
                element:<Update></Update>
            },
            {
                path:'/allBooks',
                element:<PrivateRoute><AllBooks></AllBooks></PrivateRoute>
            },
            {
                path:'/addBooks',
                element:<PrivateRoute><AddBooks></AddBooks></PrivateRoute>
            },
            {
                path:'/borrowed',
                element:<PrivateRoute><div>Shit</div></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
        
    }
])

export default router;