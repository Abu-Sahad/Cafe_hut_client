import { Card, Col, Row } from "react-bootstrap";

const Blog = () => {
    return (
        <div className="container">
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title>Tell us the differences between uncontrolled and controlled components?</Card.Title>
                            <Card.Text>
                                Controlled components in React are those whose state and behavior are managed by the parent component. To modify their state and behavior, these components rely on props that are given down from the parent component. Components that control their own state on an internal level are referred to as uncontrolled components.
                                Since the parent component controls the state, controlled components have the advantage of being more predictable and simpler to debug. In larger projects with numerous levels of nested components, however, this may also make them more difficult to construct.

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title>How to validate React props using PropTypes?</Card.Title>
                            <Card.Text>
                                Add PropTypes: Import the prop-types package's PropTypes into the file for your React component.
                                <br />
                                Define the many sorts of props: Use the propTypes static property to define the prop types after your component definition. Use the PropTypes methods to specify the anticipated type for each prop, including string, number, bool, array, object, etc.
                                <br />
                                React will automatically validate the props based on the specified prop types when you use your component. React will log a warning message in the console of the browser if any of the props do not match the designated types.
                                You may make sure that the data given to your components is of the expected types by verifying props using PropTypes.

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title>What is a custom hook, and why will you create a custom hook?</Card.Title>
                            <Card.Text>
                                With React, you can abstract away sophisticated logic and state management into a different piece of code using a custom hook, which is a reusable function. Without using inheritance or duplication, you can share logic between components with the use of custom hooks.

                                To encapsulate and reuse functionality that is not particular to one component but can be utilized by several components, you would develop a custom hook. This keeps your codebase modular, enhances readability, and cuts down on duplication. You may simply reuse common functionality, such data retrieval, form handling, or local state management, throughout your application by using custom hooks.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title>Tell us the difference between nodejs and express js.
                            </Card.Title>
                            <Card.Text>
                                A runtime environment called Node.js enables you to execute JavaScript code on the server side. Building scalable network applications is facilitated by its event-driven, non-blocking I/O approach.


                                Contrarily, Express.js is a web application framework for Node.js. It offers a selection of features and tools for creating APIs and web apps. Express.js makes it easier to handle HTTP requests, route traffic, integrate middleware, and perform other typical web development activities.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </div>
    );
};

export default Blog;