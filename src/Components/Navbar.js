import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link to="/">
            <Button className="btn btn-secondary p-1 m-auto">Home</Button>
          </Link>

          <ul className="navbar-nav ms-2 me-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/GamePage">
                GamePage
              </Link>
            </li>
          </ul>
        </div>

        <div className="input-group me-3 w-25">
          <span className="input-group-text">
            <i className="bi bi-controller">@</i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Game name.."
            aria-label="Name"
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
