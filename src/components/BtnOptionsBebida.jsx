/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';

const BtnOptionsBebida = ({
  addItem,
  bebida,
  items,
  setItems,
}) => {
  const { id, descripcion, precio } = bebida;

  return (
    <>
      <Col
        xl={3}
        lg={4}
        md={6}
      >
        <div className="text-dark item">
          <Button onClick={() => addItem(id, descripcion, precio)}>
            <Card.Img src="https://cdn.pixabay.com/photo/2020/05/24/20/48/cola-5216152_960_720.png" alt="Card image" class="img-fluid img-thumbnail" />
            <Card.ImgOverlay>
              <Card.Title>
                {descripcion}
              </Card.Title>
              <Card.Subtitle>
                S/.
                { precio}
              </Card.Subtitle>
            </Card.ImgOverlay>
          </Button>
        </div>
      </Col>

      {/* <section id="btnOptions" className="padded">
      <div className="container  h-100">
        <div className="d-flex h-100">
          <div className="align-self-center mx-auto">
            <Button variant="primary" size="lg">
              <FontAwesomeIcon icon={faCaretLeft} />
            </Button>
            <Button variant="secondary" size="lg">
              <FontAwesomeIcon icon={faCaretRight} />
            </Button>
          </div>
        </div>
      </div>
    </section> */}
    </>
  );
};
BtnOptionsBebida.propTypes = {
  bebida: PropTypes.node.isRequired,
  items: PropTypes.node.isRequired,
  setItems: PropTypes.node.isRequired,
  addItem: PropTypes.node.isRequired,
};
export default BtnOptionsBebida;
