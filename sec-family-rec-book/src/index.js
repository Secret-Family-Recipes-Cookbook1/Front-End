import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { getRecipesReducer } from "./redux/reducers/getRecipesReducer";
import { loginReducer } from "./redux/reducers/loginReducer";
import { signUpReducer } from "./redux/reducers/signUpReducer";
import { recipesReducer } from "./redux/reducers/recipesReducer";
import { delRecipeReducer } from './redux/reducers/delRecipeReducer';

import "bootstrap/dist/css/bootstrap.min.css";

const rootReducer = combineReducers({
  getRecipesReducer,
  loginReducer,
  signUpReducer,
  recipesReducer,
  delRecipeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);


            

















// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./styles.css"
// import {BrowserRouter as Router} from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );

