import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
  const { _id, description, imageURL, name, ingredients, preparation } =
    props.info;

  return (
    <Link
      className="link"
      to={`/${_id}`}
      state={{
        dishId: _id,
        dishName: name,
        dishDescription: description,
        dishImageURL: imageURL,
        dishIngredients: ingredients,
        dishPreparation: preparation,
      }}
    >
      <div className="card">
        <img className="card-image" src={imageURL} alt="Recipe-pic"></img>
        <h2 className="card-title">{name}</h2>
        <p className="card-info">
          {description.split(" ").splice(0, 15).join(" ")}
        </p>
      </div>
    </Link>
  );
}

export default Card;
