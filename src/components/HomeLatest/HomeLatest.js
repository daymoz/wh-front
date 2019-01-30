import React, { Component } from 'react';
import './HomeLatest.scss';

class HomeLatest extends Component {
    render() {
        return (
            <div className="home-latest">
                <div className="latest-news box">
                    <h2>Dernière actualité</h2>
                    <div className="infos">
                        
                    </div>
                </div>
                <div className="latest-article box">
                    <h2>Dernier article</h2>
                    <div className="infos">

                    </div>
                </div>
                <div className="latest-guide box">
                    <h2>Dernier guide</h2>
                    <div className="infos">

                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default HomeLatest;