import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import db from './data/db.json';
import schema from './data/schema.json';

import TestModal from './components/modal';
import NavBar from './components/navbar';
import PointCounter from './components/secondary';
import Table from './components/testTable';

import 'bootstrap/dist/css/bootstrap.min.css';

let sorted = db.sort(function (a,b) {
  if(a.points > b.points) {
    return -1;
  }
  if(a.points < b.points) {
    return 1;
  }
  return 0;
})

ReactDOM.render(
  <React.StrictMode>
    <NavBar />

    <Container fluid>
      <Row>
        <Col className="justify-content-md-center">
          <PointCounter />
        </Col>

        <Col className="justify-content-md-center">
          <TestModal />
        </Col>  
      </Row>

      <Row>
        <Col className="justify-content-md-center">
          <PointCounter />
        </Col>

        <Col>
          <Table headers={Object.keys(schema)} rows={sorted}/>
        </Col>
      </Row>

      <Row>
        <Col className="justify-content-md-center">
          <PointCounter />
        </Col>
      </Row>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();