/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ViewNavegacion from './components/ViewNavegacion';
import ViewMenu from './components/ViewMenu';
import ViewPedidos from './components/ViewPedidos';

// import ViewMain from './components/ViewMain';
// // import logo from './logo.svg';
// import './App.css';
function App() {
  // db Comidas:
  // const [optionsComidas, setOptionsComidas] = useState([
  //   { id: 1, nombre: 'Hamburguesa Simple', precio: 10 },
  //   { id: 2, nombre: 'Hamburguesa Doble', precio: 15 },
  // ]);
  // const [optionsBebidas, setOptionsBebidas] = useState([
  //   { id: 1, nombre: 'Agua 500ml', precio: 5 },
  //   { id: 2, nombre: 'Agua 750ml', precio: 7 },
  //   { id: 3, nombre: 'Bebida 500ml', precio: 7 },
  //   { id: 4, nombre: 'Bebida 750ml', precio: 10 },
  //   { id: 3, nombre: 'Gaseosa 500ml', precio: 7 },
  //   { id: 4, nombre: 'Gaseosa 750ml', precio: 10 },
  // ]);
  // const [optionsComplementos, setOptionsComplementos] = useState([
  //   { id: 1, nombre: 'Papas fritas', precio: 5 },
  //   { id: 2, nombre: 'Aros de cebolla', precio: 5 },
  // ]);

  // db del Menu Completo:
  const [optionsMenu, setOptionsMenu] = useState([
    {
      id: 1, descripcion: 'Hamburguesa Simple', precio: 10, tipo: 'Comida',
    },
    {
      id: 2, descripcion: 'Hamburguesa Doble', precio: 15, tipo: 'Comida',
    },
    {
      id: 3, descripcion: 'Agua 500ml', precio: 5, tipo: 'Bebida',
    },
    {
      id: 4, descripcion: 'Agua 750ml', precio: 7, tipo: 'Bebida',
    },
    {
      id: 5, descripcion: 'Bebida 500ml', precio: 7, tipo: 'Bebida',
    },
    {
      id: 6, descripcion: 'Bebida 750ml', precio: 10, tipo: 'Bebida',
    },
    {
      id: 7, descripcion: 'Gaseosa 500ml', precio: 7, tipo: 'Bebida',
    },
    {
      id: 8, descripcion: 'Gaseosa 750ml', precio: 10, tipo: 'Bebida',
    },
    {
      id: 9, descripcion: 'Papas fritas', precio: 5, tipo: 'Complemento',
    },
    {
      id: 10, descripcion: 'Aros de cebolla', precio: 5, tipo: 'Complemento',
    },
  ]);

  // Filtrar segun el (tipo) menu seleccionado:
  // const menuSeleccionado = optionsMenu.filter((menu) => menu.tipo === 'Complemento');

  // console.log(menuSeleccionado);

  // pedidos:
  // const [pedidos, setPedidos] = useState([
  //   {
  //     id: 1, cantidad: 2, nombre: 'Hamburguesa Simple', precio: 10, total: 20,
  //   },
  //   {
  //     id: 2, cantidad: 1, nombre: 'Hamburguesa Doble', precio: 15, total: 15,
  //   },
  // ]);

  // Traer lo almacenado en Local Storage
  const itemsLocalStorage = JSON.parse(localStorage.getItem('items') || '[]');
  // Items 'Detalle' del Pedido:
  // idItem, Descripción, cantidad, precio, total
  const [items, setItems] = useState(itemsLocalStorage);
  // Pedidos:
  // IdPed, cliente, Mesa, Estado
  const [pedidos, setPedidos] = useState([]);

  // Persist Data Local Storage:
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // Agregar Item:
  const addItem = (idAdd, descripcionAdd, precioAdd) => {
    if (items.length === 0) { // Se encuatra vacio:
      setItems([{
        idItem: items.length + 1,
        idMenu: idAdd,
        descripcion: descripcionAdd,
        cantidad: 1,
        precio: precioAdd,
        total: precioAdd,
      }]);
    } else { // cuando existen datos.
      const newItems = [...items];
      const existItem = (newItems.filter((item) => item.idMenu === idAdd).length) > 0;
      console.log(existItem);
      if (existItem) { // Ya existe id registrado:
        newItems.forEach((itemPedido, index) => {
          if (itemPedido.idMenu === idAdd) { // Buscamos coincidencia:
            const cantidadItem = (newItems[index].cantidad) + 1;
            const totalItem = cantidadItem * newItems[index].precio;
            // console.log(cantidadDetPedido);
            newItems[index] = {
              idItem: newItems[index].idItem,
              idMenu: idAdd,
              descripcion: descripcionAdd,
              cantidad: cantidadItem,
              precio: precioAdd,
              total: totalItem,
            };
          }
        });
      } else { // Si no existe id, agregamos:
        newItems.push(
          {
            idItem: (items.length) + 1,
            idMenu: idAdd,
            descripcion: descripcionAdd,
            cantidad: 1,
            precio: precioAdd,
            total: precioAdd,
          },
        );
      }
      setItems(newItems);
    }
  };
  // Eliminar:
  const deleteItem = (id) => {
    const newItems = [...items];
    const index = newItems.findIndex((item) => item.idItem === id); // Encontrar el index
    newItems.splice(index, 1); // Eliminamos el Item con el valor del index
    setItems(newItems); // Actualizamos datos
  };
  // Vaciar:
  const emptyItems = () => {
    // setItems([]);
    const newItems = [...items];
    newItems.splice(0, items.length); // Eliminamos todos los elementos
    setItems(newItems); // Actualizamos datos
  };
  return (
    <Container fluid id="containerRoot">
      <BrowserRouter>
        <ViewNavegacion />
        <Switch>
          <Route path="#" exact>
            <ViewMenu
              optionsMenu={optionsMenu}
              pedidos={pedidos}
              setPedidos={setPedidos}
              items={items}
              setItems={setItems}
              addItem={addItem}
              deleteItem={deleteItem}
              emptyItems={emptyItems}
            />
          </Route>
          <Route path="/" exact>
            <ViewMenu
              optionsMenu={optionsMenu}
              pedidos={pedidos}
              setPedidos={setPedidos}
              items={items}
              setItems={setItems}
              addItem={addItem}
              deleteItem={deleteItem}
              emptyItems={emptyItems}
            />
          </Route>
          <Route path="/pedidos" component={ViewPedidos} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
