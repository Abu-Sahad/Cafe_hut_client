import { Outlet } from "react-router-dom";
import SingleChefDetails from "../pages/SingleChefDeatils/SingleChefDetails";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const ChefDetailsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ChefDetailsLayout;