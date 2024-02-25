import React from "react";

export default function Stats({ addval }) {
  const numItem = addval.length;
  const packedItem = addval.filter((e) => e.packed).length;
  const packedPer = Math.round((packedItem / numItem) * 100);
  return (
    <footer className="stats">
      {packedPer === 100
        ? "You got everything ! Ready to go ✈️"
        : `🎁You have ${numItem} item in your list,and you already packed ${packedItem}
      item (${packedPer}%)`}
    </footer>
  );
}
