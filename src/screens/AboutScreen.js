import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'

const AboutScreen = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col md={6}>
                    <Image className="rounded-circle" style={{ width: '100%' }} src="/image/elon_musk.jpg" />
                </Col>
                <Col md={6}>
                    <h5 className="p-5" style={{ backgroundColor: '#fafafa', margin: '2rem', lineHeight: '2rem', textAlign: 'center' }}>SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.</h5>
                </Col>

            </Row>


        </Container >
    )
}

export default AboutScreen;
