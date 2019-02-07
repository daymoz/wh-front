import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

import './NewsBlock.scss';

class NewsBlock extends Component {

    render() {
        return (
            <article className="article-box">
                <div className="image">
                    <img src={this.props.img} alt="hey" />
                    <h3>{this.props.title}</h3>
                </div>
                <div className="infos">
                    <div className="avatar">
                        <Avatar alt={'Avatar de '+this.props.authorName} src={this.props.avatarImg} className="avatar" />
                        <p>{this.props.authorName}</p>
                    </div>
                </div>
            </article>
        );
    }
  }

// 
  
  export default NewsBlock;