import React, { Component } from 'react';

import CommentsList from './../../components/NewsBlockList/CommentsList';

import './NewsContainer.scss';

class CommentsContainer extends Component {

    render() {
        return (
            <div className="comments-list">
                <CommentsList />
            </div>
        );
    }
  }
  
  export default CommentsContainer;