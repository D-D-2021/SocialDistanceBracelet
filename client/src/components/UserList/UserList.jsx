import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import './UserList.css';
import Sidebar from '../Sidebar/Sidebar';

const UserList = () => {
    const [userList, setUserList] = useState([]);

    const getUserList = async () => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/userlist`, {
            method: 'GET',
        });
        setUserList(await response.json());
    };

    useEffect(() => {
        getUserList();
    }, []);

    return (
        <div>
            <div className="splitcontent">
                <Sidebar />
                <Container className="container-userlist">
                    <div className="titleheading">
                        <h1>User List</h1>
                    </div>
                    <Table striped bordered hover variant="dark" className="table-userlist">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Contact Tracing</th>
                                <th>Address</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        {userList && (
                            <tbody>
                                {userList.map((user) => (
                                    <tr key={user.username}>
                                        <td>{user.username}</td>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.contactTracing ? 'YES' : 'NO'}</td>
                                        <td>{user.address}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </Table>
                </Container>
            </div>
        </div>
    );
};

export default UserList;
