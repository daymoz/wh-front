import React, { Component } from 'react';
import './AccountNavbar.scss';

class AccountNavbar extends Component {
    render() {
      return (
          <div id="account">
              <div className="user-avatar">
              
              <nav id="account-navbar" role="navigation">
                <button>Se connecter</button>
                <span className="separator">|</span>
                <button>S'inscrire</button>
              </nav>
              </div>
              

          </div>
      );
    }
  }
  
  export default AccountNavbar;