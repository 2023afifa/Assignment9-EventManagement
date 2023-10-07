import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-lora">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;