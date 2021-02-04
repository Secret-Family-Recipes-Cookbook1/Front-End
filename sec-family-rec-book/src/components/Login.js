import React from "react";
import axios from "axios";
import "../index.css";
import { Form, Field, withFormik } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import NavBar from "./NavBar";

class LoginForm extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then((res) => {
        window.localStorage.setItem("token", res.data.payload);
        this.props.history.push("/recipe-list");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <NavBar />
        <form onSubmit={this.login} className="login-inputs">
          <input
            className="my-input"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            className="my-input"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <div className="login-button-box">
            <button className="login-button">Log in</button>
          </div>
          <div className="signup-button-box">
            <button className="signup-button">Sign up</button>
          </div>
        </form>
      </>
    );
  }
}

export default LoginForm;













// import React, { useState, useEffect } from "react";
// import  './login.css'
// import { Link, useHistory } from "react-router-dom";
// import { Form,  FormGroup, Label, Input, Button   } from 'reactstrap';
// import * as yup from 'yup';
// import schema from '../validation/loginValidation'

// import axios from "axios";


// export default function LoginForm(props) {

    
//      const [loginFormState , setloginFormState] = useState({
//         email: '', 
//         password: '', 
//         rememberMe: false,
//      })

//     const [errors, setErrors] = useState({name: '', password: ''})
//     const [disabled, setDisabled] = useState(true)

//     const setFormErrors = (name, value) => {
//         yup.reach(schema, name).validate(value)
//         .then( () => setErrors({...errors, [name]: ''}))
//         .catch(err => setErrors({...errors, [name]: err.errors[0]}))
//     }

//     const change = event => {
//         const { checked, value, name, type } = event.target
//         const valueChecked = type === 'checkbox'  ? checked : value
//         setFormErrors(name, valueChecked)
//         setloginFormState({...loginFormState , [name]: valueChecked})
//         }

//     const submit = event => {
//         event.preventDefault()

//         axios
//         .post("http://localhost:5000/api/login", this.state.credentials)
//         .then((res) => {
//           window.localStorage.setItem("token", res.data.payload);
//           this.props.history.push("/recipe-list");
//         })
//         .catch((err) => console.log(err));
//         // props.history.push("/dashboard")
//         // let path = `/dashboard`; 
//         // history.push(path);
//         }

//      useEffect( () => {
//             schema.isValid(loginFormState).then(valid => setDisabled(!valid))
//         }, [loginFormState])    

//     return (
//         <div className="login-container">
//             <img className="header-img"
//               src="https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948"
//               ></img>
            
//             <div className="login-form-container">
//                 <div className="login-title-form-container">
//                    <img className="logo-img"
//                        src="https://raw.githubusercontent.com/Secret-Family-Recipes-Cookbook1/Front-End/main/sec-family-rec-book/src/images/recipe.jpg"
//                    ></img>
//                     <h1 className="logo-name"> RecipeCookbook</h1>
//                 </div>

//                 <div className="login-sub-title-form-container">
//                     <h3>Login to your account</h3>
//                 </div>

//                 <div className="login-form">
//                     <Form className='form-container'
//                         onSubmit={submit} >

//                         <FormGroup>
//                             <Label>Email</Label>
//                             <Input
//                                 name='email'
//                                 type='email'
//                                 onChange={change}
//                                 value={loginFormState.email}
//                                 className="form-control-login"
//                                 placeholder='enter email'
//                                 maxLength='35'
//                             />
//                             <div className='error-msg' style={{ color: 'red' }}>
//                             <div>{errors.email}</div>
//                             </div>
//                         </FormGroup>
//                         <div className = "space-div"></div>
//                         <FormGroup>
//                             <Label>password</Label>
//                             <Input
//                                 name='password'
//                                 type='password'
//                                 onChange={change}
//                                 value={loginFormState.password}
//                                 className="form-control-login"
//                                 placeholder='enter password'
//                             />  
//                             <div className='error-msg' style={{ color: 'red' }}>
//                                 <div>{errors.password}</div>
//                             </div>
//                         </FormGroup>

//                         <div className="horizontal-login-components">
//                             <FormGroup check>
//                                 <Label check 
//                                  className = "check-box">
//                                     <Input
//                                         onChange={change}
//                                         name='rememberMe'
//                                         type='checkbox'
//                                         value={loginFormState.rememberMe}
//                                     />{' '}
//                                     Remember Me
//                                 </Label>
//                             </FormGroup>

//                             <a href=""> <p className = "reset-text"> Reset Password?</p></a>
//                         </div>

//                         <Button disabled={disabled}  className= "submit-btn">Sign in</Button>
//                     </Form>
                     
//                     <div className="horizontal-login-bottom-components">
//                        <p> Dont have an account yet?</p>
//                        <Link to="/signup"><p className= "sign-up-text"> Join RecipeCookbook</p></Link>
                       
//                      </div>
//                 </div>
//             </div>
//         </div>
//     )
// }