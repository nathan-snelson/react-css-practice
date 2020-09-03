import React from 'react';
import Table from '../components/testTable';
import PointCounter from '../components/secondary';

import db from '../data/db.json';
import schema from '../data/schema.json';

import { Row, Col } from 'react-bootstrap';

let sorted = db.sort(function (a,b) {
    if(a.points > b.points) {
      return -1;
    }
    if(a.points < b.points) {
      return 1;
    }
    return 0;
});

const Main = () => {
    return (
        <Row>
            <Col xs={4} md={6}>
                <PointCounter number={1}/>
                <PointCounter number={2}/>
                <PointCounter number={3}/>
            </Col>

            <Col xs={8} md={6}>
                <Table headers={Object.keys(schema)} rows={sorted} />                
            </Col>
        </Row>
    )
}

export default Main;