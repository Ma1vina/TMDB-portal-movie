import React from "react";
import "./selectFilter.css";

export function SelectFilters({ filter, dropDownChanger }) {
  return (
    <span className="custom-dropdown big">
      <select
        className="select-css"
        value={filter}
        onChange={(event) => {
          dropDownChanger(event.target.value);
        }}
      >
        <option value={"popular"}>Популярно сейчас</option>
        <option value={"top_rated"}>Высокий рейтинг</option>
        <option value={"upcoming"}>Недавно вышедшие</option>
      </select>
    </span>
  );
}
