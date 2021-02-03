/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Swal from 'sweetalert2';
// import firebase from 'firebase';
import db from './database';
// import 'firebase/firestore';
import ViewNavegacion from './components/ViewNavegacion';
import ViewMenu from './components/ViewMenu';
import ViewPedidos from './components/ViewPedidos';

// import ViewMain from './components/ViewMain';
// // import logo from './logo.svg';
// import './App.css';
function App() {
  // db del Menu Completo:
  const [optionsMenu, setOptionsMenu] = useState([]);
  useEffect(() => {
    const getMenu = async () => {
      try {
        const data = await db.collection('menu').get();
        // console.log(data.docs);
        const arrayData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // console.log(arrayData);
        setOptionsMenu(arrayData);
      } catch (error) {
        console.log(error);
      }
    };

    getMenu();
  }, []);

  // Traer lo almacenado en Local Storage
  const itemsLocalStorage = JSON.parse(localStorage.getItem('items') || '[]');
  // Items 'Detalle' del Pedido:
  // idItem, Descripción, cantidad, precio, total
  const [items, setItems] = useState(itemsLocalStorage);
  // Pedidos:
  //  cliente, Mesa, Estado
  const [cliente, setCliente] = useState('');
  const [mesa, setMesa] = useState('');

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
        newItems.map((itemPedido, index) => {
          if (itemPedido.idMenu === idAdd) { // Buscamos coincidencia:
            const cantidadItem = (newItems[index].cantidad) + 1; // Aumentamos
            const totalItem = cantidadItem * newItems[index].precio;
            newItems[index] = {
              idItem: newItems[index].idItem,
              idMenu: idAdd,
              descripcion: newItems[index].descripcion,
              cantidad: cantidadItem,
              precio: newItems[index].precio,
              total: totalItem,
            };
          }
          return newItems[index];
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

  // Reduce Cantidad:
  const reduceCantidad = (idAdd) => {
    // console.log(idAdd);
    const newItems = [...items];
    const existItem = (newItems.filter((item) => item.idMenu === idAdd).length) > 0;
    console.log(existItem);
    if (existItem) { // Ya existe id registrado:
      newItems.forEach((itemPedido, index) => {
        if (itemPedido.idMenu === idAdd) { // Buscamos coincidencia:
          const cantidadItem = (newItems[index].cantidad) - 1;
          const totalItem = cantidadItem * newItems[index].precio;
          newItems[index] = {
            idItem: newItems[index].idItem,
            idMenu: idAdd,
            descripcion: newItems[index].descripcion,
            cantidad: cantidadItem,
            precio: newItems[index].precio,
            total: totalItem,
          };
          // console.log(newItems[index].cantidad);
          if (newItems[index].cantidad === 0) {
            newItems.splice(index, 1); // Eliminamos el Item con el valor del index
            // setItems(newItems); // Actualizamos datos
          }
        }
      });
    }
    setItems(newItems);
  };

  const [pedidos, setPedidos] = useState([]);
  // const [getPedidos, setGetpedidos] = useState([]);
  // Funcion enviar:
  const enviarItems = () => {
    const itemsFirebase = [];
    items.forEach((value) => {
      const item = {
        idItem: value.idItem,
        idMenu: value.idMenu,
        descripcion: value.descripcion,
        cantidad: value.cantidad,
        precio: value.precio,
        total: value.total,
      };
      itemsFirebase.push(item);
    });

    db.collection('pedidos').get().then((querySnapshot) => {
      console.log('Tamaño:', querySnapshot.size);
      console.log(typeof querySnapshot.size);
      const nroPedido = (querySnapshot.size + 1).toString();

      const newPedido = {
        detalle: itemsFirebase,
        total: items.reduce((prev, next) => prev + next.total, 0),
        cliente,
        mesa,
        estado: 'Por Entregar',
      };

      db.collection('pedidos').doc(nroPedido).set(newPedido);

      setPedidos([...pedidos, { ...newPedido, id: nroPedido }]); // Actualiza Datos.
    });

    Swal.fire(
      'Perfecto',
      'Pedido Enviado!',
      'success',
    );
    emptyItems();
  };

  // Mostrar Pedidos:
  // const [getPedidos, setGetpedidos] = useState([
  //   // {
  //   //   id: 1,
  //   //   cliente: 'Juan',
  //   //   detalle: [{
  //   //     cantidad: 1,
  //   //     descripcion: 'Hamburguesa Doble',
  //   //     idItem: 1,
  //   //     idMenu: 2,
  //   //     precio: 15,
  //   //     total: 15,
  //   //   }],
  //   //   mesa: '2',
  //   //   total: 15,
  //   //   estado: 'Por Entregar',
  //   // },
  //   // {
  //   //   id: 2,
  //   //   cliente: 'Sofia',
  //   //   detalle: [{
  //   //     cantidad: 1,
  //   //     descripcion: 'Hamburguesa Simple',
  //   //     idItem: 1,
  //   //     idMenu: 1,
  //   //     precio: 10,
  //   //     total: 10,
  //   //   }],
  //   //   mesa: '3',
  //   //   total: 10,
  //   //   estado: 'Por Entregar',
  //   // },
  // ]);
  useEffect(() => {
    const getPedido = async () => {
      try {
        const data = await db.collection('pedidos').get();
        // console.log(data.docs);
        const arrayData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(arrayData);
        setPedidos(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    getPedido();
  }, []);

  const updatePedido = (idPedido) => {
    console.log(idPedido);

    const newPedido = {
      estado: 'Entregado',
    };

    db.collection('pedidos').doc(idPedido).update(newPedido);

    setPedidos([{ ...newPedido }]); // Actualiza Datos.
    Swal.fire(
      'Perfecto',
      'Pedido Entregado!',
      'success',
    );
    emptyItems();
  };
  return (
    <Container fluid id="containerRoot">
      <BrowserRouter>
        <ViewNavegacion />
        <Switch>
          <Route path="#" exact>
            <ViewMenu
              optionsMenu={optionsMenu}
              items={items}
              setItems={setItems}
              addItem={addItem}
              deleteItem={deleteItem}
              emptyItems={emptyItems}
              reduceCantidad={reduceCantidad}
              enviarItems={enviarItems}
              cliente={cliente}
              setCliente={setCliente}
              mesa={mesa}
              setMesa={setMesa}
            />
          </Route>
          <Route path="/" exact>
            <ViewMenu
              optionsMenu={optionsMenu}
              items={items}
              setItems={setItems}
              addItem={addItem}
              deleteItem={deleteItem}
              emptyItems={emptyItems}
              reduceCantidad={reduceCantidad}
              enviarItems={enviarItems}
              cliente={cliente}
              setCliente={setCliente}
              mesa={mesa}
              setMesa={setMesa}
            />
          </Route>
          <Route path="/pedidos">
            <ViewPedidos
              updatePedido={updatePedido}
              pedidos={pedidos}
              setPedidos={setPedidos}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
