import React, { Component } from 'react';

class PageContent extends Component {

    componentDidMount() {
        const { match: { params } } = this.props;

        console.log(params);
    }

    render() {
        return (
            <h1>Eh boujouww</h1>
        );
    }
  }
  
  export default PageContent;