import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import IntroSection from "./IntroSection";
import Content from "./Content";
import Compose from "./Compose";
import AboutRecipe from "./AboutRecipe";
import axios from "./axios";
import Edit from "./Edit";

function App() {
  const { recipeId } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/recipes/sync")
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <Navbar />
            <IntroSection />
            <Content data={recipes} />
          </div>
        }
      />

      <Route path="/compose" element={<Compose refresh={refreshPage} />} />
      <Route
        path={`/:${recipeId}`}
        element={<AboutRecipe refresh={refreshPage} />}
      />
      <Route
        path={`/edit/:${recipeId}`}
        element={<Edit refresh={refreshPage} />}
      />
    </Routes>
  );
}

export default App;
