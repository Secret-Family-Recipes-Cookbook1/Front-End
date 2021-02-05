import React, {useState, useEffect} from "react";
import axios from 'axios';
import { getRecipes } from '../actions/actions';
import { deleteRecipe } from '../actions/actions';
import { connect } from "react-redux";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from "styled-components";
import NavBar from '../components/NavBar';


function RecipeList({recipes, getRecipes, deleteRecipe}) {
  let result = [{}];

  useEffect(() => {
    getRecipes();
  }, []);

  console.log(recipes);

  return (
    <div>
      <NavBar />
      <p>Recipe List</p>
        
        <form>
          {recipes.map((recipe, i) => (
            <div key={i}>
              <body>
                <p>Recipe Title: {recipe.title}</p>
                <p></p>
              </body>
            </div>
          ))}
        </form>

    </div>)
}

export default connect({getRecipes, deleteRecipe})(RecipeList);

