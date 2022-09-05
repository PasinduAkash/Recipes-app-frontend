import React from "react";
import "./Navbar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Navbar() {
  return (
    <nav>
      <h1 className="site-title">FoodRecipes</h1>
      <ul className="social-icons">
        <li>
          <InstagramIcon className="media-icon" fontSize="small" />
        </li>
        <li>
          <FacebookIcon className="media-icon" fontSize="small" />
        </li>
        <li>
          <TwitterIcon className="media-icon" fontSize="small" />
        </li>
        <li>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="add-button"
          >
            Refresh
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
