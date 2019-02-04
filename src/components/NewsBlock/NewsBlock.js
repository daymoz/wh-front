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
                    <Avatar alt="Remy Sharp" src={this.props.avatarImg} className="avatar" />
                </div>
            </article>
        );
    }
  }

// 
  
  export default NewsBlock;