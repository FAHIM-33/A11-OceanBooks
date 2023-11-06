import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {

    const { user, loading, logOut } = useContext(AuthContext)
    // console.log(user)

    const links = <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/addBooks"><li>Add Books</li></NavLink>
        {
            user?.role === 'admin' ?
            <NavLink to="/allBooks"><li>All Books</li></NavLink>
            :
            ''
        }
        <NavLink to="/borrowed"><li>Borrowed Books</li></NavLink>
    </>

    return (
        <div>
            <nav className="flex bg-mid py-1">
                <div className="flex flex-1 items-center gap-2 px-2">
                    <img src="/logo.png" className="w-12 " alt="broken logo" />
                    <p className="text-xl font-semibold text-crim">Ocean Books</p>
                </div>
                <ul className="flex pl-12 items-center justify-end gap-4 font-semibold p-2">

                    {
                        links
                    }

                </ul>
                {
                    user?.email ?
                        <div className="flex items-center gap-2">
                            {loading || <img className="w-10 border block rounded-full" src={user?.photoURL} alt="" />}
                            <button onClick={logOut} className="px-2 text-black bg-white btn py-1 w-fit">Logout</button>
                        </div>
                        :
                        <Link className="login" to="/login"><button className="px-2 text-black bg-white btn h-full w-fit">Login</button></Link>
                }
            </nav>
        </div>
    );
};

export default Navbar;