import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';
import DialogBox from './../../containers/DialogBox/DialogBox';

import './AccountNavbar.scss';
import defaultAvatar from './../../default_avatar.png';

class AccountNavbar extends Component {

    state = {
      open: false,
      login: null,
    };

    loginBox = {
      title: 'Se connecter'
    };

    handleClickOpen = () => {
      this.setState({ 
        open: true,
        login: this.loginBox
      });
      
      console.log(this.state);
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
              <DialogBox open={this.state.open} onClose={this.handleClose} boxContent={this.state.login ? this.state.login : '' } />
          </div>
      );
    }
  }
  
  export default AccountNavbar;