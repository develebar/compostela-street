import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="navigation">
      {/* <Link to="/" className="navigation__logo">
        <img src={portada} alt="Compostela Street Festival" className="nav__logo" />
      </Link> */}

      <div className="navigation__links">
        <Link to="/programa">Programa</Link>
        <Link to="/disciplinas/breaking">Disciplinas</Link>
        <Link to="/areas/street-market">Áreas</Link>
      </div>
    </nav>
  );
}