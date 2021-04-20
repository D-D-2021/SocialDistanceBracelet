import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Sidebar from '../Sidebar/Sidebar';
import './BraceletList.css';

const BraceletList = () => {
    const [braceletList, setBraceletList] = useState([]);

    const getBraceletList = async () => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/bracelet/braceletlist`, {
            method: 'GET',
        });
        setBraceletList(await response.json());
    };

    useEffect(() => {
        getBraceletList();
    }, []);

    return (
        <div>
            <div className="splitcontent">
                <Sidebar />
                <Container className="container-braceletlist">
                    <div className="titleheading">
                        <h1>Bracelet List</h1>
                    </div>
                    <Table striped bordered hover variant="dark" className="table-braceletlist">
                        <thead>
                            <tr>
                                <th>Bracelet ID</th>
                                <th>MAC Address</th>
                                <th>Usage</th>
                                <th>Last User</th>
                            </tr>
                        </thead>
                        {braceletList && (
                            <tbody>
                                {braceletList.map((bracelet) => (
                                    <tr key={bracelet.id}>
                                        <td>{bracelet.id}</td>
                                        <td>{bracelet.macAddress}</td>
                                        <td>{Object.prototype.hasOwnProperty.call(bracelet.usage.slice(-1)[0], 'timeEnd') ? 'Not in use' : 'In use'}</td>
                                        <td>{bracelet.usage.slice(-1)[0].user}</td>
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

export default BraceletList;
