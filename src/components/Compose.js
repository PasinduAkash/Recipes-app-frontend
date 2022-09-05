import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Compose.css";
import axios from "./axios";

export default function Compose(props) {
  const [details, setDetails] = useState({
    name: "",
    description: "",
    ingredients: "",
    preparation: "",
    imageURL: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("/api/compose", details)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/");
    props.refresh();
  };
  return (
    <div className="compose-container">
      <form onSubmit={handleSubmit}>
        <label>Name of the dish</label>
        <input
          onChange={handleChange}
          id="name"
          name="recipe-name"
          type="text"
          value={details.name}
        ></input>
        <label>Description</label>
        <textarea
          onChange={handleChange}
          id="description"
          name="recipe-description"
          cols="30"
          rows="10"
          value={details.description}
        ></textarea>
        <label>Ingredients</label>
        <textarea
          onChange={handleChange}
          id="ingredients"
          name="recipe-ingredients"
          cols="30"
          rows="10"
          value={details.ingredients}
        ></textarea>
        <label>Preparation</label>
        <textarea
          onChange={handleChange}
          id="preparation"
          name="recipe-preparation"
          cols="30"
          rows="10"
          value={details.preparation}
        ></textarea>
        <label>Image URL</label>
        <input
          onChange={handleChange}
          id="imageURL"
          name="recipe-imageurl"
          type="text"
          value={details.imageURL}
        ></input>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
