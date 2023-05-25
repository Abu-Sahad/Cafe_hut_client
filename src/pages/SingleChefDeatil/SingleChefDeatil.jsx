import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleChefDetail = ({ cefSingle }) => {
    const { recipe, cooking_method, rating, ingredients } = cefSingle;
    return (
        <div>
            <Col>
                <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                    <Card.Body>
                        <Card.Title>Recipe Name: {cefSingle.recipe}</Card.Title>
                        <Card.Body>
                            <Card.Text>
                                Ingredients:
                            </Card.Text>
                            <ul>
                                {cefSingle.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </Card.Body>
                        <Card.Text>Cooking-Method: {cefSingle.cooking_method}</Card.Text>
                        <Card.Text> Ratings: {cefSingle.rating}</Card.Text>
                    </Card.Body>
                    {/* <Link to={`/chefCategories/${category.id}`}><Button className="ms-3 mb-3" variant="secondary">View Recipe Button</Button></Link> */}
                </Card>
            </Col>
        </div>
    );
};

export default SingleChefDetail;
