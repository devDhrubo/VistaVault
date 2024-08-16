import { Outlet } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

const Root = () => {
    return (
        <div className="inter">
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Root;