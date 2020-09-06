import React from 'react';
import EventCarousel from '../components/EventCarousel';

import { Row, Col } from 'react-bootstrap';

const test = ["test1","test2"];

function Events() {
    return (
        <Row>
            <Col fluid="md">
                <h2>Event Details</h2>

                <EventCarousel items={test}/>
            </Col>
        </Row>        
    )
}

export default Events;