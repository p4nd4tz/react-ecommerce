import { Outlet } from "react-router";
import NavBar from "../features/navbar/Navbar";

function Home() {
    return (
        <div>
            <NavBar>
                <Outlet />
            </NavBar>
        </div>
    );
}

export default Home;