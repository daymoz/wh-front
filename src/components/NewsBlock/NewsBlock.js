import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

import './NewsBlock.scss';

class NewsBlock extends Component {

    constructor(props) {
        super();
        this.state = {
            avatarUrl: null,
        }
        this.back_end = 'http://dev.waven-hub.fr:1337';
        console.log(props);
    }

    getAvatar() {
        axios.get(this.back_end+'/users/'+this.props.avatarImg, {
        })
        .then(response => { 
            // Handle success.
            console.log(response.data);
            console.log();
            return response.data.avatar.url;
        })
        .catch(error => {
            // Handle error.
            return error;
        });
    }

    render() {
        return (
            <article className="article-box">
                <div className="image">
                    <img src={this.props.img} alt="hey" />
                    <h3>{this.props.title}</h3>
                </div>
                <div className="infos">
                    <div className="avatar">
                        <Avatar alt={'Avatar de '+this.props.authorName} src={this.getAvatar()} className="avatar" />
                        <p>{this.props.authorName}</p>
                    </div>
                </div>
            </article>
        );
    }
  }

// 
  
  export default NewsBlock;