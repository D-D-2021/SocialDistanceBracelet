/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Sidebar from '../Sidebar/Sidebar';
import './PodList.css';

const PodList = () => {
    const [podlist, setPodlist] = useState([]);
    const [selectedPod, setSelectedPod] = useState(null);

    const getPodList = async () => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/pod/podlist`, {
            method: 'GET',
        });
        setPodlist(await response.json());
        console.log('Got List');
    };

    useEffect(() => {
        console.log('Running useeffect');
        getPodList();
    }, []);

    return (
        <div>
            <div className="splitcontent">
                <Sidebar />
                <Container className="container-podlist">
                    <div className="titleheading">
                        <h1>Pod List</h1>
                    </div>
                    <div id="dropdown-pod">
                        <DropdownButton bsPrefix="custom-button" id="dropdown-pod-select" title="Choose a Pod">
                            {podlist && (
                                podlist.map((pod) => (
                                    <Dropdown.Item onClick={() => setSelectedPod(pod)}>
                                        {pod.name}
                                    </Dropdown.Item>
                                ))
                            )}
                        </DropdownButton>
                    </div>
                    <div id="list-pid">
                        <ListGroup>
                            {selectedPod && (
                                selectedPod.userList.map((user) => (
                                    <ListGroup.Item>
                                        { user.username }
                                    </ListGroup.Item>
                                ))
                            )}
                        </ListGroup>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default PodList;
