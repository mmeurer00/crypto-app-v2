import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import axios from 'axios';

// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
// }

class Login extends Component {

  handleSubmit = e => {
    e.preventDefault();
    const data = {
        username: this.username,
        email: this.email,
        password: this.password
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
// function Login({ setToken }) {
//     const [username, setUserName] = useState();
//     const [password, setPassword] = useState();

//     const handleSubmit = async e => {
//         e.preventDefault();
//         const token = await loginUser({
//           username,
//           password
//         });
//         setToken(token);
// }
render(){
  return(
    <div className="login-wrapper">
        <h1>Please Log In</h1>
        {/* <form onSubmit={handleSubmit}>
        <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
            <button type="submit">Submit</button>
        </div>
        </form> */}
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
        <div>
            <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )}
}
  export default Login