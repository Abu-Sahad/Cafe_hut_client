import { Button, Card, Form } from 'react-bootstrap';
import './ClientSubscribeArea.css'
const ClientSubscribeArea = () => {
    return (
        <section className="subscribe-content">
            <Card className="shadow my-5 w-75">
                <Card.Body>
                    <Form>
                        <div className='text-center mb-5'>
                            <h3 className='text-primary display-6 fw-bold text-uppercase'>Subscribe Now</h3>
                            <div className='mt-5'>
                                <Form.Control type="email" className="w-full px-3 py-3 form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Enter Your Email" />
                            </div>
                        </div>
                        <div className="d-grid">
                            <Button className='w-full p-3 text-uppercase font-weight-bold' variant="info">Submit</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </section>
    );
};

export default ClientSubscribeArea;