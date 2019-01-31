import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

class NewsBlock extends Component {

    render() {
        return (
            <article className="article-box">
                <div className="image">
                    <img src={this.props.img} alt="hey" />
                </div>
                <div className="infos">
                    <h3>{this.props.title}</h3>
                    <Avatar alt="Remy Sharp" src={this.props.avatarImg} className="avatar" />
                </div>
            </article>
        );
    }
  }

  NewsBlock.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default NewsBlock;