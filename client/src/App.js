import React, { Component } from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import LandingPage from './components/pages/LandingPage'
import Register from './components/auth/Register'

export default class App extends Component {
  render() {
    return (
        <div>
        <Header />
        <LandingPage />
        <Register/>
        <hr></hr>
        <Footer />

      </div>
    )
  }
}
