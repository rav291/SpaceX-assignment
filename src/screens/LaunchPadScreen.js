import React, { useState, useEffect } from 'react'
import { Row, Col, Container, Image, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LaunchPadScreen = ({ match }) => {

    const [launch, setLaunch] = useState({});
    const [launchImage, setLaunchImage] = useState({});
    const [isReused, setIsReused] = useState(false);


    useEffect(() => {
        const launchData = async () => {

            const res = await axios.get(`https://api.spacexdata.com/v4/launches/${match.params.id}`);
            setLaunchImage(res.data.links.patch.small);
            setLaunch(res.data);
            setIsReused(res.data.cores[0].reused);
        }
        launchData();
        // eslint-disable-next-line
    }, [])

    return (
        <Container>
            <Link to='/' className='btn btn-dark my-3' >
                Go Back
           </Link>
            <Row>
                <Col md={6}>
                    <ListGroupItem className="border-0">
                        <Image src={launchImage} style={{ width: '100%' }} />
                    </ListGroupItem>

                </Col>
                <Col>
                    <ListGroup variant='flush'>
                        <ListGroupItem className="mt-1 border-0 h1">
                            <h1>{launch.name}</h1>
                        </ListGroupItem>
                        <ListGroupItem className="mt-1 border-0">
                            <h4>Launch Details</h4>
                            <p>{launch.details}</p>
                           DATE: <p>{launch.date_local}</p>
                            Core Reusage: {isReused.toString()}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default LaunchPadScreen
