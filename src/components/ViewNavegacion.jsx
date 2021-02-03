import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  Navbar, Nav, Col, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ViewNavegacion = () => (
  <>
    <Row>
      <Col>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="top-nav">
          <div className="container">
            <Navbar.Brand href="#">Burger House</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto mt-2 mb-2">
                <Nav.Link href="#"><Link to="/" className="btn-navbar nav-link">Menu</Link></Nav.Link>
                <Nav.Link href="#Pedidos"><Link to="/pedidos" className="btn-navbar nav-link">Pedidos</Link></Nav.Link>
                <Nav.Link href="#Cocina"><Link to="/cocina" className="btn-navbar nav-link">Cocina</Link></Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#">
                  {' Mesero '}
                  <FontAwesomeIcon icon={faUser} />
                </Nav.Link>
                <Nav.Link href="#">
                  Salir
                  {' '}
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        {/* <form>
      <input type="text" className="form-control m-2" placeholder="Usuario" />
      <input type="password" className="form-control m-2" placeholder="Contraseña" />

      <button type="submit" className="btn btn-primary">Login</button>
    </form> */}
      </Col>
    </Row>
  </>
);

export default ViewNavegacion;
