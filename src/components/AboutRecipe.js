import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./AboutRecipe.css";
import axios from "./axios";

export default function AboutRecipe(props) {
  const location = useLocation();
  const {
    dishId,
    dishName,
    dishDescription,
    dishImageURL,
    dishIngredients,
    dishPreparation,
  } = location.state;

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${dishId}`, { state: location.state });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      axios
        .delete(`/api/deletedocument/${dishId}`)
        .catch((err) => console.log(err));
      navigate("/");
      props.refresh();
    }
  };

  return (
    <div className="recipe-container">
      <h1 className="recipe-name-title">{dishName}</h1>
      <div className="image-box">
        <img className="recipe-about-image" src={dishImageURL} alt="dish"></img>
      </div>
      <h2 className="recipe-description-title">Description</h2>
      <p className="recipe-para">{dishDescription}</p>
      <h2 className="recipe-ingredients">Ingredients</h2>
      <p className="recipe-para">{dishIngredients}</p>
      <h2 className="recipe-preparation-title">Preparation</h2>
      <p className="recipe-para">{dishPreparation}</p>
      <div className="button-box">
        <IconButton onClick={handleEdit} aria-label="edit" size="small">
          <EditIcon fontSize="inherit" />
        </IconButton>
        <IconButton onClick={handleDelete} aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
}
