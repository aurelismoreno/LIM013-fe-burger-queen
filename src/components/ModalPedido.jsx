/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import ViewDetallePedido from './ViewDetallePedido';

const ModalPedido = ({
  pedido, showModalPedido, setShowModalPedido, updatePedido,
}) => {
  const handleCloseModalPedido = () => setShowModalPedido(false);
  const {
    id, cliente, mesa, total, estado, detalle,
  } = pedido;
  // console.log('X', detalle.map((item) => item.descripcion));
  return (
    <>
      <Modal show={showModalPedido} onHide={handleCloseModalPedido} animation={false}>
        <Modal.Header closeButton />
        <Modal.Body>
          <Jumbotron id="cardPedidosPorEntregar" className="text-center">
            <h3>
              {' '}
              {estado}
            </h3>
            <br />
            <Table responsive="md" className="table-striped table-hover">
              <thead>
                <tr>
                  <th>Nro Pedido: </th>
                  <td>{id}</td>
                  <th colSpan="2"> </th>
                  <th>
                    Mesa:
                  </th>
                  <td>
                    {mesa}
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    Cliente:
                  </th>
                  <td>
                    {cliente}
                  </td>
                  <th colSpan="2"> </th>
                  <th>Pedido: </th>
                  <td>
                    {' '}
                    {' 11:17:00 '}
                  </td>
                </tr>
                <tr>
                  <th>
                    Mesero:
                  </th>
                  <td>
                    {' Aurelis '}
                  </td>
                  <th colSpan="2"> </th>
                  <th>Listo: </th>
                  <td>
                    {' 11:17:00 '}
                  </td>
                </tr>
              </tbody>
            </Table>
            <hr />
            <Table responsive="md" className="table-striped table-hover">
              <thead>
                <tr>
                  <th># </th>
                  <th> Cantidad</th>
                  <th>Descripción</th>
                  <th> Precio</th>
                  <th> Total</th>
                </tr>
              </thead>
              <tbody>
                {detalle.map((detalles) => (
                  <ViewDetallePedido
                    key={detalles.id}
                    detalles={detalles}
                  />
                )) }
              </tbody>
              <tfoot>
                <tr>
                  <th> </th>
                  <th> </th>
                  <th> Total</th>
                  <th>
                    {' S/. '}
                  </th>
                  <th colSpan="1">
                    {total }
                    {' '}
                  </th>
                </tr>
              </tfoot>
            </Table>
            <section id="btnOrderMenu" className="padded">
              <div className="container  h-100">
                <div className="d-flex h-100">
                  <div className="align-self-center mx-auto">
                    <Button variant="primary" size="lg" onClick={() => updatePedido(id)}> Entregado </Button>
                    <Button variant="secondary" size="lg">
                      Cancelar
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </Jumbotron>
        </Modal.Body>
        {/* <Modal.Footer>

        </Modal.Footer> */}
      </Modal>
    </>
  );
};
ModalPedido.propTypes = {
  showModalPedido: PropTypes.node.isRequired,
  setShowModalPedido: PropTypes.node.isRequired,
  pedido: PropTypes.node.isRequired,
  updatePedido: PropTypes.node.isRequired,
};
export default ModalPedido;
