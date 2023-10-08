import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { logInUser, logInUserGoogle } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMessage("");

        logInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast("Logged in successfully");
            })
            .catch(error => {
                console.error(error);
                setErrorMessage(error.message);
            })
    }

    const handleGoogleLogIn = () => {
        logInUserGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>

            <Navbar></Navbar>

            <h2 className="text-3xl text-[#99775C] font-bold text-center mt-10">Please Login</h2>
            <form onSubmit={handleLogin} className="card-body lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Enter email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter password" name="password" className="input input-bordered" required />
                </div>
                {
                    errorMessage && <p className="text-center text-red-500">{errorMessage}</p>
                }
                <div className="form-control mt-6">
                    <button className="btn bg-[#DDD0C8] text-[#99775C]">Login</button>
                </div>
            </form>
            <p className="text-center">Do not have an account? Please <Link className="text-[#99775C] font-bold" to="/register">Register</Link></p>
            <p className="text-center mt-3">You can login with <a onClick={handleGoogleLogIn} className="text-sky-500 font-bold">Google</a></p>
            <ToastContainer />
        </div>
    );
};

export default Login;