import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Pages/Footer";



const MainLayout = () => {
    return (
        <div className="text-high bg-background">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;