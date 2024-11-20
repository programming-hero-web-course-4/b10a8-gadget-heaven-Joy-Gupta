import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

const MainLayout = () => {
    return (
        <HelmetProvider>
            <div>
                <Toaster />



                <div className="bg-gray-100 pb-10 ">

                    <div className="min-h-[calc(100vh-10px)] ">
                        <Outlet />

                    </div>

                </div>

                <Footer />
            </div>
        </HelmetProvider>
    );
};

export default MainLayout;