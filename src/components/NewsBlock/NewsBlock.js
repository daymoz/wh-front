import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

import './NewsBlock.scss';
import FullPageContent from '../../containers/FullPageContent/FullPageContent';

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
            <Fragment>
                    <article className="article-box">
                    
                <a href='/news'>
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
                </a>
                    </article>
            </Fragment>
        );
    }
  }

// 
  
  export default NewsBlock;