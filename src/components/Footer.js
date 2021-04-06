import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3 mt-4 h5'>Copyright &copy; SpaceX</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer