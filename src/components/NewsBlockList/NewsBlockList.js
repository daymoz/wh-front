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
    }
    limit = 6;

    // componentDidMount() {
    //     getArticles()
    //     .then(response => {
    //         this.setState({
    //             news: response.data
    //         })
    //     })
    //     .catch(error => {
    //         // Handle error.
    //         return error;
    //     });
    // }

    // setTypeToContent = (arr, type) => {
    //     arr.map((item, i) => {
    //         item['type'] = type;
    //     });
    //     return arr;
    // }

    componentDidMount() {
        axios.all([getArticles(this.limit), getGuides(this.limit), getNews(this.limit), getMaj(this.limit)])
            .then(axios.spread(function(articles, guides, news, majs) {

                articles.data.map((item, i) => {
                    return item['type'] = 'articles';
                });


                guides.data.map((item, i) => {
                   return item['type'] = 'guides';
                });

                news.data.map((item, i) => {
                    return item['type'] = 'actualites';
                });

                majs.data.map((item, i) => {
                    return item['type'] = 'majs';
                });
                
                const all_latest = [].concat(...articles.data, ...guides.data, ...news.data, ...majs.data);
                const all_latest_ordered = all_latest.sort(function(a,b){
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                return all_latest_ordered;
                
            }))
            .then(response => {
                this.setState({
                    news: response,
                    isLoading: false,
                })
            })
            .catch(error => {
                // Handle error.
                return error;
            })
    }

    

    render() {
        
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
                        date={item.updatedAt}
                        type={item.type}
                        />
                }) }
            </Fragment>
        );
    }
  }
  
  export default NewsBlockList;