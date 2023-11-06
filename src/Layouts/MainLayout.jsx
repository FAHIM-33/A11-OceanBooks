import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";



const MainLayout = () => {
    return (
        <div className="text-high bg-background">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;