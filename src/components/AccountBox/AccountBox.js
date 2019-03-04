import React, { Component } from 'react';

import { Avatar } from '@material-ui/core';


import './AccountBox.scss';

class AccountBox extends Component {
    render() {
        return (
            <div id="account-box">
                <Avatar alt='Default Avatar' src={this.props.avatar} className={this.props.avatar ? 'user-avatar' : "default-avatar"}></Avatar>
                <p className="username">{this.props.name}</p>
            </div>
        );
    }
  }
  
  export default AccountBox;