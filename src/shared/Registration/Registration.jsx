import { useContext, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provides/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
    const { user, createUser, updateProfile1 } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // Validation
        if (!name || !photo || !email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        if (password.length < 6) {
            setError("Password should be at least 6 characters long.");
            return;
        }

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        createUser(email, password)
            .then((result) => {
                updateProfile1(name, photo)
                    .then(() => {
                        toast.success("Profile updated successfully");
                    })
                    .catch((error) => {
                        setError(error);
                    });

                const loggedUser = result.user;
                form.reset();
                window.location.href = "/";
            })
            .catch((error) => {
                setError(error.message);
            });
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
                                            <Form.Label className="text-center">Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder="Enter name"
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                                            <Form.Label className="text-center">Photo Url</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="photo"
                                                placeholder="Enter photo"
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="text-center">Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="Enter email"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                            />
                                        </Form.Group>

                                        {error && <div className="text-danger mb-3">{error}</div>}

                                        <div className="d-grid">
                                            <Button variant="primary" type="submit">
                                                Register
                                            </Button>
                                        </div>
                                    </Form>

                                    <div className="mt-3">
                                        <p className="mb-0  text-center">
                                            Already have an account?{" "}
                                            <Link to="/login">Login</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default Registration;