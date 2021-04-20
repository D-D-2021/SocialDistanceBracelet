import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    console.log('Loaded home');
    return (
        <div>
            <div className="splitcontent">
                <Sidebar />
                <Container className="container-podlist">
                    <Image src={`${process.env.PUBLIC_URL}/logo.png`} />
                </Container>
            </div>
        </div>
    );
};

export default Home;
