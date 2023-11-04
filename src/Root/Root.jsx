import { Outlet } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const Root = () => {
    return(
        <div>
            <MainLayout/>
            <Outlet/>
        </div>
    )}
export default Root;