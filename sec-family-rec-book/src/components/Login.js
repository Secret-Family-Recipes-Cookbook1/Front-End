import React from 'react'
import axios from 'axios'
import '../index.css'
import { axiosWithAuth } from '../utils/axiosWithAuth'





import NavBar from "./NavBar"

class LoginForm extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault()
        axios
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload)
                this.props.history.push('/dashboard')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
            <NavBar/>
                <form onSubmit={this.login} className='login-inputs'>
                    <input
                        className='my-input'
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        className='my-input'
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <div className='login-button-box'>
                        <button className='login-button'>Log in</button>
                    </div>
                    <div className='signup-button-box'>
                        <button className='signup-button'>Sign up</button>
                    </div>
                </form>
            </>
        )
    }
}

export default LoginForm
