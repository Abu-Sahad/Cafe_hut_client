import ChefBanner from "../pages/ChefBanner/ChefBanner";
import ClientSubscribeArea from "../pages/ClientSubscribeArea/ClientSubscribeArea";
import FoodTips from "../pages/FoodTips/FoodTips";
import ShapeDetails from "../pages/ShapeDetails/ShapeDetails";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const Main = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <ChefBanner></ChefBanner>
            <ShapeDetails></ShapeDetails>
            <FoodTips></FoodTips>
            <ClientSubscribeArea></ClientSubscribeArea>
            <Footer></Footer>
        </div>
    );
};

export default Main;