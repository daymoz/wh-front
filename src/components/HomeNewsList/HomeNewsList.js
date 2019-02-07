import React, { Component } from 'react';
import * as API from './../../services/API';

import NewsBlock from './../NewsBlock/NewsBlock';

import axios from 'axios';

class HomeNewsList extends Component {

    constructor() {
        super();
        this.state = {
            news: null
        }
        this.back_end = 'http://dev.waven-hub.fr:1337';
    }

    getAvatarAuthor(authorId) {
        axios.get(this.back_end+'/users/'+authorId, {
        })
        .then(response => {
            // Handle success.
            return response.data.avatar.url;
        })
        .catch(error => {
            // Handle error.
            return error;
        });
    }


    componentDidMount() {
        axios.get(this.back_end+'/articles', {
        })
        .then(response => {
            // Handle success.
            this.setState({
                news: response.data
            });
        })
        .catch(error => {
            // Handle error.
            return error;
        });
    }

    

    render() {
        if(this.state.news) {
            return (
                <section>
                    { this.state.news.map((item, i) => {
                        return <NewsBlock key={i} title={item.title} img={this.back_end+item.visual.url} avatarImg={() => this.getAvatarAuthor(item.author.id)} authorName={item.author.username}  />
                    }) }
                </section>
            );
        } else {
            return (
                <p>yo</p>
            );
        }
    }
  }
  
  export default HomeNewsList;