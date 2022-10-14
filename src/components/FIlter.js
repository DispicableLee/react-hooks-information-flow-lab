import React from "react";

export default function Filter({catChange}) {
  return (
    <div>
      <div className="Filter">
        <select name="filter" onChange={catChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    </div>
  );
}
