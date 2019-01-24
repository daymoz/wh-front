import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import MainNavbar from '../MainNavbar/MainNavbar';

class Header extends Component {
    render() {
      return (
            <header>
                <div className="inside-header">
                    <Link to="/">
                        <Logo />
                    </Link>
                    <MainNavbar />                      
                </div>
            </header>
      );
    }
  }
  
  export default Header;