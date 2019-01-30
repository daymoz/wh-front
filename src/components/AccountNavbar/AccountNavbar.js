import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './AccountNavbar.scss';
import Button from '@material-ui/core/Button';

class AccountNavbar extends Component {
    render() {
      return (
          <div id="account">
              <nav id="account-navbar" role="navigation">
                <Button className="sign-in"><NavLink activeClassName="active" className="nav-bar item" to="/user/login">Se connecter</NavLink></Button>
                <span className="separator">|</span>
                <Button className="sign-up"><NavLink activeClassName="active" className="nav-bar item" to="/user/singup">S'inscrire</NavLink></Button>
              </nav>
          </div>
      );
    }
  }
  
  export default AccountNavbar;