/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import DetailsOrder from './DetailsOrder';
import ViewOptions from './ViewOptions';

const ViewMenu = ({
  optionsMenu,
  items,
  setItems,
  addItem,
  deleteItem,
  emptyItems,
  reduceCantidad,
}) => (
  <>
    <Row>
      <Col>
        <ViewOptions
          optionsMenu={optionsMenu}
          items={items}
          setItems={setItems}
          addItem={addItem}
        />
      </Col>
      <Col>
        <DetailsOrder
          items={items}
          setItems={setItems}
          deleteItem={deleteItem}
          emptyItems={emptyItems}
          reduceCantidad={reduceCantidad}
          addItem={addItem}
        />
      </Col>
    </Row>
  </>
);

ViewMenu.propTypes = {
  reduceCantidad: PropTypes.node.isRequired,
  items: PropTypes.node.isRequired,
  setItems: PropTypes.node.isRequired,
  addItem: PropTypes.node.isRequired,
  deleteItem: PropTypes.node.isRequired,
  emptyItems: PropTypes.node.isRequired,
  optionsMenu: PropTypes.node.isRequired,
};

export default ViewMenu;
