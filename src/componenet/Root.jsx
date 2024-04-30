import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import Footer from "./Footer";

const Root = () => {
    return (
        <div className="md:mx-24 space-y-10">
            <div >
               <Navber></Navber>
               <Outlet></Outlet>
            </div>
           
            <Footer></Footer>

        </div>
           
    );
};

export default Root;