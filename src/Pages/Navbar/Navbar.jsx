import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("Logged out successfully");
            })
            .catch(error => {
                console.error(error);
            })
    }

    const navLink = <>
        <li><NavLink className="mr-3" to="/">Home</NavLink></li>
        {
            user &&
            <>
                <li><NavLink className="mr-3" to="/gallery">Gallery</NavLink></li>
                <li><NavLink className="mr-3" to="/review">Reviews</NavLink></li>
            </>
        }
        <li><NavLink className="mr-3" to="/register">Register</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar lg:w-[1350px] mx-auto mb-6 py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <h1 className="md:text-3xl font-bold">Memorable<span className="text-[#99775C]">Moments</span></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <span className="ml-1 mr-3 font-medium hidden md:block">{user.email}</span>
                                <button onClick={handleLogout} className="btn">Log Out</button>
                            </>
                            : <Link to="/login"><button className="btn">Log In</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;