import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';

const ViewPorEntregar = () => (
  <>
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
            <Jumbotron id="cardPedidosPorEntregar" className="text-center">
              <h3>
                Estado:
                {' Por Entregar '}
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
                      {' 11:17:00 '}
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
                <Button variant="primary">Ver</Button>
              </p>
            </Jumbotron>
            <Jumbotron id="cardPedidosPorEntregar" className="text-center">
              <h3>
                Estado:
                {' Por Entregar '}
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
                      {' 11:17:00 '}
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
                <Button variant="primary">Ver</Button>
              </p>
            </Jumbotron>
            <Jumbotron id="cardPedidosPorEntregar" className="text-center">
              <h3>
                Estado:
                {' Por Entregar '}
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
                      {' 11:17:00 '}
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
                <Button variant="primary">Ver</Button>
              </p>
            </Jumbotron>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <Jumbotron id="cardPedidosPorEntregar" className="text-center">
          <h4>
            Estado:
            {' Por Entregar '}
          </h4>
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
                  {' 11:17:00 '}
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
            <Button variant="primary">Ver</Button>
          </p>
        </Jumbotron>
        <Jumbotron id="cardPedidosPorEntregar" className="text-center">
          <h3>
            Estado:
            {' Por Entregar '}
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
                  {' 11:17:00 '}
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
            <Button variant="primary">Ver</Button>
          </p>
        </Jumbotron>
        <Jumbotron id="cardPedidosPorEntregar" className="text-center">
          <h3>
            Estado:
            {' Por Entregar '}
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
                  {' 11:17:00 '}
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
            <Button variant="primary">Ver</Button>
          </p>
        </Jumbotron>
      </div> */}
    </section>
  </>
);

export default ViewPorEntregar;
