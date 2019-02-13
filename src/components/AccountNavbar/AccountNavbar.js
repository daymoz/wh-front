import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';
import Login from './../Login/Login';

import './AccountNavbar.scss';
import defaultAvatar from './../../default_avatar.png';

class AccountNavbar extends Component {

    state = {
      open: false,
    };

    handleClickOpen = () => {
      this.setState({ open: true });
    };

    handleClose = (value) => {
      this.setState({ open: value });
    };

    render() {
      return (
          <div id="account">
              <nav id="account-navbar" role="navigation">
                <Avatar alt='Default Avatar' src={defaultAvatar} className="default-avatar"></Avatar>
                <Button className="sign-in nav-bar item" onClick={this.handleClickOpen}>Se connecter</Button>
                <Button className="sign-up"><NavLink activeClassName="active" className="nav-bar item" to="/user/singup">S'inscrire</NavLink></Button>
              </nav>
              <Login open={this.state.open} onClose={this.handleClose} />
          </div>
      );
    }
  }
  
  export default AccountNavbar;