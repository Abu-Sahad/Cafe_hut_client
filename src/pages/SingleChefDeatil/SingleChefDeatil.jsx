import React, { useState } from 'react';
import { Button, Card, Col, Toast } from 'react-bootstrap';

const SingleChefDetail = ({ cefSingle }) => {
    const { recipe, cooking_method, rating, ingredients } = cefSingle;
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(true);
    };

    return (
        <div>
            <div>
                <Toast show={isFavorite} onClose={() => setIsFavorite(false)}>
                    <Toast.Header>
                        <strong className="me-auto">Favorite Recipe</strong>
                    </Toast.Header>
                    <Toast.Body>{`"${cefSingle.recipe}" is now your favorite recipe!`}</Toast.Body>
                </Toast>
            </div>
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
                        <Button
                            className="ms-3 mb-3"
                            variant="secondary"
                            disabled={isFavorite}
                            onClick={handleFavoriteClick}
                        >
                            {isFavorite ? 'Favorite' : 'Add to Favorites'}
                        </Button>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default SingleChefDetail;
