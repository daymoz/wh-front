import React, { Component } from 'react';
import FrontImage from './fronthome.jpg';
import './../Home/Home.scss';

class PageHeadrest extends Component {
    render() {
        return (
            <section id="slider-header">
                <div className="image">
                    <img src={FrontImage} alt="Front Home" />
                </div>
            </section>
        );
    }
  }
  
  export default PageHeadrest;