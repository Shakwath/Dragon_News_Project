import { Outlet } from "react-router-dom";

const Authlayout = () => {
    return (
        <div>
            AuthLayout
            <Outlet></Outlet>
        </div>
    );
};

export default Authlayout;