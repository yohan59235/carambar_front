import "./Header.css";

function Header() {
  return (
    <div className="Header_Container">
      <input type="button" value="Voir toutes les blagues" />
      <div>
        <p>Choisis une blague par son numéro</p> <input type="number" />
      </div>

      <input type="button" value="Trouver une blague au hasard" />
      <input type="button" value="Afficher les blagues par catégories" />
      <input type="button" value="Ajoute une de tes blagues" />
    </div>
  );
}

export default Header;
