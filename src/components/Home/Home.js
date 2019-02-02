import React, { Component } from 'react';

import PageHeadrest from './../PageHeadrest/PageHeadrest';
import NewsBlock from './../NewsBlock/NewsBlock';

import './Home.scss';

import img2 from './../HomeLatest/img2.png';
import img_3 from './../HomeLatest/img_3.png';
import img1 from './../HomeLatest/img1.png';
import img3 from './../HomeLatest/img3.jpg';

class Home extends Component {
    render() {
        return (
            <main>
                <PageHeadrest />
                <section id="main-content">
                    <h1>Main</h1>
                    <section id="news-part" className="main-left-side">
                        <NewsBlock title="LOREM BIDOU BIDOU" />
                        <NewsBlock title="LOREM BIDOU BIDOU" />
                        <NewsBlock title="LOREM BIDOU BIDOU" />
                        <NewsBlock title="LOREM BIDOU BIDOU" />
                    </section>
                </section>
            </main>
        );
    }
  }
  
  export default Home;