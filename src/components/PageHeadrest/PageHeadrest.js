import React, { Component } from 'react';
import './../Home/Home.scss';
import Head from './../../assets/header.jpg';

class PageHeadrest extends Component {
    
    render() {
        return (
            <section id="slider-header">
                <div className="image">
                    <img src={Head} alt="Front Home" />
                </div>
                {/* <HomeLatest /> */}
            </section>
        );
    }
  }
  
  export default PageHeadrest;