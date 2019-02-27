import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MainNavbar from '../../components/MainNavbar/MainNavbar';
import AccountNavbar from '../AccountNavbar/AccountNavbar';
import PageHeadrest from './../../components/PageHeadrest/PageHeadrest';

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
                <section id="headrest">
                    <PageHeadrest />
                </section>
            </header>
        );
    }
  }
  
  export default Header;