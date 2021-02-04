import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/Login";
import RecipesList from "./components/Dashboard";
import Recipe from "./components/Recipe";
import Logout from "./components/Logout";
import RecipeForm from "./components/RecipeForm";
import HomePage from "./components/HomePage";
import UpdateForm from "./components/UpdateForm"
import SignUp from "./components/SignUp"

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/recipe")
      .then((res) => setItems(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/recipeform" component={RecipeForm} />
        <Route path="/logout" component={Logout} />

        <Route
          exact
          path="/recipe-list"
          render={(props) => <RecipesList {...props} items={items} />}
        />

        <Route
          path="/recipe-list/:id"
          exact
          render={(props) => (
            <Recipe {...props} items={items} setItems={setItems} />
          )}
        />

        <Route
          path="/item-list/update-item/:id"
          render={() => <UpdateForm setItems={setItems} />}
        />
        <Route path="/signUp" component={SignUp} />

        <Route path="/login" component={LoginForm} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
