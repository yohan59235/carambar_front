import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header_Container">
      <Link to="/">
        <button type="button">Retour aux blagues aléatoires</button>
      </Link>
      <div>
        <input type="text" placeholder="Choisis un numéro de blague" />
        <input type="submit" value="Rechercher" />
      </div>
      <Link to="/Blague">
        <input type="button" value="Afficher toutes les blagues" />
      </Link>
      <Link to="/Catégorie">
        <input type="button" value="Afficher les blagues par catégories" />
      </Link>
      <Link to="/Ajouter_une_blague">
        <input type="button" value="Ajoute une de tes blagues" />
      </Link>
    </div>
  );
}

export default Header;
