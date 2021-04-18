import {
    XYPlot,
    HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    YAxis,
    LabelSeries,
    MarkSeries,
    PolygonSeries,
} from 'react-vis';
// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './LocationMap.css';
import Sidebar from '../Sidebar/Sidebar';

const LocationMap = () => {
    const [showObjects, setShowObjects] = useState(true);

    const toggleObjects = () => {
        setShowObjects(!showObjects);
    };

    const locations = [
        {
            x: -10,
            y: 30,
            label: '1',
        },
        {
            x: 10,
            y: 20,
            label: '2',
        },
        {
            x: -40,
            y: -30,
            label: '3',
        },
    ];

    const storeBorders = [
        { x: 50, y: 50 },
        { x: -50, y: 50 },
        { x: -50, y: -50 },
        { x: 50, y: -50 },
    ];

    const storeObjects = [
        [
            { x: -50, y: 40 },
            { x: -45, y: 40 },
            { x: -45, y: -40 },
            { x: -50, y: -40 },
        ],
        [
            { x: -40, y: 50 },
            { x: 40, y: 50 },
            { x: 40, y: 45 },
            { x: -40, y: 45 },
        ],
    ];

    const cashiers = [
        [
            { x: 10, y: -40 },
            { x: 10, y: -25 },
            { x: 15, y: -25 },
            { x: 15, y: -40 },
        ],
        [
            { x: 20, y: -40 },
            { x: 20, y: -25 },
            { x: 25, y: -25 },
            { x: 25, y: -40 },
        ],
        [
            { x: 30, y: -40 },
            { x: 30, y: -25 },
            { x: 35, y: -25 },
            { x: 35, y: -40 },
        ],
    ];

    // const [locations, setLocations] = useState([]);

    // const getLocations = async () => {
    //     const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/location/current`, {
    //         method: 'GET',
    //     });
    //     const locations = await response.json();
    //     return locations;
    // };

    // useEffect(() => {
    //     const formattedLocations = getLocations().then((locationdata) => {
    //         locationdata.map((location) => {
    //             return {
    //                 x,
    //                 y,
    //                 label: location.bracelet,
    //             };
    //         });
    //     });
    //     setLocations(formattedLocations);
    // }, []);

    return (
        <div>
            <div className="splitcontent">
                <Sidebar />
                <Container className="container-locationmap">
                    <XYPlot width={600} height={600}>
                        <XAxis />
                        <YAxis />
                        <HorizontalGridLines />
                        <VerticalGridLines />
                        <MarkSeries
                            animation
                            data={locations}
                        />
                        <LabelSeries
                            animation
                            data={locations}
                        />
                        <PolygonSeries
                            animation
                            data={storeBorders}
                            color="gray"
                            style={{
                                strokeWidth: 0.5,
                                strokeOpacity: 1,
                                opacity: 0.1,
                            }}
                        />
                        {showObjects && (
                            storeObjects.map((obj) => (
                                <PolygonSeries
                                    animation
                                    data={obj}
                                    color="blue"
                                    style={{
                                        strokeWidth: 0.5,
                                        strokeOpacity: 1,
                                        opacity: 0.7,
                                    }}
                                />
                            ))
                        )}
                        {showObjects && (
                            cashiers.map((obj) => (
                                <PolygonSeries
                                    animation
                                    data={obj}
                                    color="green"
                                    style={{
                                        strokeWidth: 0.5,
                                        strokeOpacity: 1,
                                        opacity: 0.7,
                                    }}
                                />
                            ))
                        )}
                    </XYPlot>
                    <Button
                        onClick={toggleObjects}
                    >
                        Toggle Store Layout
                    </Button>
                </Container>
            </div>
        </div>
    );
    // return (
    //     <XYPlot
    //         width={300}
    //         height={300}
    //     >
    //         <HorizontalGridLines />
    //         <LineSeries
    //             data={
    //                 [
    //                     { x: 1, y: 10 },
    //                     { x: 2, y: 5 },
    //                     { x: 3, y: 15 },
    //                 ]
    //             }
    //         />
    //         <XAxis />
    //         <YAxis />
    //     </XYPlot>
    // );
};

export default LocationMap;
