import { useSelector } from "react-redux";
import { selectUser } from "../authSlice";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
    const user = useSelector(selectUser);

    if (!user) {
        return <Navigate to={`/login`} replace={true} />
    }

    return children
}

export default Protected;