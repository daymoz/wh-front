import React, { Component } from 'react';
import ChildComment from './ChildComment';

import axios from 'axios';

import Avatar from '@material-ui/core/Avatar';
import defaultAvatar from './../../assets/default_avatar.png';

import * as config from './../../config';

import * as moment from 'moment';

class Comment extends Component {

    state = {
        author: [],
        childs: [],
    }

    componentDidMount() {
        axios
            .get(config.backEndDomain+'/users/'+this.props.author)
            .then(res => {
                this.setState({
                    author: res.data,
                }); 
            })
            .catch(err => {
                console.log(err.data);
            })
        axios
            .get(config.backEndDomain+'/comments/'+this.props.child)
            .then(res => {
                console.log(res.data);
                this.setState({
                    childs: res.data,
                }); 
            })
            .catch(err => {
                console.log(err.data);
            })
    }

    render() {

        return (
            <>
                <div className="comment-content">
                    <div className="comment-author">
                        <Avatar 
                            alt={'Avatar de '+this.state.author.username} 
                            src={this.state.author.avatar ? config.backEndDomain+this.state.author.avatar.url : defaultAvatar} className="avatar" />
                            <p>{this.state.author.username}</p>
                    </div>
                    <div className="comment-body">
                        {this.props.content}
                    </div>
                    <ChildComment  />
                </div>
            </>
        );
    }
  }
  
  export default Comment;