import React, { Component } from 'react';

import Comment from './../../components/Comment/Comment';

class CommentsContainer extends Component {

    state = {
        comments: [],
    } 

    componentDidMount() {
        const filteredComments = this.props.comments.filter(comment => comment.comment_level == 0);
        this.setState({
            comments: filteredComments,
        })
    }

    render() {
        console.log(this.state);
        const commentNumber = this.state.comments.length;
        
        return (
            <>
                <h2>{commentNumber + ' commentaire(s)'}</h2>
                <div className="comments-list">
                { this.state.comments.map((item, i) => {
                    return <Comment 
                        key={i}
                        child={item.child_comments}
                        content={item.content}
                        author={item.author}
                        date={item.createdAt}
                    />
                })

                }
                </div>
            </>
        );
    }
  }
  
  export default CommentsContainer;