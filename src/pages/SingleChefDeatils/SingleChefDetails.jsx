import { useLoaderData, useParams } from "react-router-dom";
import SingleChefDeatil from "../SingleChefDeatil/SingleChefDeatil";
import { Card, Col, Container, Row } from "react-bootstrap";

const SingleChefDetails = () => {
    const { id } = useParams
    const { recipe, chef } = useLoaderData()
    const { chef_name, chef_picture, description, number_of_recipes, like, years_of_experience } = chef
    return (
        <div className="container">

            <Card className="mb-5 h-25">
                <Card.Img variant="top" src={chef_picture} alt="Chef Picture" />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Container>
                        <Row>
                            <Col>
                                <strong>Likes:</strong> {like}
                            </Col>
                            <Col>
                                <strong>Recipes:</strong> {number_of_recipes}
                            </Col>
                            <Col>
                                <strong>Years of Experience:</strong> {years_of_experience}
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>

            {/* <h1>this is single details page</h1> */}
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    recipe.map(cefSingle => <SingleChefDeatil
                        key={cefSingle._id}
                        cefSingle={cefSingle}
                    ></SingleChefDeatil>)
                }
            </Row>

        </div>
    );
};

export default SingleChefDetails;