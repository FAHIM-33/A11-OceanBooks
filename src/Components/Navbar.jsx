import { NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/addBooks"><li>Add Books</li></NavLink>
        <NavLink to="/allBooks"><li>All Books</li></NavLink>
        <NavLink to="/borrowed"><li>Borrowed Books</li></NavLink>
    </>

    return (
        <div>
            <nav className="flex bg-mid py-1">
                <div className="flex flex-1 items-center gap-2 px-2">
                    <img src="/logo.png" className="w-12 " alt="" />
                    <p className="text-xl font-semibold text-crim">Ocean Books</p>
                </div>
                <ul className="flex pl-12 items-center justify-end gap-4 font-semibold p-2">
                    
                        {
                            links
                        }

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;