/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const ViewDetallePedido = ({
  detalles,
}) => {
  const {
    idItem, cantidad, descripcion, precio, total,
  } = detalles;

  return (
    <>
      <tr>
        <th>
          {idItem}
        </th>
        <td>
          {cantidad}
        </td>
        <td>
          {descripcion}
        </td>
        <td>
          {' '}
          {precio}
          {' '}
        </td>
        <td>
          {' '}
          {total}
          {' '}
        </td>
      </tr>
    </>
  );
};
ViewDetallePedido.propTypes = {
  detalles: PropTypes.shape.isRequired,
};
export default ViewDetallePedido;
