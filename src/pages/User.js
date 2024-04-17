import { Outlet } from "react-router";
import NavBar from "../features/navbar/Navbar";

function User() {
    return (
        <div>
            <NavBar>
                <Outlet />
            </NavBar>
        </div>
    );
}

export default User;