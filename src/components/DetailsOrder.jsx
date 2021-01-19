/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const DetailsOrder = ({
  items,
  setItems,
  deleteItem,
  emptyItems,
}) => (
  <>
    <section id="detailsOrder" className="padded">
      <div className="container">
        <h2>Resumen de Pedido</h2>
      </div>
    </section>

    <section id="formOrder" className="padded">
      <div className="container h-100">
        <div className="d-flex h-100">
          <div className="align-self-center mx-auto">
            <Form Fluid>
              <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Cliente</Form.Label> */}
                <Form.Control type="text" placeholder="Cliente" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>
                  Mesa:
                </Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </section>

    <section id="listOrder" className="padded">
      <div className="container">
        <Table responsive="md" className="table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Total</th>
              <th>
                {' '}
                {' '}
                {' '}
              </th>
            </tr>
          </thead>
          <tbody>
            {
              items.length > 0
                ? items.map((item) => (
                  <tr key={item.idItem}>
                    <th>
                      <FontAwesomeIcon icon={faPlusCircle} />
                      {' '}
                      {item.cantidad}
                      {' '}
                      <FontAwesomeIcon icon={faMinusCircle} />
                    </th>
                    <th>
                      {' '}
                      {item.descripcion}
                      {' '}
                    </th>
                    <th>
                      {' S/.'}
                      {item.precio}
                    </th>
                    <th>
                      {' S/.'}
                      {item.total}
                    </th>
                    <th>
                      <FontAwesomeIcon icon={faTimesCircle} className="btn-cantidad" onClick={() => deleteItem(item.idItem)} />
                    </th>
                  </tr>
                ))

                : (
                  <tr>
                    {' '}
                    <th colSpan="5">Aun no hay productos</th>
                    {' '}
                  </tr>
                )
}
          </tbody>
          <tfoot>
            {' '}
            <tr>
              <th>
                {' '}
              </th>
              <th>
                {' '}
              </th>
              <th>Total:</th>
              <th colSpan="2">
                {'S/. '}
                {items.reduce((prev, next) => prev + next.total, 0)}
              </th>
            </tr>
          </tfoot>
        </Table>
      </div>
    </section>

    <section id="btnOrderMenu" className="padded">
      <div className="container  h-100">
        <div className="d-flex h-100">
          <div className="align-self-center mx-auto">
            <Button variant="primary" size="lg" onClick={() => emptyItems()}>
              Vaciar
            </Button>
            <Button variant="secondary" size="lg">
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </section>
  </>
);
DetailsOrder.propTypes = {
  items: PropTypes.node.isRequired,
  setItems: PropTypes.node.isRequired,
  deleteItem: PropTypes.node.isRequired,
  emptyItems: PropTypes.node.isRequired,
};
export default DetailsOrder;
