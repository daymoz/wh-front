import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MainNavbar from '../../components/MainNavbar/MainNavbar';
import AccountNavbar from '../../components/AccountNavbar/AccountNavbar';

import './Header.scss';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="inside-header">
                    <Link to="/" className="logo-box">
                        <Logo />
                    </Link>
                    <MainNavbar />     
                    <AccountNavbar />          
                </div>
                
            </header>
        );
    }
  }
  
  export default Header;