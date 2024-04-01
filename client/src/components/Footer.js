import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h5>About Us</h5>
        <p>Your one-stop shop for all your baby needs. We offer a wide range of products to make your baby's life comfortable and joyful.</p>
      </div>
      <div className="col-md-4">
        <h5>Follow Us</h5>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5>Contact Us</h5>
        <p>Email: info@babyshop.com</p>
        <p>Phone: +1234567890</p>
      </div>
    </div>
    <hr/>
    <div className="row">
      <div className="col-md-12 text-center">
        <p>&copy; 2024 Baby Shop. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>



      </div>
    )
  }
}
