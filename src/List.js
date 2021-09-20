import React from 'react';

export default function List(props) {
  return (
    <tr key={props.id}>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>

      <td>
        <button
          type="submit"
          className="btn btn-danger"
          onClick={() => {
            props.delete(props.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
