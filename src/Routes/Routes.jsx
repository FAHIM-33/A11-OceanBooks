import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import SelectedCatrgory from "../Pages/Category/SelectedCatrgory";
import Details from "../Pages/Details";
import AddBooks from "../Pages/AddBooks";


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
                element:<Details></Details>
            },
            {
                path:'/allBooks',
                element:<div>Div all</div>
            },
            {
                path:'/addBooks',
                element:<AddBooks></AddBooks>
            },
            {
                path:'/borrowedBooks',
                element:<div>div borrowed</div>
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