import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

import { Row, Col, Container } from 'react-bootstrap';
import LaunchPad from '../components/LaunchPad';

const HomeScreen = () => {

    const [launchpads, setLaunchPads] = useState([]);


    useEffect(() => {
        const fetchLaunchPads = async () => {
            const res = await axios.get('https://api.spacexdata.com/v4/launchpads')
            setLaunchPads(res.data)
            console.log(res.data)
        }
        fetchLaunchPads();
    }, [])

    return (
        <Container className='mt-3 p-1' >
            <h1>List Of Launchpads</h1>
            <Row>
                {launchpads.map(launchpad => (
                    <Col key={launchpad.id} className="p-3 mt-4" md={6}>
                        <LaunchPad launchpad={launchpad} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default HomeScreen
