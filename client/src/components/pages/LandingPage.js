import React, { Component } from 'react'

export default class LandingPage extends Component {
  render() {
    return (
      <div>

  <section className="hero">
    <div className="container text-center">
      <h1>Welcome to Baby Shop</h1>
      <p>Your one-stop shop for all your baby needs</p>
      <a href="#" className="btn btn-primary btn-lg">Shop Now</a>
    </div>
  </section>

  <section className="featured-products">
    <div className="container">
      <h2 className="text-center">Featured Products</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="product1.jpg" className="card-img-top" alt="Product 1"/>
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">$19.99</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="product2.jpg" className="card-img-top" alt="Product 2"/>
            <div className="card-body">
              <h5 className="card-title">Product 2</h5>
              <p className="card-text">$24.99</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="product3.jpg" className="card-img-top" alt="Product 3"/>
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-text">$29.99</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>




      </div>
    )
  }
}
