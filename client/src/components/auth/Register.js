import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div>
        <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 className="text-center mt-5">User Registration</h2>
        <form>
          <div className="form-group">
            <label for="name">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your full name"/>
          </div>
          <div className="form-group">
            <label for="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
          </div>
          <div className="form-group">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" className="form-control" id="confirm-password" placeholder="Confirm your password"/>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Register</button>
        </form>
        <p className="text-center mt-3">Already have an account? <a href="login.html">Login here</a></p>
      </div>
    </div>
  </div>

      </div>
    )
  }
}
