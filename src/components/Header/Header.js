import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import MainNavbar from '../MainNavbar/MainNavbar';
import AccountNavbar from '../AccountNavbar/AccountNavbar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Header extends Component {
    render() {
        return (
            <div className="header">
                {/* <div className="inside-header"> */}
                <AppBar className="inside-header">
                    <Toolbar>
                        <Link to="/">
                            <Logo />
                        </Link>
                        <MainNavbar />     
                        <AccountNavbar />  
                    </Toolbar>
                </AppBar>            
                {/* </div> */}
            </div>
        );
    }
  }
  
  export default Header;