import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './AccountNavbar.scss';
import Button from '@material-ui/core/Button';

class AccountNavbar extends Component {
    render() {
      return (
          <div id="account">
              <nav id="account-navbar" role="navigation">
                <Button className="menu"><NavLink activeClassName="active" className="nav-bar item" to="/user/login">Se connecter</NavLink></Button>
                <span className="separator">|</span>
                <Button>S'inscrire</Button>
              </nav>
          </div>
      );
    }
  }
  
  export default AccountNavbar;