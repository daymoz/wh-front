import React, { Component, Fragment } from 'react';

import NewsBlock from './../NewsBlock/NewsBlock';

import axios from 'axios';

class HomeNewsList extends Component {

    state = {
            news: []
        }
    back_end = 'http://dev.waven-hub.fr:1337';

    getAvatarAuthor(authorId) {
        axios.get(this.back_end+'/users/'+authorId, {
        })
        .then(response => {
            
            return axios.get(this.back_end+'/users/'`${response.data.author.id}`);
        }).then(response => {
            console.log(response);
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
            
            return axios.get(this.back_end+'/users/'`${response.data.author.id}`);
        }).then(response => {
            console.log(response);
        })
        .catch(error => {
            // Handle error.
            return error;
        });
    }

    

    render() {
        return (
            <Fragment>
                { this.state.news.map((item, i) => {
                    return <NewsBlock key={i} title={item.title} img={this.back_end+item.visual.url} avatarImg={item.author.id} authorName={item.author.username}  />
                }) }
            </Fragment>
        );
    }
  }
  
  export default HomeNewsList;