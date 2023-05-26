import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ShapeDetail from "../ShapeDetail/ShapeDetail";

const ShapeDetails = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://chef-hut-abu-sahad.vercel.app/chefCategories')
            .then(res => res.json())
            .then(data => setCategories(data))
        // .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h1 className="text-center mb-5">Chef Recipe Categories</h1>
            <div className="container">
                <Row xs={1} md={2} lg={3} className="g-4">

                    {
                        categories.map(category => <ShapeDetail
                            key={category.id}
                            category={category}
                        ></ShapeDetail>)
                    }


                </Row>
            </div>
        </div>
    );
};

export default ShapeDetails;