import React, { Component } from 'react';
import axios from 'axios';
import * as config from './../../config';

import showdown from 'showdown';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './PageContent.scss';

class PageContent extends Component {

    state = {
        content: [],
        isLoading: true,
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        console.log(params);
        axios
        .get(config.backEndDomain+'/'+params.contentType+'/'+params.id)
        .then(res => {
            this.setState({
                content: res.data,
                isLoading: false,
            });
            console.log(config.backEndDomain+this.state.content.visual.url);
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
                            <h1>{this.state.content.title}</h1>
                            <div className="inset">  
                                {ReactHtmlParser(converter.makeHtml(this.state.content.content))}
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