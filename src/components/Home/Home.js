import React, { Component, Fragment } from 'react';

import PageHeadrest from './../PageHeadrest/PageHeadrest';

import './Home.scss';

import NewsContainer from './../../containers/NewsContainer/NewsContainer';

class Home extends Component {

    render() {
        return (
            <Fragment>
                <NewsContainer />
            </Fragment>
        );
    }
  }
  
  export default Home;