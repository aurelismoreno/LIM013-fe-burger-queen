/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BtnOptionsComplementos = ({
  addItem,
  complemento,
  items,
  setItems,
}) => {
  const { id, descripcion, precio } = complemento;
  return (
    <>
      <Col
        xl={3}
        lg={4}
        md={6}
      >
        <div className="text-dark item">
          <Button onClick={() => addItem(id, descripcion, precio)}>
            <Card.Img src="https://cdn.pixabay.com/photo/2016/06/30/14/54/fast-foods-1489129_960_720.png" alt="Card image" class="img-fluid img-thumbnail" />
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
BtnOptionsComplementos.propTypes = {
  complemento: PropTypes.node.isRequired,
  items: PropTypes.node.isRequired,
  setItems: PropTypes.node.isRequired,
  addItem: PropTypes.node.isRequired,
};
export default BtnOptionsComplementos;
