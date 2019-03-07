import React, { Component } from 'react';
import axios from 'axios';
import * as config from './../../config';

import CalendarToday from '@material-ui/icons/CalendarToday';
import * as moment from 'moment';

import showdown from 'showdown';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import Avatar from '@material-ui/core/Avatar';
import defaultAvatar from './../../assets/default_avatar.png';

import './PageContent.scss';
import CommentsContainer from '../CommentsContainer/CommentsContainer';

class PageContent extends Component {

    state = {
        content: [],
        author: [],
        isLoading: true,
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        axios
        .get(config.backEndDomain+'/'+params.contentType+'/'+params.id)
        .then(res => {
            this.setState({
                content: res.data,
            });
            return axios
            .get(config.backEndDomain+'/users/'+res.data.author.id);
        }).then(res => {
            this.setState({
                author: res.data,
                isLoading: false,
            });
            console.log(this.state);
        })
        .catch(err => {
            console.log(err);
        });

    }

    render() {

        const converter = new showdown.Converter();

        return (
            <>
                { this.state.isLoading ? <div className="loading"></div> : '' }
                { this.state.content.length !== 0 ?
                
                <>
                    <div id="bg">
                        <img src={config.backEndDomain+this.state.content.visual.url} alt={this.state.content.title} />
                        
                    </div>
                    <section id="page-content">
                        <div className="content">
                            <h1 className="content-title">{this.state.content.title}</h1>
                            
                            <div className="inset">
                                <div className="content-release-date">
                                    <CalendarToday /><p>Publié le {moment(this.props.date).format('LL')}</p>
                                </div>
                                <div className="content-body">
                                    {ReactHtmlParser(converter.makeHtml(this.state.content.content))}
                                </div>
                                <div className="content-author">
                                    <Avatar 
                                        alt={'Avatar de '+this.state.author.username} 
                                        src={this.state.author.avatar ? config.backEndDomain+this.state.author.avatar.url : defaultAvatar} className="avatar"
                                    />
                                    <p>{this.state.author.username}</p>
                                </div>
                            </div>
                            
                            <div id="comments">
                                <CommentsContainer comments={this.state.content.comments} />
                            </div>
                        </div>
                    </section>
                </>
                :
                ''
                }
            </>
        );
    }
  }
  
  export default PageContent;