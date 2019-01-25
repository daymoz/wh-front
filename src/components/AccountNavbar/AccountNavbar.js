import React, { Component } from 'react';
import './AccountNavbar.scss';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

class AccountNavbar extends Component {
    render() {
      return (
          <div id="account">
              <nav id="account-navbar" role="navigation">
                <Button className="menu">Se connecter</Button>
                <span className="separator">|</span>
                <Button>S'inscrire</Button>
              </nav>
          </div>
      );
    }
  }
  
  export default AccountNavbar;