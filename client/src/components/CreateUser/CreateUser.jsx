import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import './CreateUser.css';
import Sidebar from '../Sidebar/Sidebar';

const CreateUser = () => {
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [contactTracing, setContactTracing] = useState(false);
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const sendUserRegistration = async (formData) => fetch(`${process.env.REACT_APP_SERVER_URL}/user/create`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            username,
            firstname,
            lastname,
            email,
            contactTracing,
            address,
            phone,
        };
        sendUserRegistration(formData);
    };

    return (
        <div>
            <div className="splitcontent">
                <Sidebar />
                <Container className="container-createuser">
                    <div className="titleheading">
                        <h1>Register a User</h1>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Username"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="firstname">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First Name"
                                    onChange={(e) => setFirstname(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="lastname">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last Name"
                                    onChange={(e) => setLastname(e.target.value)}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="12" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="2" controlId="contactTracing">
                                <Form.Label>Contact Tracing</Form.Label>
                                <Form.Check
                                    type="checkbox"
                                    onChange={(e) => setContactTracing(e.target.checked)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="5" controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="5" controlId="phone">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Phone Number"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Button bsPrefix="custom-button" type="submit">Submit</Button>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default CreateUser;
