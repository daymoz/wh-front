import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

import { Link } from 'react-router-dom';

import Badge from '@material-ui/core/Badge';
import ChatBubble from '@material-ui/icons/ChatBubble';
import CalendarToday from '@material-ui/icons/CalendarToday';

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

    render() {



        let hasComments = null;
        this.props.commentsNumber > 0 ? hasComments = true : hasComments = false;
        return (
            <Fragment>
                <article className={"article-box "+this.props.type+" index"+this.props.index} onClick={this.handleClick}>
                    <Link to={'/'+this.props.type+'/'+this.props.id}>
                        <div className="box">
                            <img src={this.props.img} alt="hey" />
                            <div className="news-type">{this.props.type}</div>
                            <div className="sub-infos">
                                <h3>{this.props.title}</h3>
                                <div className="publication-date">
                                    <CalendarToday className="publication-date-icon" />
                                    <p>{moment(this.props.date).format('LL')}</p>
                                    <div className="news-infos">
                                    <div className="author-infos">
                                        <Avatar alt={'Avatar de '+this.props.authorName} 
                                        src={this.state.avatarImg ? this.back_end+this.state.avatarImg : defaultAvatar} className="avatar" />
                                        <p>{this.props.authorName}</p>
                                    </div>
                                
                                    {hasComments ? 
                                        <div className="comments">
                                            <Badge badgeContent={this.props.commentsNumber} color="primary" className="comment-badge">
                                                <ChatBubble className="comment-icon" />
                                            </Badge>
                                        </div>
                                        :
                                        ''
                                    }
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </Link>
                </article>
            </Fragment>
        );
    }
  }
  
export default NewsBlock;