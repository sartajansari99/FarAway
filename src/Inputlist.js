import React, { useState } from "react";
import { Item } from "./Item";

export default function Inputlist({ addvals, onDelete, ontoggle, clearItem }) {
  const [sortBy, setsortBt] = useState("input");
  let sortedItem;
  if (sortBy === "input") sortedItem = addvals;
  if (sortBy === "description")
    sortedItem = addvals
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItem = addvals
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            onDelete={onDelete}
            key={item.id}
            ontoggle={ontoggle}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setsortBt(e.target.value)}>
          <option value="input">sort By input Order</option>
          <option value="description">sort By description</option>
          <option value="packed">sort By packed</option>
        </select>
        <button onClick={clearItem}>Clear</button>
      </div>
    </div>
  );
}
