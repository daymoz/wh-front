import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MainNavbar.scss';
class MainNavbar extends Component {
    render() {
        return (
            <nav id="main-navbar" role="navigation">
                <NavLink activeClassName="active" className="nav-bar item" to="/waven">Waven ?</NavLink>
                <NavLink activeClassName="active" className="nav-bar item" to="/actualites">Actualités</NavLink>
                <NavLink activeClassName="active" className="nav-bar item" to="/guides">Guides</NavLink>
                <NavLink activeClassName="active" className="nav-bar item" to="/classes">Classes</NavLink>
            </nav>
        );
    }
  }
  
  export default MainNavbar;