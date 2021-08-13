import React, { Component } from 'react'

class Signup extends Component {

    handleSubmit = () => {
        console.log('works')
    }
    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>Username</p>
                    <input type="text" placeholder="Username" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <label>
                        <p>Email</p>
                    <input type="email" placeholder="Email" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <label>
                        <p>Confirm Password</p>
                        <input type="password" placeholder="Confirm Password" onChange={e => setPassword(e.target.value)}/>
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