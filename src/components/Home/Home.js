import React, { Component, Fragment } from 'react';

import './Home.scss';

import NewsContainer from './../../containers/NewsContainer/NewsContainer';
import PageHeadrest from './../../components/PageHeadrest/PageHeadrest';
import Head from './../../assets/header.jpg';


class Home extends Component {

    render() {
        return (
            <Fragment>
                {/* <section id="headrest">
                    <PageHeadrest src={Head} />
                </section> */}
                
                <NewsContainer />
            </Fragment>
        );
    }
  }
  
  export default Home;