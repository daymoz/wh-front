import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

import Badge from '@material-ui/core/Badge';
import ChatBubble from '@material-ui/icons/ChatBubble';

import * as moment from 'moment';

import './NewsBlock.scss';

import defaultAvatar from './../../assets/default_avatar.png';

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

    handleClick = () => {

    }

    render() {

        let hasComments = null;
        this.props.commentsNumber > 0 ? hasComments = true : hasComments = false;

        return (
            <Fragment>
                    <article className="article-box" onClick={this.handleClick}>
                    
                        <div className="image">
                            <div className="news-infos">
                                <div className="author-infos">
                                    <Avatar alt={'Avatar de '+this.props.authorName} 
                                    src={this.state.avatarImg ? this.back_end+this.state.avatarImg : defaultAvatar} className="avatar" />
                                    <p>{this.props.authorName}</p>
                                </div>
                                
                                {hasComments ? 
                                    <div className="comments">
                                        <Badge badgeContent={this.props.commentsNumber} color="primary">
                                            <ChatBubble className="comment-icon" />
                                        </Badge>
                                    </div>
                                    :
                                    ''
                                }
                            </div>
                            
                            <img src={this.props.img} alt="hey" />
                            <h3>{this.props.title} {moment(this.props.date).fromNow()}</h3>
                        </div>
                    </article>
            </Fragment>
        );
    }
  }

// 
  
  export default NewsBlock;