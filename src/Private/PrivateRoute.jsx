import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Auth/useAuth";

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,isLoading} = useAuth()
    if(user?.email) {
        return children
    }
    if(isLoading){
        return <progress className="progress w-full  "></progress>
    }
    return <Navigate state={location.pathname} replace to='/login'></Navigate>

    }
export default PrivateRoute;