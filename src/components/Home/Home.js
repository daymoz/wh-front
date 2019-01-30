import React, { Component } from 'react';

import PageHeadrest from './../PageHeadrest/PageHeadrest';
import HomeLatest from './../HomeLatest/HomeLatest';

import './Home.scss';

class Home extends Component {
    render() {
        return (
            <main>
                <PageHeadrest />
                <section id="main-content">
                    <HomeLatest />
                    <h1>Main</h1>
                </section>
            </main>
        );
    }
  }
  
  export default Home;