import { Carousel } from "react-bootstrap";
import banner_1 from "../../assets/bannerimage-1.jpg"
import banner_2 from "../../assets/bannerimage-2.jpg"
import banner_3 from "../../assets/bannerimage-3.jpg"
import './ChefBanner.css'
const ChefBanner = () => {
    return (
        <div className="container mb-5">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded custom-carousel-image"
                        src={banner_1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Handkerchief Bef Rice</h3>
                        <p>A handful of simple ingredients make Rice, beef, and flour, vibrant cooking flavors delicious</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded custom-carousel-image"
                        src={banner_2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-dark">Baked Chicken Legs</h3>
                        <p className="text-dark">A handful of simple ingredients typify the Chicken, vibrant flavors of Greek cooking.

                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded custom-carousel-image"
                        src={banner_3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-dark">Chef Are Cooking prepare</h3>
                        <p className="text-dark">
                            Cooking is an art. The more time and effort you put into cooking it, the more fun and delicious it will be
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default ChefBanner;