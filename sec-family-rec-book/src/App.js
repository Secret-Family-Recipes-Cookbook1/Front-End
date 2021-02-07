import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from "./components/HomePage"
import RecipesDashboard from "./components/RecipesDashboard"
import Dashboard from "./components/Dashboard"
import SignUp from  "./components/SignUp"
import Login from "./components/Login"
import RecipeForm from "./components/RecipeForm"
import ProtectedRoute from './utils/PrivateRoute';
import Logout from "./components/LogOut"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/recipeDashboard" component={RecipesDashboard} />
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} />
      <ProtectedRoute path="/recipeform" component={RecipeForm} />
      <ProtectedRoute path="/logout" component={Logout} />
      <ProtectedRoute
        path="/dashboard"
        component={Dashboard}
      />
      
    </div>
  );
}

export default App;

