import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Baby Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Shop</a>
          </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Account
          </a>
             <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Login</a></li>
            <li><a className="dropdown-item" href="#">My Cart</a></li>
            <li><a className="dropdown-item" href="#">Orders</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Checkout</a></li>
          </ul>
                </li>
          <li className="nav-item">
          <a className="nav-link" href="#">Sign-Up</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
                </li>
          <li className="nav-item">
          <a className="nav-link" href="#">Profile</a>
                </li>
             <li className="nav-item">
          <a className="nav-link" href="#">Logout</a>
          </li>

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

      </div>
    );
  }
}

//  <nav className="navbar navbar-expand-lg bg-body-tertiary">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="#">
//               Baby-Shop
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNavAltMarkup"
//               aria-controls="navbarNavAltMarkup"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//               <div className="navbar-nav">
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Market
//                 </a>
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Sign Up
//                 </a>
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Login
//                 </a>
//                 <a className="nav-link active" aria-current="page" href="#">
//                   MyCart
//                 </a>
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Profile
//                 </a>
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Logout
//                 </a>
//               </div>
//             </div>
//           </div>
//         </nav>
