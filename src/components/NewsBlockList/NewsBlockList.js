import React, { Component, Fragment } from 'react';

import NewsBlock from '../NewsBlock/NewsBlock';
import { getArticles, getGuides, getMaj, getNews } from '../../services/API';
import * as config from './../../config';

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

    setTypeToContent = (arr, type) => {
        arr.map((item, i) => {
            item['type'] = type;
        });
        return arr;
    }

    componentDidMount() {
        axios.all([getArticles(this.limit), getGuides(this.limit), getNews(this.limit), getMaj(this.limit)])
            .then(axios.spread(function(articles, guides, news, majs) {

                articles.data.map((item, i) => {
                    item['type'] = 'article';
                });

                guides.data.map((item, i) => {
                    item['type'] = 'guide';
                });

                news.data.map((item, i) => {
                    item['type'] = 'news';
                });

                majs.data.map((item, i) => {
                    item['type'] = 'maj';
                });
                
                const all_latest = [].concat(...articles.data, ...guides.data, ...news.data, ...majs.data);
                const all_latest_ordered = all_latest.sort(function(a,b){
                    return new Date(b.modifiedAt) - new Date(a.modifiedAt);
                });
                console.log(all_latest_ordered);
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
                { this.state.isLoading ? <div className="loading"></div> : '' } 
                { this.state.news.map((item, i) => {
                    return <NewsBlock key={i} 
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