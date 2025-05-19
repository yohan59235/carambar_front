import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <div className="Header_Container">
      <div className="Header_Image">
        <img src="src/assets/fond-ecran.jpg" alt="fond d'écran carambar" />
      </div>
      <div className="Header_Links">
        <div className="First_Line_Onglets">
          <Link to="/">
            <input type="button" value="Blagues aléatoires" />
          </Link>
          <Link to="/Blague/id">
            <input type="submit" value="Rechercher par numéro" />
          </Link>
        </div>
        <div className="Second_Line_Onglets">
          <Link to="/Blague">
            <input type="button" value="Toutes les blagues" />
          </Link>
          <Link to="/Catégorie">
            <input type="button" value="Catégories de blague" />
          </Link>
        </div>
        <div className="Last_Line_Onglets">
          <Link to="/Ajouter_une_blague">
            <input type="button" value="Ajoute une de tes blagues" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
