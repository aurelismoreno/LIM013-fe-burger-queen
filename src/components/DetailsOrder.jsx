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
  addItem,
  setItems,
  deleteItem,
  emptyItems,
  reduceCantidad,
  elevateCantidad,
  enviarItems,
  cliente,
  setCliente,
  mesa,
  setMesa,
}) => {
  const sumaTotal = () => {
    let total = 0;
    items.forEach((value) => {
      total += value.total;
    });
    return total;
  };
  console.log(sumaTotal());
  return (
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
                  <Form.Control type="text" placeholder="Cliente" onChange={(e) => setCliente(e.target.value)} value={cliente} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>
                    Mesa:
                  </Form.Label>
                  <Form.Control as="select" onChange={(e) => setMesa(e.target.value)} value={mesa}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
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
                    <th className="btn-cantidad">
                      {' '}
                      <FontAwesomeIcon icon={faPlusCircle} onClick={() => addItem(item.idMenu, item.descripcion, item.precio)} />
                      {' '}
                      {item.cantidad}
                      {' '}
                      {' '}
                      <FontAwesomeIcon icon={faMinusCircle} onClick={() => reduceCantidad(item.idMenu)} />
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
                    <th colSpan="5"> Aun no hay productos </th>
                  </tr>
                )
}
            </tbody>
            <tfoot>
              {' '}
              <tr>
                <th> </th>
                <th> </th>
                <th>Total:</th>
                <th colSpan="2">
                  {'S/. '}
                  {sumaTotal()}
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
              <Button variant="secondary" size="lg" onClick={() => enviarItems()}>
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
DetailsOrder.propTypes = {
  reduceCantidad: PropTypes.node.isRequired,
  elevateCantidad: PropTypes.node.isRequired,
  items: PropTypes.node.isRequired,
  addItem: PropTypes.node.isRequired,
  setItems: PropTypes.node.isRequired,
  deleteItem: PropTypes.node.isRequired,
  emptyItems: PropTypes.node.isRequired,
  enviarItems: PropTypes.node.isRequired,
  cliente: PropTypes.node.isRequired,
  setCliente: PropTypes.node.isRequired,
  mesa: PropTypes.node.isRequired,
  setMesa: PropTypes.node.isRequired,
};
export default DetailsOrder;
