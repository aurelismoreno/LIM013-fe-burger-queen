/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom';
import {
  Nav, Navbar, Row,
} from 'react-bootstrap';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import {
  Tabs, Tab, TabPanel,
} from '@zendeskgarden/react-tabs';
import BtnOptionsBebida from './BtnOptionsBebida';
import BtnOptionsComida from './BtnOptionsComida';
import BtnOptionsComplementos from './BtnOptionsComplementos';

const ViewOptions = ({
  optionsMenu,
  items,
  setItems,
  addItem,
}) => {
  const [selectedTab, setSelectedTab] = useState('comidas');

  // Filtrar segun el menu seleccionado:
  // const selectedMenu = optionsMenu.filter((menu) => menu.tipo === 'Complemento');
  // console.log(selectedMenu);

  const selectedMenu = (tipo) => optionsMenu.filter((menu) => menu.tipo === tipo);

  return (
    <ThemeProvider>
      <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <div className="container padded">
            <Nav className="mx-auto">
              <Tab item="comidas" className="btn-navbar nav">Comidas</Tab>
              <Tab item="bebidas" className="btn-navbar nav">Bebidas</Tab>
              <Tab item="complementos" className="btn-navbar nav">Complementos</Tab>
            </Nav>
          </div>
        </Navbar>
        <TabPanel item="comidas">
          <section id="optionsOrder" className="padded">
            <div className="container">
              <Row>
                {selectedMenu('Comida').map((comida) => (
                  <BtnOptionsComida
                    key={comida.id}
                    comida={comida}
                    items={items}
                    setItems={setItems}
                    addItem={addItem}
                  />
                )) }
              </Row>
            </div>
          </section>
        </TabPanel>
        <TabPanel item="bebidas">
          <section id="optionsOrder" className="padded">
            <div className="container">
              <Row>
                {selectedMenu('Bebida').map((bebida) => (
                  <BtnOptionsBebida
                    key={bebida.id}
                    bebida={bebida}
                    items={items}
                    setItems={setItems}
                    addItem={addItem}
                  />
                )) }
              </Row>
            </div>
          </section>
        </TabPanel>
        <TabPanel item="complementos">
          <section id="optionsOrder" className="padded">
            <div className="container">
              <Row>
                {selectedMenu('Complemento').map((complemento) => (
                  <BtnOptionsComplementos
                    key={complemento.id}
                    complemento={complemento}
                    items={items}
                    setItems={setItems}
                    addItem={addItem}
                  />
                )) }
              </Row>
            </div>
          </section>
        </TabPanel>
      </Tabs>
    </ThemeProvider>

  );
};
ViewOptions.propTypes = {
  optionsMenu: PropTypes.node.isRequired,
  items: PropTypes.node.isRequired,
  setItems: PropTypes.node.isRequired,
  addItem: PropTypes.node.isRequired,
};
export default ViewOptions;
