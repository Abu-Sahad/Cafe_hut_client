import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import ShapeDetail from "../ShapeDetail/ShapeDetail";

const ShapeDetails = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://chef-hut-abu-sahad.vercel.app/chefCategories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-center mb-5">Chef Recipe Categories</h1>
            <div className="container">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        categories.map(category => (
                            <ShapeDetail
                                key={category.id}
                                category={category}
                            />
                        ))
                    }
                </Row>
            </div>
        </div>
    );
};

export default ShapeDetails;
