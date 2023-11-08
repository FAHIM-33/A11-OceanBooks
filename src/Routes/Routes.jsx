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
import Read from "../Pages/Read";
import BorrowedBooks from "../Pages/BorrowedBookd/BorrowedBooks";
import AdminRoute from "../Providers/AdminRoute";
import ErrorPage from "../Pages/ErrorPage";
import PDF from "../Pages/PDF/PDF";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:category',
                element: <SelectedCatrgory></SelectedCatrgory>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>
            },
            {
                path: '/read/:id',
                element: <PrivateRoute><Read></Read></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <AdminRoute><Update></Update></AdminRoute>
            },
            {
                path: '/allBooks',
                element: <AdminRoute><AllBooks></AllBooks></AdminRoute>
            },
            {
                path: '/addBooks',
                element: <AdminRoute><AddBooks></AddBooks></AdminRoute>
            },
            {
                path: '/borrowed',
                element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/pdf',
                element: <PDF></PDF>
            },
        ]

    }
])

export default router;