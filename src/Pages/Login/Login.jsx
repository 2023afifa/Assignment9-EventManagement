import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Navbar/Navbar";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMessage("");

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                toast("Logged in successfully");
            })
            .catch(error => {
                console.error(error);
                setErrorMessage(error.message);
            })
    }

    return (
        <div>

            <Navbar></Navbar>

            <h2 className="text-3xl text-[#99775C] font-bold text-center mt-20">Please Login</h2>
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
            <p className="text-center">Don't have an account? Please <Link className="text-[#99775C] font-bold" to="/register">Register</Link></p>
            <ToastContainer />
        </div>
    );
};

export default Login;