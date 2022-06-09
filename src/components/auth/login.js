import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div>LOGIN TO ACCESS YOUR DASHBOARD</div>
                <form>
                    <input type="text"></input>
                    <input type="password"></input>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        )
    }
}
