import React, { Component, Fragment } from 'react';

import './Home.scss';

import NewsContainer from './../../containers/NewsContainer/NewsContainer';
import PageHeadrest from './../../components/PageHeadrest/PageHeadrest';
import Head from './../../assets/header.jpg';


class Home extends Component {

    render() {
        return (
            <Fragment>
                <div id="home-content">
                    <div className="header">

                    </div>
                    <div className="content">
                        <NewsContainer />
                    </div>
                </div>
            </Fragment>
        );
    }
  }
  
  export default Home;