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
      contentToDisplay: null,
      tabIndex: null,
    };

    handleClickOpen = (value) => {
      switch(value) {
        case 'login':
          this.setState({ 
            open: true,
            contentToDisplay: value,
            tabIndex: 0,
          });
          break;
        case 'signup':
          this.setState({ 
            open: true,
            contentToDisplay: value,
            tabIndex: 1,
          });
          console.log(this.state);
          break;
        default:
          break;
      }
    };

    handleClose = (value) => {
      this.setState({ open: value });
    };

    render() {
      return (
          <div id="account">
              <nav id="account-navbar" role="navigation">
                <Avatar alt='Default Avatar' src={defaultAvatar} className="default-avatar"></Avatar>
                <Button className="sign-in nav-bar item" onClick={() => this.handleClickOpen('login')}>Se connecter</Button>
                <Button className="sign-up nav-bar item" onClick={() => this.handleClickOpen('signup')}>S'inscrire</Button>
              </nav>

              <DialogBox open={this.state.open} onClose={this.handleClose} tabIndex={this.state.tabIndex} />
          </div>
      );
    }
  }
  
  export default AccountNavbar;