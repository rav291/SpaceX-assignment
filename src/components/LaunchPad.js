import React, { useState, useEffect } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';

const LaunchPad = ({ launchpad }) => {

    const { name, full_name, status, details, id } = launchpad;

    const [launch1, setLaunch1] = useState({});
    const [launch2, setLaunch2] = useState({});
    const [launch3, setLaunch3] = useState({});
    const allLaunches = launchpad.launches;

    useEffect(() => {
        const launchData = async () => {

            const launchRes1 = await axios.get(`https://api.spacexdata.com/v4/launches/${allLaunches[0]}`);
            const launchRes2 = await axios.get(`https://api.spacexdata.com/v4/launches/${allLaunches[1]}`);
            const launchRes3 = await axios.get(`https://api.spacexdata.com/v4/launches/${allLaunches[2]}`);

            if (launchRes1 !== [])
                setLaunch1(launchRes1.data);
            if (launchRes2 !== [])
                setLaunch2(launchRes2.data);
            if (launchRes3 !== [])
                setLaunch3(launchRes3.data);
        }
        launchData();
        // eslint-disable-next-line
    }, [])

    return (
        <Container>
            <Card style={{ width: '32rem', border: 'none', background: '#f6f6f6' }}>
                <Card.Body className="font-weight-bold">
                    <Card.Title ><h2>{name}</h2></Card.Title>
                    <Card.Text>
                        {full_name}
                    </Card.Text>
                    <Card.Text>
                        <h5>STATUS: {status}</h5>
                    </Card.Text>
                    <Card.Text>
                        <h5>Launchpad Details:</h5>
                        {details}
                    </Card.Text>
                    <Card.Text>
                        <h5>Last 3 Launches:</h5>

                        <p>{launch1.name ? <Link to={`/launchpads/${allLaunches[0]}`}>{launch1.name}</Link> : 'No Launch Available'} </p>

                        <Link to={`/launchpads/${allLaunches[1]}`}>
                            <p>{launch2.name}</p>
                        </Link>
                        <Link to={`/launchpads/${allLaunches[2]}`}>
                            <p>{launch3.name}</p>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default LaunchPad
