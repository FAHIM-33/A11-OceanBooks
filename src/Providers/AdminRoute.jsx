import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Loading from "../Components/Loading";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {

    const { user, isloading } = useContext(AuthContext)

    if (isloading) { return <Loading></Loading> }
    if (!user.email) { return <Navigate to="/login"></Navigate> }
    if (user.role === 'admin') { return children }

    return <div>Not Admin</div>

};

export default AdminRoute;