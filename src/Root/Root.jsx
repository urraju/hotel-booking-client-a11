import { Outlet } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import toast, { Toaster } from 'react-hot-toast';

const Root = () => {
    return(
        <div>
            <Toaster/>
            <MainLayout/>
            <Outlet/>
        </div>
    )}
export default Root;