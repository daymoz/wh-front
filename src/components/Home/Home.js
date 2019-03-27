import React, { Component, Fragment } from 'react';

import './Home.scss';

import NewsContainer from './../../containers/NewsContainer/NewsContainer';
import PageHeadrest from './../../components/PageHeadrest/PageHeadrest';
import Head from './../../assets/home_bg.jpg';


class Home extends Component {

    render() {
        return (
            <Fragment>
                <div id="home-content">
                    <div className="news">
                        <NewsContainer />
                    </div>
                    <div className="last-decks-block">

                    </div>
                </div>
            </Fragment>
        );
    }
  }
  
  export default Home;