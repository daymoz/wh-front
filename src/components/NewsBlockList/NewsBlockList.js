import React, { Component, Fragment } from 'react';

import NewsBlock from '../NewsBlock/NewsBlock';
import { getArticles, getGuides, getMaj, getNews } from '../../services/API';
import * as config from './../../config';

import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';

import './NewsBlockList.scss';
class NewsBlockList extends Component {

    state = {
        news: [],
        isLoading: true,
    };
    limit = 3;

    componentDidMount() {
            axios.get('http://dev.waven-hub.fr:1337/actualites?_limit='+this.limit)
            .then(news => {
                return news.data.sort((a,b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
            }).then(res => {
                this.setState({
                    news: res,
                    isLoading: false,
                })
            })
            .catch(error => {
                // Handle error.
                return error;
            })
    }

    

    render() {
        console.log(this.state);
        return (
            <Fragment>
                { this.state.isLoading ? <CircularProgress color="primary" /> : '' } 
                { this.state.news.map((item, i) => {
                    return <NewsBlock key={i} 
                        index={i}
                        id={item.id}
                        title={item.title} 
                        img={config.backEndDomain+item.visual.url} 
                        authorId={item.author.id ? item.author.id : null} 
                        authorName={item.author.username ? item.author.username : null}
                        commentsNumber={item.comments.length}
                        date={item.createdAt}
                        type={'actualites'}
                        />
                }) }
            </Fragment>
        );
    }
  }
  
  export default NewsBlockList;