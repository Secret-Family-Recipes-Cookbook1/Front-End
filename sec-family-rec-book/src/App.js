import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/Login";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout"
import RecipeForm from "./components/RecipeForm"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/recipeform" component={RecipeForm}/>
        <Route  path="/logout" component ={Logout}/>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
