import React from "react";
import "../index.css"
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import NavBar from "./NavBar";
import RecipeList from "./RecipeList"

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));



const Dashboard = () => {
    const classes = useStyles();
  return (
    <>
      <NavBar />
      <div  className="button-box"  >
        <Link to="/recipeform">
          <Button variant="contained"  className={classes.button}>Add A New Recipe</Button>
        </Link>
      </div>
      <RecipeList/>
    </>
  );
};

export default Dashboard;
