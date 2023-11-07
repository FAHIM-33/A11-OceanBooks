import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Loading from "../Components/Loading";
import { Navigate } from "react-router-dom";
import pt from 'prop-types'

const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) { return <Loading></Loading> }
    if (!user.email) { return <Navigate to="/login"></Navigate> }
    if (user.role === 'admin') { return children }

    return <div>Not Admin</div>

};

AdminRoute.propTypes = {
    children: pt.node,
}
export default AdminRoute;