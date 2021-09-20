// Program 2
import React, { useState } from 'react';

export default function List(props) {
  const [line, setLine] = useState(false);
  const [mycolor, setColor] = useState(false);
  const Del = () => {
    setLine(true);
    setColor(true);
  };

  return (
    <>
      <tr key={props.id}>
        <th scope="row">{props.id}</th>
        <td
          style={{
            textDecoration: line ? 'line-through' : '',
            color: mycolor ? 'red' : 'green',
          }}
        >
          {props.name}
        </td>

        <td>
          <button type="submit" className="btn btn-danger" onClick={Del}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
