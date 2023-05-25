import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShapeDetail = ({ category }) => {
    const { chef_name, chef_picture, description, number_of_recipes, like, years_of_experience } = category
    console.log(category)
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={category.chef_picture} />
                    <Card.Body>
                        <Card.Title>Chef Name: {category.chef_name}</Card.Title>
                        <Card.Text> Experience: {category.years_of_experience}</Card.Text>
                        <Card.Text>Recipes: {category.number_of_recipes}</Card.Text>
                        <Card.Text> Likes: {category.like}</Card.Text>
                    </Card.Body>
                    <Link><Button className="ms-3 mb-3" variant="secondary">View Recipe Button</Button></Link>
                </Card>
            </Col>
        </div>
    );
};

export default ShapeDetail;