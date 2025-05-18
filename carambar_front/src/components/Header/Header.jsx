import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  // const refreshPage = () => {
  //   window.location.reload();
  // };

  return (
    <div className="Header_Container">
      <Link to="/">
        <button type="button">Blagues aléatoires</button>
      </Link>
      <div>
        <p>Choisis une blague par son numéro</p> <input type="number" />
      </div>
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
