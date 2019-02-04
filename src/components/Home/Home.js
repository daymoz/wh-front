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
                        <NewsBlock avatarImg={img1} img={img2} title="LOREM BIDOU BIDOU" />
                        <NewsBlock avatarImg={img3} img={img_3} title="LOREM BIDOU BIDOU et voici la folie des grandeurs maggle tu t'y attends pas mais c'est là" />
                        <NewsBlock avatarImg={img_3} img={img1} title="LOREM BIDOU BIDOU" />
                        <NewsBlock avatarImg={img2} img={img3} title="LOREM BIDOU BIDOU" />
                    </section>
                </section>
            </main>
        );
    }
  }
  
  export default Home;