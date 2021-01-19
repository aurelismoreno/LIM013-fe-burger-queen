import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';

const ViewEntregados = () => (
  <>
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
                    <td>{1}</td>
                    <th colSpan="4"> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      Cliente:
                    </th>
                    <td>
                      {' Maria '}
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
                      {' 01'}
                    </td>
                    <th colSpan="4"> </th>
                  </tr>
                </tbody>
              </Table>
              <p>
                <Button variant="primary">ver</Button>
              </p>
            </Jumbotron>
            <Jumbotron id="cardPedidosEntregados" className="text-center">
              <h3>
                Estado:
                {' Entregado  '}
              </h3>
              <br />
              <Table responsive="md" className="table-striped table-hover">
                <thead>
                  <tr>
                    <th>Nro Pedido: </th>
                    <td>{2}</td>
                    <th colSpan="4"> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      Cliente:
                    </th>
                    <td>
                      {' Maria '}
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
                      {' 01'}
                    </td>
                    <th colSpan="4"> </th>
                  </tr>
                </tbody>
              </Table>
              <p>
                <Button variant="primary">ver</Button>
              </p>
            </Jumbotron>
            <Jumbotron id="cardPedidosEntregados" className="text-center">
              <h3>
                Estado:
                {' Entregado  '}
              </h3>
              <br />
              <Table responsive="md" className="table-striped table-hover">
                <thead>
                  <tr>
                    <th>Nro Pedido: </th>
                    <td>{3}</td>
                    <th colSpan="4"> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      Cliente:
                    </th>
                    <td>
                      {' Maria '}
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
                      {' 01'}
                    </td>
                    <th colSpan="4"> </th>
                  </tr>
                </tbody>
              </Table>
              <p>
                <Button variant="primary">ver</Button>
              </p>
            </Jumbotron>
          </div>
        </div>
      </div>

    </section>
  </>
);

export default ViewEntregados;
