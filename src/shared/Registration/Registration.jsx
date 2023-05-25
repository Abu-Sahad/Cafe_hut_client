import { useContext } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provides/AuthProviders";

const Registration = () => {
    const { createUser } = useContext(AuthContext)
    console.log(createUser)
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
    };
    return (
        <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={8} lg={6} xs={12}>
                    <div className="border border-3 border-primary"></div>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-md-4">
                                <h2 className="fw-bold mb-2 text-uppercase">Chef Hut</h2>
                                <p className="mb-5">Please enter your Registration!</p>
                                <div className="mb-3">
                                    <Form onSubmit={handleRegister}>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label className="text-center">
                                                Name
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder="Enter name"
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                                            <Form.Label className="text-center">
                                                Photo Url
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="photo"
                                                placeholder="Enter photo"
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="text-center">
                                                Email address
                                            </Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="Enter email"
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                            />
                                        </Form.Group>

                                        <div className="d-grid">
                                            <Button variant="primary" type="submit">
                                                Login
                                            </Button>
                                        </div>
                                    </Form>

                                    <div className="mt-3">
                                        <p className="mb-0  text-center">
                                            Al ready have an account?{" "}
                                            <Link to="/login">Login</Link>
                                        </p>
                                        <div className="my-4">
                                            <p className="text-center fw-bold mx-3 mb-0">OR</p>
                                        </div>

                                        <Button className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                                            {/* <MDBIcon fab icon="facebook-f" className="mx-2" /> */}
                                            Continue with Google
                                        </Button>

                                        <Button className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
                                            {/* <MDBIcon fab icon="twitter" className="mx-2" /> */}
                                            Continue with Github
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Registration;