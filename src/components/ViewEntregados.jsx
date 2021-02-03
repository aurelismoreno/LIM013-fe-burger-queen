/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ModalPedido from './ModalPedido';

const ViewEntregados = ({ pedido }) => {
  // Modal
  const [showModalPedido, setShowModalPedido] = useState(false);
  const handleShowModalPedido = () => setShowModalPedido(true);
  //
  const {
    id, cliente, mesa, total, estado,
  } = pedido;

  // console.log(detalle.map((item) => item.descripcion));
  return (
    <>
      <Jumbotron id="cardPedidosEntregados" className="text-center">
        <h3>
          Estado:
          {' Entregado '}
        </h3>
        <br />
        <Table responsive="md" className="table-striped table-hover">
          <thead>
            <tr>
              <th>Nro Pedido: </th>
              <td>{id}</td>
              <th colSpan="4"> </th>
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
              <th>Cocinero: </th>
              <td>Clarissa</td>
            </tr>
            <tr>
              <th>
                Mesero:
              </th>
              <td>
                {' Aurelis '}
              </td>
              <th colSpan="2"> </th>
              <th>Pedido: </th>
              <td>
                {' 11:37:00 '}
              </td>
            </tr>
            <tr>
              <th>
                Mesa:
              </th>
              <td>
                {mesa}
              </td>
              <th colSpan="4"> </th>
            </tr>
          </tbody>
        </Table>
        <p>
          <Button variant="primary" onClick={handleShowModalPedido}>ver</Button>
          <ModalPedido
            showModalPedido={showModalPedido}
            setShowModalPedido={setShowModalPedido}
            pedido={pedido}
          />
        </p>
      </Jumbotron>
    </>
  );
};
ViewEntregados.propTypes = {
  pedido: PropTypes.node.isRequired,
};
export default ViewEntregados;
