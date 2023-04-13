import { NavLink } from "react-router-dom";
import "./header.style.css";

export function Header() {
  return (
    <div className="box-header">
    <div className="style-header">
    <h1>TMDB</h1>
    <h3>All movie here</h3>
    <div className="box-link">
      <NavLink to="/" className="link-film"> 
        <div>ФИЛЬМЫ</div>
      </NavLink>
      <NavLink to="persons" className="link-actors">
        <div >АКТЕРЫ</div>
      </NavLink>
      </div>
    </div>
    </div>
  );
}
