import React, { Component } from 'react';
import './../Home/Home.scss';

class PageHeadrest extends Component {

    render() {
        return (
            <section id="slider-header">
                <div className="image">
                    <img src={this.props.src} alt="Front Home" />
                </div>
                {/* <HomeLatest /> */}
            </section>
        );
    }
  }
  
  export default PageHeadrest;