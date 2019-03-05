import React, { Component } from 'react';

import NewsBlockList from './../../components/NewsBlockList/NewsBlockList';

import './NewsContainer.scss';

class NewsContainer extends Component {

    render() {
        return (
            <section id="news-part">
            <div className="news-grid-list">
                <NewsBlockList />
            </div>
            </section>
        );
    }
  }
  
  export default NewsContainer;