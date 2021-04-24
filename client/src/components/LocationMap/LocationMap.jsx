import {
    XYPlot,
    HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    YAxis,
    LabelSeries,
    MarkSeries,
    PolygonSeries,
    HexbinSeries,
    LineSeries,
    CustomSVGSeries,
} from 'react-vis';
// import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './LocationMap.css';
import Sidebar from '../Sidebar/Sidebar';

const LocationMap = () => {
    const [showObjects, setShowObjects] = useState(true);
    const [highlightEssentialObjects, setHighlightEssentialObjects] = useState(false);
    const [showHeatmap, setShowHeatmap] = useState(false);
    const [showPaths, setShowPaths] = useState(false);
    const [showGrid, setShowGrid] = useState(false);
    const [showBeacons, setShowBeacons] = useState(false);
    const [showContacts, setShowContacts] = useState(false);
    const [showDemo, setShowDemo] = useState(false);

    const [demoValue, setDemoValue] = useState(0);

    const [paths, setPaths] = useState([]);
    const [heatmapData, setHeatmapData] = useState([]);

    const toggleObjects = () => {
        setShowObjects(!showObjects);
    };

    const toggleEssential = () => {
        setHighlightEssentialObjects(!highlightEssentialObjects);
    };

    const toggleHeatmap = () => {
        setShowHeatmap(!showHeatmap);
    };

    const toggleGrid = () => {
        setShowGrid(!showGrid);
    };

    const togglePaths = () => {
        setShowPaths(!showPaths);
    };

    const toggleBeacons = () => {
        setShowBeacons(!showBeacons);
    };

    const toggleContacts = () => {
        setShowContacts(!showContacts);
    };

    const toggleShowDemo = () => {
        setShowDemo(!showDemo);
    };

    const getPathData = async () => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/map/paths`, {
            method: 'GET',
        });
        setPaths(await response.json());
    };

    const getHeatmapData = async () => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/map/heatmap`, {
            method: 'GET',
        });
        setHeatmapData(await response.json());
    };

    const contactData = [
        { x: 10, y: 35 },
        { x: 10, y: 38 },
        { x: 10, y: 45 },
        { x: 17, y: 47 },
        { x: 20, y: 50 },
        { x: 27, y: 32 },
        { x: 60, y: 16 },
        { x: 65, y: 30 },
        { x: 47, y: 45 },
    ];

    const demoLocations = [
        [
            { x: 10, y: 1, color: 'green' },
        ],
        [
            { x: 10, y: 5, color: 'green' },
        ],
        [
            { x: 10, y: 9, color: 'green' },
        ],
        [
            { x: 10, y: 13, color: 'green' },
        ],
        [
            { x: 10, y: 17, color: 'green' },
        ],
        [
            { x: 10, y: 21, color: 'green' },
        ],
        [
            { x: 10, y: 25, color: 'green' },
            { x: 10, y: 1, color: 'orange' },
        ],
        [
            { x: 10, y: 29, color: 'green' },
            { x: 10, y: 6, color: 'orange' },
        ],
        [
            { x: 10, y: 34, color: 'green' },
            { x: 10, y: 12, color: 'orange' },
        ],
        [
            { x: 17, y: 34, color: 'green' },
            { x: 10, y: 18, color: 'orange' },
        ],
        [
            { x: 18, y: 34, color: 'green' },
            { x: 10, y: 18, color: 'orange' },
        ],
        [
            { x: 18, y: 34, color: 'green' },
            { x: 10, y: 24, color: 'orange' },
        ],
        [
            { x: 18, y: 34, color: 'green' },
            { x: 10, y: 30, color: 'orange' },
        ],
        [
            { x: 18, y: 38, color: 'green' },
            { x: 10, y: 36, color: 'orange' },
        ],
        [
            { x: 18, y: 38, color: 'green' },
            { x: 10, y: 41, color: 'orange' },
        ],
        [
            { x: 18, y: 38, color: 'green' },
            { x: 10, y: 51, color: 'orange' },
        ],
        [
            { x: 18, y: 41, color: 'green' },
            { x: 15, y: 48, color: 'orange' },
        ],
        [
            { x: 18, y: 44, color: 'green' },
            { x: 15, y: 47, color: 'orange' },
        ],
        [
            { x: 18, y: 45, color: 'red' },
            { x: 16, y: 47, color: 'red' },
        ],
        [
            { x: 18, y: 45, color: 'red' },
            { x: 16, y: 47, color: 'red' },
        ],
        [
            { x: 18, y: 44, color: 'green' },
            { x: 15, y: 47, color: 'orange' },
        ],
        [
            { x: 19, y: 47, color: 'green' },
            { x: 13, y: 47, color: 'orange' },
        ],
        [
            { x: 26, y: 47, color: 'green' },
            { x: 17, y: 45, color: 'orange' },
        ],
        [
            { x: 26, y: 42, color: 'green' },
            { x: 18, y: 40, color: 'orange' },
        ],
        [
            { x: 26, y: 42, color: 'green' },
            { x: 18, y: 35, color: 'orange' },
        ],
        [
            { x: 26, y: 42, color: 'green' },
            { x: 18, y: 27, color: 'orange' },
        ],
        [
            { x: 26, y: 36, color: 'green' },
            { x: 20, y: 20, color: 'orange' },
        ],
        [
            { x: 26, y: 23, color: 'green' },
            { x: 21, y: 16, color: 'orange' },
        ],
        [
            { x: 36, y: 23, color: 'green' },
            { x: 24, y: 16, color: 'orange' },
        ],
        [
            { x: 36, y: 30, color: 'green' },
            { x: 24, y: 11, color: 'orange' },
        ],
        [
            { x: 36, y: 36, color: 'green' },
            { x: 24, y: 11, color: 'orange' },
        ],
        [
            { x: 36, y: 47, color: 'green' },
            { x: 24, y: 11, color: 'orange' },
        ],
        [
            { x: 46, y: 47, color: 'green' },
            { x: 24, y: 11, color: 'orange' },
        ],
        [
            { x: 46, y: 37, color: 'green' },
            { x: 24, y: 6, color: 'orange' },
        ],
        [
            { x: 46, y: 32, color: 'green' },
            { x: 24, y: 3, color: 'orange' },
        ],
        [
            { x: 46, y: 22, color: 'green' },
            { x: 24, y: 1, color: 'orange' },
        ],
        [
            { x: 50, y: 20, color: 'green' },
        ],
        [
            { x: 48, y: 17, color: 'green' },
        ],
        [
            { x: 48, y: 11, color: 'green' },
        ],
        [
            { x: 48, y: 11, color: 'green' },
        ],
        [
            { x: 48, y: 11, color: 'green' },
        ],
        [
            { x: 48, y: 11, color: 'green' },
        ],
        [
            { x: 48, y: 6, color: 'green' },
        ],
        [
            { x: 48, y: 3, color: 'green' },
        ],
        [
            { x: 48, y: 1, color: 'green' },
        ],
        [],
    ];

    console.log(demoLocations.length);

    const locations = [
        // {
        //     x: 10,
        //     y: 30,
        //     label: '1',
        // },
    ];

    // const popularAisles = []

    // const row = [];
    // for (let y = 1; y <= 50; y += 1) {
    //     row.push({ x: 10, y });
    // }

    // const customHeatmapData = [
    //     { x: 10, y: 30 },
    //     { x: 10, y: 30 },
    //     { x: 10, y: 30 },
    //     { x: 10, y: 30 },
    //     { x: 10, y: 30 },
    //     { x: 10, y: 30 },
    //     { x: 15, y: 35 },
    //     { x: 15, y: 35 },
    //     { x: 15, y: 35 },
    //     { x: 20, y: 30 },
    //     { x: 20, y: 30 },
    //     { x: 20, y: 30 },
    // ];

    // const heatmapData = customHeatmapData.concat(row);

    const storeBorders = [
        { x: 0, y: 0 },
        { x: 0, y: 60 },
        { x: 90, y: 60 },
        { x: 90, y: 0 },
    ];

    const beacons = [
        { x: 5, y: 40 },
        { x: 5, y: 48 },
        { x: 15, y: 53 },
        { x: 72, y: 53 },
        { x: 67, y: 41 },
        { x: 59, y: 47 },
        { x: 52, y: 38 },
        { x: 21, y: 42 },
        { x: 21, y: 26 },
        { x: 31, y: 34 },
        { x: 42, y: 26 },
        { x: 42, y: 44 },
        { x: 22, y: 12 },
        { x: 28, y: 12 },
        { x: 34, y: 12 },
        { x: 40, y: 12 },
        { x: 46, y: 12 },
        { x: 52, y: 12 },
        { x: 58, y: 12 },
        { x: 64, y: 12 },
        { x: 80, y: 42 },
        { x: 82, y: 31 },
        { x: 80, y: 19 },
        { x: 6, y: 21 },
        { x: 6, y: 9 },
        { x: 72, y: 25 },
        { x: 74, y: 12 },
        { x: 63, y: 27 },
    ];

    const storeObjects = [
        [
            { x: 3, y: 5 },
            { x: 3, y: 10 },
            { x: 8, y: 10 },
            { x: 8, y: 5 },
        ],
        [
            { x: 3, y: 13 },
            { x: 3, y: 23 },
            { x: 8, y: 23 },
            { x: 8, y: 13 },
        ],
        [
            { x: 73, y: 52 },
            { x: 73, y: 57 },
            { x: 87, y: 57 },
            { x: 87, y: 45 },
            { x: 82, y: 45 },
            { x: 82, y: 52 },
        ],
        [
            { x: 82, y: 30 },
            { x: 82, y: 42 },
            { x: 87, y: 42 },
            { x: 87, y: 30 },
        ],
        [
            { x: 82, y: 17 },
            { x: 82, y: 27 },
            { x: 87, y: 27 },
            { x: 87, y: 17 },
        ],
        [
            { x: 82, y: 14 },
            { x: 82, y: 5 },
            { x: 87, y: 5 },
            { x: 87, y: 14 },
        ],
    ];

    const storeEssentialObjects = [
        [
            { x: 3, y: 28 },
            { x: 3, y: 48 },
            { x: 8, y: 48 },
            { x: 8, y: 28 },
        ],
        [
            { x: 3, y: 50 },
            { x: 3, y: 57 },
            { x: 13, y: 57 },
            { x: 13, y: 52 },
            { x: 8, y: 52 },
            { x: 8, y: 50 },
        ],
        [
            { x: 16, y: 52 },
            { x: 16, y: 57 },
            { x: 37, y: 57 },
            { x: 37, y: 52 },
        ],
        [
            { x: 40, y: 52 },
            { x: 40, y: 57 },
            { x: 70, y: 57 },
            { x: 70, y: 52 },
        ],
    ];

    const aisles = [
        [
            { x: 20, y: 25 },
            { x: 20, y: 45 },
            { x: 24, y: 45 },
            { x: 24, y: 25 },
        ],
        [
            { x: 30, y: 25 },
            { x: 30, y: 45 },
            { x: 34, y: 45 },
            { x: 34, y: 25 },
        ],
        [
            { x: 40, y: 25 },
            { x: 40, y: 45 },
            { x: 44, y: 45 },
            { x: 44, y: 25 },
        ],
        [
            { x: 50, y: 25 },
            { x: 50, y: 45 },
            { x: 54, y: 45 },
            { x: 54, y: 25 },
        ],
        [
            { x: 60, y: 25 },
            { x: 60, y: 45 },
            { x: 64, y: 45 },
            { x: 64, y: 25 },
        ],
    ];

    const islands = [
        [
            { x: 69, y: 35 },
            { x: 69, y: 45 },
            { x: 76, y: 45 },
            { x: 76, y: 35 },
        ],
        [
            { x: 69, y: 20 },
            { x: 69, y: 32 },
            { x: 76, y: 32 },
            { x: 76, y: 20 },
        ],
        [
            { x: 12, y: 35 },
            { x: 12, y: 45 },
            { x: 16, y: 45 },
            { x: 16, y: 35 },
        ],
        [
            { x: 12, y: 35 },
            { x: 12, y: 45 },
            { x: 16, y: 45 },
            { x: 16, y: 35 },
        ],
        [
            { x: 12, y: 22 },
            { x: 12, y: 32 },
            { x: 16, y: 32 },
            { x: 16, y: 22 },
        ],
        [
            { x: 12, y: 9 },
            { x: 12, y: 19 },
            { x: 16, y: 19 },
            { x: 16, y: 9 },
        ],
        [
            { x: 22, y: 19 },
            { x: 22, y: 21 },
            { x: 28, y: 21 },
            { x: 28, y: 19 },
        ],
        [
            { x: 32, y: 19 },
            { x: 32, y: 21 },
            { x: 38, y: 21 },
            { x: 38, y: 19 },
        ],
        [
            { x: 42, y: 19 },
            { x: 42, y: 21 },
            { x: 48, y: 21 },
            { x: 48, y: 19 },
        ],
        [
            { x: 52, y: 19 },
            { x: 52, y: 21 },
            { x: 58, y: 21 },
            { x: 58, y: 19 },
        ],
        [
            { x: 22, y: 48 },
            { x: 22, y: 50 },
            { x: 28, y: 50 },
            { x: 28, y: 48 },
        ],
        [
            { x: 32, y: 48 },
            { x: 32, y: 50 },
            { x: 38, y: 50 },
            { x: 38, y: 48 },
        ],
        [
            { x: 42, y: 48 },
            { x: 42, y: 50 },
            { x: 48, y: 50 },
            { x: 48, y: 48 },
        ],
        [
            { x: 52, y: 48 },
            { x: 52, y: 50 },
            { x: 58, y: 50 },
            { x: 58, y: 48 },
        ],
    ];

    const cashiers = [
        [
            { x: 20, y: 7 },
            { x: 20, y: 15 },
            { x: 23, y: 15 },
            { x: 23, y: 7 },
        ],
        [
            { x: 26, y: 7 },
            { x: 26, y: 15 },
            { x: 29, y: 15 },
            { x: 29, y: 7 },
        ],
        [
            { x: 32, y: 7 },
            { x: 32, y: 15 },
            { x: 35, y: 15 },
            { x: 35, y: 7 },
        ],
        [
            { x: 38, y: 7 },
            { x: 38, y: 15 },
            { x: 41, y: 15 },
            { x: 41, y: 7 },
        ],
        [
            { x: 44, y: 7 },
            { x: 44, y: 15 },
            { x: 47, y: 15 },
            { x: 47, y: 7 },
        ],
        [
            { x: 50, y: 7 },
            { x: 50, y: 15 },
            { x: 53, y: 15 },
            { x: 53, y: 7 },
        ],
        [
            { x: 56, y: 7 },
            { x: 56, y: 15 },
            { x: 59, y: 15 },
            { x: 59, y: 7 },
        ],
        [
            { x: 62, y: 7 },
            { x: 62, y: 15 },
            { x: 65, y: 15 },
            { x: 65, y: 7 },
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

    useEffect(() => {
        getPathData();
        getHeatmapData();
    }, []);

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
                    <div className="titleheading">
                        <h1>User Locations</h1>
                    </div>
                    <XYPlot width={900} height={600}>
                        <XAxis />
                        <YAxis />
                        {showGrid && (
                            <HorizontalGridLines />
                        )}
                        {showGrid && (
                            <VerticalGridLines />
                        )}
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
                                    color="lightblue"
                                    style={{
                                        strokeWidth: 0.5,
                                        strokeOpacity: 1,
                                        opacity: 0.7,
                                    }}
                                />
                            ))
                        )}
                        {showObjects && (
                            storeEssentialObjects.map((obj) => (
                                <PolygonSeries
                                    animation
                                    data={obj}
                                    color={highlightEssentialObjects ? 'red' : 'lightblue'}
                                    style={{
                                        strokeWidth: 0.5,
                                        strokeOpacity: 1,
                                        opacity: 0.7,
                                    }}
                                />
                            ))
                        )}
                        {showObjects && (
                            islands.map((obj) => (
                                <PolygonSeries
                                    animation
                                    data={obj}
                                    color="lightgreen"
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
                                    color="orange"
                                    style={{
                                        strokeWidth: 0.5,
                                        strokeOpacity: 1,
                                        opacity: 0.7,
                                    }}
                                />
                            ))
                        )}
                        {showObjects && (
                            aisles.map((obj) => (
                                <PolygonSeries
                                    animation
                                    data={obj}
                                    color="pink"
                                    style={{
                                        strokeWidth: 0.5,
                                        strokeOpacity: 1,
                                        opacity: 0.7,
                                    }}
                                />
                            ))
                        )}
                        {showHeatmap && (
                            <HexbinSeries
                                animation
                                sizeHexagonsWithCount
                                data={heatmapData}
                                style={{
                                    opacity: 0.8,
                                }}
                            />
                        )}
                        {showPaths && (
                            paths.map((obj) => (
                                <LineSeries
                                    animation
                                    data={obj.data}
                                    color={obj.color}
                                    style={{
                                        strokeWidth: 5,
                                        strokeOpacity: 1,
                                        opacity: 0.7,
                                    }}
                                />
                            ))
                        )}
                        {false && (
                            beacons.map((beacon) => (
                                <CustomSVGSeries
                                    data={beacon}
                                    customComponent="square"
                                />
                            ))
                        )}
                        {showBeacons && (
                            <CustomSVGSeries
                                animation
                                data={beacons}
                                customComponent="square"
                                size={10}
                            />
                        )}
                        {showContacts && (
                            <CustomSVGSeries
                                animation
                                data={contactData}
                                customComponent="diamond"
                                size={20}
                                style={{
                                    fill: 'red',
                                }}
                            />
                        )}
                        {showDemo && (
                            <MarkSeries
                                animation
                                colorType="literal"
                                data={demoLocations[demoValue]}
                            />
                        )}
                    </XYPlot>
                    <Button
                        bsPrefix="custom-button"
                        onClick={toggleObjects}
                    >
                        Toggle Store Layout
                    </Button>
                    <Button
                        bsPrefix="custom-button"
                        onClick={toggleHeatmap}
                    >
                        Toggle Heatmap
                    </Button>
                    <Button
                        bsPrefix="custom-button"
                        onClick={toggleGrid}
                    >
                        Toggle Gridlines
                    </Button>
                    <Button
                        bsPrefix="custom-button"
                        onClick={toggleEssential}
                    >
                        Highlight Essential Goods
                    </Button>
                    <Button
                        bsPrefix="custom-button"
                        onClick={togglePaths}
                    >
                        Toggle Paths
                    </Button>
                    <Button
                        bsPrefix="custom-button"
                        onClick={toggleBeacons}
                    >
                        Toggle Beacons
                    </Button>
                    <Button
                        bsPrefix="custom-button"
                        onClick={toggleContacts}
                    >
                        Show Contact Locations
                    </Button>
                    <Button
                        bsPrefix="custom-button"
                        onClick={toggleShowDemo}
                    >
                        Show Demo
                    </Button>
                    <RangeSlider
                        value={demoValue}
                        max={demoLocations.length - 1}
                        onChange={(changeEvent) => setDemoValue(changeEvent.target.value)}
                    />
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
