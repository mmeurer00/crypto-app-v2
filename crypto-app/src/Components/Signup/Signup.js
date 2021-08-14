import React, { Component } from 'react'
import axios from 'axios';

class Signup extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const data ={
            username: this.username,
            email: this.email,
            password: this.password,
            password_confirm: this.confirmPassword
        }
        axios.post('http://localhost:8000/signup', data).then(
            result => {
                console.log(result)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }
    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>Username</p>
                    <input type="text" placeholder="Username" onChange={e => this.username = e.target.value}/>
                    </label>
                    <label>
                        <p>Email</p>
                    <input type="email" placeholder="Email" onChange={e => this.email = e.target.value}/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" placeholder="Password" onChange={e => this.password = e.target.value}/>
                    </label>
                    <label>
                        <p>Confirm Password</p>
                        <input type="password" placeholder="Confirm Password" onChange={e => this.confirmPassword = e.target.value}/>
                    </label>
                    <div>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Signup