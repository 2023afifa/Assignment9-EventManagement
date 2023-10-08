import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h2 className="text-3xl text-[#99775C] font-bold text-center mt-20">Please Login</h2>
            <form className="card-body lg:w-1/2 mx-auto">
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
                <div className="form-control mt-6">
                    <button className="btn bg-[#DDD0C8] text-[#99775C]">Login</button>
                </div>
            </form>
            <p className="text-center">Don't have an account? Please <Link className="text-[#99775C] font-bold" to="/register">Register</Link></p>
        </div>
    );
};

export default Login;