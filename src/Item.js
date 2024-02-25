import React from "react";

export function Item({ item, onDelete, ontoggle }) {
  return (
    <li>
      <input type="checkbox" onChange={() => ontoggle(item.id)} />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
