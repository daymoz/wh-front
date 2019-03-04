import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MainNavbar from '../../components/MainNavbar/MainNavbar';
import AccountNavbar from '../AccountNavbar/AccountNavbar';
import PageHeadrest from './../../components/PageHeadrest/PageHeadrest';

import axios from 'axios';
import * as config from './../../config';

import { withRouter } from 'react-router-dom';
import Head from './../../assets/header.jpg';
import './Header.scss';

class Header extends Component {

    state = {
        headrestUrl: null,
    }
    
    componentDidMount() {
        const splitted = window.location.href.split('/');
        const type = splitted[3];
        const contentId = splitted[4];
        console.log('hey');
        if(type && contentId) {
            axios
            .get(config.backEndDomain+'/'+type+'/'+contentId)
            .then(response => {
                this.setState({
                    headrestUrl: response.data.visual.url,
                }); 
            })
            .catch(error => {
                // Handle error.
                return error;
            });
            console.log(this.state);
        }
        
    }

    // componentDidUpdate() {
    //     const splitted = window.location.href.split('/');
    //     const type = splitted[3];
    //     const contentId = splitted[4];
    //     axios
    //         .get(config.backEndDomain+'/'+type+'/'+contentId)
    //         .then(response => {
    //             this.setState({
    //                 headrestUrl: response.data.visual.url,
    //             }); 
    //         })
    //         .catch(error => {
    //             // Handle error.
    //             return error;
    //         });
    //     console.log(type);
    //     console.log(contentId);
    // }

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
                    <PageHeadrest src={this.state.headrestUrl ? this.state.headrestUrl : Head} />
                </section>
            </header>
        );
    }
  }
  
  export default Header;