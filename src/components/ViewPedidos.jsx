import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ViewEntregados from './ViewEntregados';
import ViewPorEntregar from './ViewPorEntregar';

const ViewPedidos = () => (
  <>
    <Row>
      <Col>
        <ViewPorEntregar />
      </Col>
      <Col>
        <ViewEntregados />
      </Col>
    </Row>
  </>
);

export default ViewPedidos;
