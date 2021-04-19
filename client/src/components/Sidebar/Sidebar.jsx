import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
    <div id="sidebar">
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
            <Nav.Item>
                <Nav.Link as={Link} to="/register">Register User</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/userlist">User List</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/podlist">Pod List</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/braceletlist">Bracelet List</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/locationmap">Map</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
);

export default Sidebar;
