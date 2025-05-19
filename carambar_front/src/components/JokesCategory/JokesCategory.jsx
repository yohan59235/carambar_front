import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./JokesCategory.css";
import axios from "axios";

function JokesCategory() {
  const [jokesCategory, setJokesCategory] = useState([]);

  const showJokesCategory = () => {
    axios
      .get(`https://carambar-api-n0er.onrender.com/blague/categorie`)
      .then((response) =>
        setJokesCategory(response.data).catch((err) => console.info(err))
      );
  };

  useEffect(() => {
    showJokesCategory();
  }, []);

  return (
    <div className="Category_Container">
      {jokesCategory.map((category, index) => (
        <Link to={`/categorie/${category}`}>
          <button className="Category_Button" key={index}>
            {category}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default JokesCategory;
