import ChefBanner from "../pages/ChefBanner/ChefBanner";
import ClientSubscribeArea from "../pages/ClientSubscribeArea/ClientSubscribeArea";
import ShapeDetails from "../pages/ShapeDetails/ShapeDetails";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const Main = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <ChefBanner></ChefBanner>
            <ShapeDetails></ShapeDetails>
            <ClientSubscribeArea></ClientSubscribeArea>
            <Footer></Footer>
        </div>
    );
};

export default Main;