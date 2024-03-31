import { Outlet } from "react-router";
import NavBar from "../features/navbar/Navbar";
import ProductList from '../features/product/components/ProductList';

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