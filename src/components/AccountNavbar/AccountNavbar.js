import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';


import './AccountNavbar.scss';
import defaultAvatar from './../../default_avatar.png';

class AccountNavbar extends Component {
    render() {
      return (
          <div id="account">
              <nav id="account-navbar" role="navigation">
                <Avatar alt='Default Avatar' src={defaultAvatar} className="default-avatar"></Avatar>
                <Button className="sign-in"><NavLink activeClassName="active" className="nav-bar item" to="/user/login">Se connecter</NavLink></Button>
                <Button className="sign-up"><NavLink activeClassName="active" className="nav-bar item" to="/user/singup">S'inscrire</NavLink></Button>
              </nav>
          </div>
      );
    }
  }
  
  export default AccountNavbar;