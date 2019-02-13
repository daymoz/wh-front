import React, { Component } from 'react';

import PageHeadrest from './../PageHeadrest/PageHeadrest';

import './Home.scss';

import HomeNewsList from '../HomeNewsList/HomeNewsList';

class Home extends Component {

    render() {
        return (
            <main>
                <PageHeadrest />
                <section id="main-content">
                    <h1>Main</h1>
                    <section id="news-part" className="main-left-side">
                        <HomeNewsList />
                    </section>
                </section>
            </main>
        );
    }
  }
  
  export default Home;