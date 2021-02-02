import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../images/recipe.jpg";
import styled from "styled-components";

const Nav = styled.div`
  margin: 10px;
`;
const Buttons = styled.div`
  margin: 30px;
`;

const NavBar = () => {
  return (
    <div>
      <Nav>
        <img className="navImage" src={logo} alt="logo" />
        <h4>
          Secret
          <br />
          Family
          <br />
          Recipes!
        </h4>
      </Nav>
      <Buttons>
        <Link className="navlink" to="/">
          <Button color="info">Log in</Button>
        </Link>

        <Link className="navlink" to="/logout">
          <Button color="info">Log out</Button>
        </Link>
        <Link className="navlink">
          <Button color="info">Home</Button>
        </Link>
        <Link className="navlink">
          <Button color="info">Marketing</Button>
        </Link>
        <Link className="navlink">
          <Button color="info">Visitor Dashboard</Button>
        </Link>
        <Link className="navlink">
          <Button color="info">User Dashboard</Button>
        </Link>
      </Buttons>

      <hr></hr>
    </div>
  );
};

export default NavBar;
