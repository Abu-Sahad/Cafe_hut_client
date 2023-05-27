import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../assets/food.jpg';
import './FoodTips.css'

const FoodTips = () => {
    return (
        <div className="container">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={6}>
                        <div className="content-left">
                            <h2 className='mb-4 content-left-tittle text-center'>Enjoy food all over the world</h2>
                            <p className='mb-4 content-left-details text-center'>These healthy recipes shake up your comfort food favorites by adding more veggies and swapping out cooking methods.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="image-right">
                            <img src={img1} alt="Food Image" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FoodTips;
