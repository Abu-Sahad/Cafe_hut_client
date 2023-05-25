import { Outlet } from "react-router-dom";
import SingleChefDetails from "../pages/SingleChefDeatils/SingleChefDetails";
import Header from "../shared/Header/Header";

const ChefDetailsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default ChefDetailsLayout;