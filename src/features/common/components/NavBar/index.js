import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import logo from './logo.svg'

import './NavBar.css'

class NavBar extends Component {
  state = {
    active: false
  }

  render () {
    const {active} = this.state
    return (
      <nav className="NavBar nav has-shadow">
        <div className="nav-left">
          <NavLink
            activeClassName='is-active'
            className="nav-item"
            to="/"
          >
            <img id="logo" src={logo} alt="Club Bernal logo" />
          </NavLink>
        </div>
        <div className="nav-center">
          <a
            href="https://www.facebook.com/ClubBernal/?fref=ts"
            target="_blank"
            className="nav-item"
          >
            <span className="icon">
              <i className="fa fa-facebook-official"></i>
            </span>
          </a>
          <a
            href="https://www.instagram.com/clubernal/"
            target="_blank"
            className="nav-item"
          >
            <span className="icon">
              <i className="fa fa-instagram"></i>
            </span>
          </a>
          <a
            href="https://twitter.com/clubernal"
            target="_blank"
            className="nav-item"
          >
            <span className="icon">
              <i className="fa fa-twitter"></i>
            </span>
          </a>
        </div>
        <span
          onClick={() => this.setState({active: !active})}
          className="nav-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div
          className={`nav-right nav-menu ${active ? 'is-active' : ''}`}
          onClick={() => this.setState({active: false})}
        >
          <NavLink
            exact
            activeClassName='is-active'
            className="nav-item is-tab"
            to="/"
          >
            Inicio
          </NavLink>
          <NavLink
            exact
            activeClassName='is-active'
            className="nav-item is-tab"
            to="/contacto"
          >
            Contacto
          </NavLink>
          <NavLink
            exact
            activeClassName='is-active'
            className="nav-item is-tab"
            to="/actividades"
          >
            Actividades
          </NavLink>
          <NavLink
            exact
            activeClassName='is-active'
            className="nav-item is-tab"
            to="/precios"
          >
            Precios
          </NavLink>
        </div>
      </nav>
    )
  }
}

export default NavBar
