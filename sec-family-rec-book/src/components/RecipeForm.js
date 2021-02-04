import React, { Component } from "react";
import "../index.css";
import NavBar from "./NavBar";
import axios from "axios";
import { addRecipe, editRecipe } from "../actions/actions";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";

function RecipeForm(props, { addRecipe, editRecipe}) {
  
  const defaultState = {
    newRecipe: {
      title: "",
      source: "",
      ingredients: "",
      instructions: "",
      category: "",
      photo: "",
    }
  };

  const [recipe, setRecipe] = useState(defaultState);

  const [error, setErrors] = useState(defaultState);
  const [disableButton, setDisableButton] = useState(true);

  function inputText(labelFor,
                     labelText,
                     type,
                     name,
                     value,
                     onChange,
                     errors) {
            return <label htmlFor={labelFor}>
                {labelText}
                 <input type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        errors={errors} />
            </label>
                     }

  handleChange = (e) => {
    setRecipe({
      newRecipe: {
        ...recipe,
        [e.target.name]: e.target.value,
      },
    });
  };

 const handleSubmit = (e) => {
   e.preventDefault();
   if(props.recipeId) {
     editRecipe({
       ...recipe,
       id: props.recipeId
     });
   } else {
     addRecipe(recipe);
   }
 }

  render() {
    return (
      <div>
        <NavBar />
        <form onSubmit={handleSubmit} >
          <TextField
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.newRecipe.title}
            onChange={this.handleChange}
          />
          <div />
          <TextField
            type="text"
            name="source"
            placeholder="Source"
            value={this.state.newRecipe.source}
            onChange={this.handleChange}
          />
          <div />
          <TextField
            type="text"
            name="ingredients"
            placeholder="Ingredients"
            value={this.state.newRecipe.ingredients}
            onChange={this.handleChange}
          />
          <div />
          <TextField
            type="text"
            name="instructions"
            placeholder="Instructions"
            value={this.state.newRecipe.instructions}
            onChange={this.handleChange}
          />
          <div />
          <TextField
            type="text"
            name="category"
            placeholder="Category"
            value={this.state.newRecipe.category}
            onChange={this.handleChange}
          />
          <div />
          <TextField
            type="text"
            name="photo"
            placeholder="Photo"
            value={this.state.newRecipe.photo}
            onChange={this.handleChange}
          />
          <div />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ margin: "20px" }}
          >
            Add Recipe
          </Button>
        </form>
      </div>
    );
  }
}