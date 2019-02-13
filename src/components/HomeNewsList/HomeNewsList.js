import React, { Component, Fragment } from 'react';

import NewsBlock from './../NewsBlock/NewsBlock';
import { getArticles, getGuides, getMaj, getNews } from './../../services/API';

import axios from 'axios';

import './HomeNewsList.scss';
class HomeNewsList extends Component {

    state = {
        news: [],
        isLoading: true,
    }
    back_end = 'http://dev.waven-hub.fr:1337';
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
    componentDidMount() {
        axios.all([getArticles(this.limit), getGuides(this.limit), getNews(this.limit), getMaj(this.limit)])
            .then(axios.spread(function(articles, guides, news, majs) {
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
                { this.state.isLoading ? <div className="loading"></div> : '' } 
                { this.state.news.map((item, i) => {
                    return <NewsBlock key={i} title={item.title} img={this.back_end+item.visual.url} 
                        authorId={item.author.id ? item.author.id : null} 
                        authorName={item.author.username ? item.author.username : null}  />
                }) }
            </Fragment>
        );
    }
  }
  
  export default HomeNewsList;