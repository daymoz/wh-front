import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

import './NewsBlock.scss';

class NewsBlock extends Component {

    state = {
        avatarImg: null,
    }
    back_end = 'http://dev.waven-hub.fr:1337';

    componentDidMount() {
        if(this.props.authorId) {
            axios.get(this.back_end+'/users/'+this.props.authorId, {
            })
            .then(response => {
                this.setState({
                    avatarImg: response.data.avatar.url
                })
            })
            .catch(error => {
                // Handle error.
                return error;
            });
        }
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
                        <Avatar alt={'Avatar de '+this.props.authorName} 
                        src={this.state.avatarImg ? this.back_end+this.state.avatarImg : null} className="avatar" />
                        <p>{this.props.authorName}</p>
                    </div>
                </div>
            </article>
        );
    }
  }

// 
  
  export default NewsBlock;