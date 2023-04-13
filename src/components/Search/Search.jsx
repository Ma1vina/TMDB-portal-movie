import { useState, useEffect } from "react";
import "./search.style.css";

export function Search({ searchValue, filmSearcher }) {
  const [val, setVal] = useState("");

  useEffect(() => {
    filmSearcher(val);
  }, [val]);
  return (
    <div className="search-div">
      <input
        className="search-input"
        placeholder=" ⌕ Поиск"
        value={searchValue}
        type="text"
        onChange={(event) => setVal(event.target.value)}
      />
    </div>
  );
}
