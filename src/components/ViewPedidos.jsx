/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import ViewEntregados from './ViewEntregados';
import ViewPorEntregar from './ViewPorEntregar';

const ViewPedidos = ({
  pedidos,
  setPedidos,
  updatePedido,
}) => {
  const selectedEstadoPedido = (e) => pedidos.filter((pedido) => pedido.estado === e);
  // console.log(detalle.map((item) => item.descripcion));
  return (
    <>
      <Row>
        <Col>
          <section id="titlePorEntregar" className="padded">
            <div className="container">
              <h2>Por Entregar</h2>
              <hr />
            </div>
          </section>
          <section id="pedidosPorEntregar" className="padded">
            <div className="container h-100">
              <div className="d-flex h-100">
                <div className="align-self-center mx-auto">
                  {selectedEstadoPedido('Por Entregar').map((pedido) => (
                    <ViewPorEntregar
                      key={pedido.id}
                      pedido={pedido}
                      pedidos={pedidos}
                      setPedidos={setPedidos}
                      updatePedido={updatePedido}
                    />
                  )) }
                </div>
              </div>
            </div>
          </section>
        </Col>
        <Col>
          <section id="titleEntregados" className="padded">
            <div className="container">
              <h2>Entregados</h2>
              <hr />
            </div>
          </section>

          <section id="pedidosEntregados" className="padded">

            <div className="container h-100">
              <div className="d-flex h-100">
                <div className="align-self-center mx-auto">
                  {selectedEstadoPedido('Entregado').map((pedido) => (
                    <ViewEntregados
                      key={pedido.id}
                      pedido={pedido}
                      pedidos={pedidos}
                      setPedidos={setPedidos}
                    />
                  )) }
                </div>
              </div>
            </div>

          </section>

        </Col>
      </Row>
    </>
  );
};
ViewPedidos.propTypes = {
  pedidos: PropTypes.node.isRequired,
  setPedidos: PropTypes.node.isRequired,
  updatePedido: PropTypes.node.isRequired,
};
export default ViewPedidos;
