import { Outlet } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import toast, { Toaster } from 'react-hot-toast';
import Footer from "../Components/Footer/Footer";

const Root = () => {
    return(
        <div>
            <Toaster/>
            <MainLayout/>
            <Outlet/>
            <Footer/>
        </div>
    )}
export default Root;