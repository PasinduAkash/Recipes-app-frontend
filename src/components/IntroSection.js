import React from "react";
import { useNavigate } from "react-router-dom";
import "./IntroSection.css";

function IntroSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/compose");
  };

  return (
    <section className="intro">
      <div className="intro-description">
        <h1 className="intro-description-title">Cooking Made Easy</h1>
        <p className="intro-description-para">
          Is cooking your passion? Do you have a great recipe in mind? Then
          share it with us, So others too can try it out.
        </p>
        <button onClick={handleClick} className="add-button">
          Add a recipe
        </button>
      </div>
      <img
        className="intro-image"
        src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Intro"
      ></img>
    </section>
  );
}

export default IntroSection;
