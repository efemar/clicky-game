import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function FriendCard(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" || window.location.pathname === "/"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Clicky Game
      </Link>
    </li>
    <li className="nav-item">
      <Alert>
        <h3></h3>
      </Alert>
    </li>
    <li className="nav-item">
      <Alert>
        <h3>Score: {props.count} || Top Score: {props.this.state.count}</h3>
      </Alert>
    </li>
    </ul>
      <div className="card">
        <div className="img-container">
          <img onClick={props.handleBtnClick} alt={props.name} src={props.image} data-value={props.key} />
        </div>
      </div>
    </nav>
  );
}

export default FriendCard;


