import { useContext, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provides/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const { signIn, googleSignIn, gitSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState("");

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
                toast.error(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleGitSignIn = () => {
        gitSignIn()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
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
                                <p className="mb-5">Please enter your login and password!</p>
                                <div className="mb-3">
                                    <Form onSubmit={handleLogin}>
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

                                        {error && (
                                            <div className="text-danger mb-3">{error}</div>
                                        )}

                                        <div className="d-grid">
                                            <Button variant="primary" type="submit">
                                                Login
                                            </Button>
                                        </div>
                                    </Form>

                                    <div className="mt-3">
                                        <p className="mb-0  text-center">
                                            Don't have an account?{" "}
                                            <Link to="/register">Register</Link>
                                        </p>
                                        <div className="my-4">
                                            <p className="text-center fw-bold mx-3 mb-0">OR</p>
                                        </div>

                                        <Button
                                            onClick={handleGoogleSignIn}
                                            className="mb-4 w-100"
                                            size="lg"
                                            style={{ backgroundColor: "#3b5998" }}
                                        >
                                            Continue with Google
                                        </Button>

                                        <Button
                                            onClick={handleGitSignIn}
                                            className="mb-4 w-100"
                                            size="lg"
                                            style={{ backgroundColor: "#55acee" }}
                                        >
                                            Continue with Github
                                        </Button>
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

export default Login;
